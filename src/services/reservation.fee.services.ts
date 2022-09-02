import sequelize from '../models';
import ReservationInfoModel from '../models/reservationInfo';
import RoomTypeModel from '../models/roomtype'
import { calculateOverStayFeeRequest } from '../interfaces/calculate.overstay.fee.interfaces'
import moment from 'moment';
import logger from '../config/logger'
import NotFoundError from '../utils/errors/not.found.error';
import BadRequestError from '../utils/errors/bad.request.error';

class ReservationInfoService {
    // fetch reservation details
    private async getReservationInfo (reservation_id: any): Promise <any> {
        const fetchCustomerDetails = await ReservationInfoModel.findOne({
            where: {
                reservation_id
            }
        })
        return fetchCustomerDetails;
    };
    
    // fetch room rates using room_type
    private async getRoomRates (room_type: any): Promise <any> {
        const fetchRoomRate = await RoomTypeModel.findOne({
            where : {
                room_type
            }
        })
        return fetchRoomRate;
    }

    // format current date
    private async formatDate(): Promise <any> {
        const getCurrentDate = moment();
        const formatDate = moment(getCurrentDate).format('YYYY-MM-DD');
        return formatDate;
    }

    // calculate overstay hours
    private async calculateOverStayHours (expectedTime: string, actualTime: string): Promise <any> {
        const start = moment(actualTime);
        const end = moment(expectedTime);
        const hoursDifference = start.diff(end, "hours")
        return hoursDifference;
    }
    
    // generate overstay fee value
    private async overStayFeeValue(isWeekend:any, getReservationDetails: any, overStayHours: number, roomType: string) {
        const fetchRoomType = await this.getRoomRates(roomType);
        let overStayFee: any;
        // if the day falls within weekend, use weekend_rate otherwise use week_day rate
            if(!isWeekend) {
                const rate = fetchRoomType.week_day_rate;
                const hourlyRate = (getReservationDetails.amount_paid * rate) / 100;
                overStayFee = overStayHours * hourlyRate;
           }
           else {
                const rate = fetchRoomType.weekend_rate;
                const hourlyRate = (getReservationDetails.amount_paid * rate) / 100;
                overStayFee = overStayHours * hourlyRate;      
        }
        return overStayFee;
    }

    // calculate overstay fee using overstay hours and hourly rate
    async calculateOverStayFee (body: calculateOverStayFeeRequest): Promise <any> {
        const { reservation_id, actual_checkout_time } = body;
        const getReservationDetails = await this.getReservationInfo(reservation_id);

        // check if customer details exist
        if (!getReservationDetails) {
            logger.info('Reservation details does not exist')
            throw new NotFoundError('Reservation details does not exist')
        }
        const expectedCheckOutTime = moment(getReservationDetails.checkout_time).format('YYYY-MM-DD HH:mm:ss');
        const getDate = await this.formatDate();
        const actualCheckoutTime = moment(getDate + ' ' + actual_checkout_time).format('YYYY-MM-DD HH:mm:ss')
        
        // check if the expected check out time is not the same as actual checkout time
        if (moment(expectedCheckOutTime).isSameOrAfter(moment(actualCheckoutTime))) {
            logger.info('Ooops, this operation cannot be performed');
            throw new BadRequestError('Bad Request');
        }
        
        // check if the expected checkout time is before actual checkout, then proceed to calculate overstay dues
        let result, overStayHours, roomType
        if (moment(expectedCheckOutTime).isBefore(moment(actualCheckoutTime))) {
            overStayHours = await this.calculateOverStayHours(expectedCheckOutTime, actualCheckoutTime)
            const day = moment(actualCheckoutTime).format('dddd');
            const isWeekend = ['Saturday', 'Sunday'].includes(day);
            roomType = getReservationDetails.room_type;
    
            if (roomType) {
                result = await this.overStayFeeValue(isWeekend, getReservationDetails, overStayHours, roomType);
            }
        }
        const data = {
            check_out_time: expectedCheckOutTime,
            actual_checkout_time: actualCheckoutTime,
            reservation_id: body.reservation_id,
            room_type: roomType,
            over_stay_hours: overStayHours,
            over_stay_fee: result,
        }
        return data;
    }
}

export default ReservationInfoService;
