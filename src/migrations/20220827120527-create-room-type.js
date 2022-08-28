'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room_types', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      room_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      week_day_rate: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      weekend_rate: {
        type: Sequelize.FLOAT,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('room_types');
  }
};
