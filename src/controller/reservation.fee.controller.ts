import ReservationInfoService from '../services/reservation.fee.services';
import { Request, Response, NextFunction } from 'express';
import Helper from '../utils/helpers/helpers'
import logger from '@src/config/logger';
const { successResponse, errorResponse } = Helper;
const reservationInfoService = new ReservationInfoService()

export default class ReservationInfoController {
  static async overStayFeeDues(req: Request, res: Response) {
    try {
        logger.info(`::: Calulating customer's overstay dues`)
        const data = await reservationInfoService.calculateOverStayFee(req.body);
        logger.info(`::: Customer's overstay dues has been successfully calculated`)
        return successResponse(
            res, 'Overstay dues calculated successfully', 201, data);
        } catch (error) {
            logger.info(`::: Failed to calculate customer's overstay dues`, error)
            return errorResponse(req, res, error);
        }
    };
}
