import { Model } from 'Sequelize';

export interface ReservationInfoAttributes {
    id?: string;
    reservation_id: string;
    room_type: string;
    customer_id: string;
    amount_paid: string;
    status: string;
    checking_time: string;
    checkout_time: string;
}

export interface ReservationInfoInstance
    extends Model< ReservationInfoAttributes>,
    ReservationInfoAttributes { }
