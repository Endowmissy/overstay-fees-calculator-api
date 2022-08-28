import { Model } from 'sequelize';

export interface RoomTypeAttributes {
    id?: string;
    room_type: string;
    week_day_rate: string;
    weekend_rate: string;
}

export interface RoomTypeInstance
    extends Model<RoomTypeAttributes>,
    RoomTypeAttributes { }
