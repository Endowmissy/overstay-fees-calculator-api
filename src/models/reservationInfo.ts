'use strict';

import { DataTypes, Sequelize  } from 'sequelize';
import sequelize from './index';
import { ReservationInfoInstance } from '../interfaces/reservation.info.interfaces';
const ReservationInfo = sequelize.define<ReservationInfoInstance> (
  'ReservationInfo', 
  {
    reservation_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount_paid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('paid', 'not-paid'),
      defaultValue: 'paid'
    },
    checking_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkout_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, 
  {
    tableName: 'reservation_infos',
    underscored: true,
  },
);

export default ReservationInfo;
