'use strict';
module.exports = { 
  up: async(queryInterface, Sequelize) =>{
  await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('reservation_infos', {
    id: {
      type: Sequelize.DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    reservation_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    room_type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    customer_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    amount_paid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('paid', 'not-paid'),
      defaultValue: 'paid'
    },
    checking_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    checkout_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW()
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW()
    }
  }))
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('reservation_infos');
}
}
