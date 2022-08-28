'use strict';

import { DataTypes } from 'sequelize';
import sequelize from './index';
import { RoomTypeInstance } from '../interfaces/room.types.interfaces'
const RoomType = sequelize.define<RoomTypeInstance> (
  'RoomType', 
  {
    room_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    week_day_rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weekend_rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: 'room_types',
    underscored: true,
  }
);

export default RoomType;
