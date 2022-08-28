'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date()

    await queryInterface.bulkDelete('room_types', null, {
      truncate: true,
    })

    await queryInterface.bulkInsert(
     'room_types',
     [
       {
          id: '11fd4ec4-9673-474c-9d15-3f9f6babcfaf',
          room_type: 'regular',
          week_day_rate: 7,
          weekend_rate: 10,
          created_at: date,
          updated_at: date,
       },
       {
          id: '104e7dfc-689c-44ec-a822-d9312b580d51',
          room_type: 'deluxe',
          week_day_rate: 8.5,
          weekend_rate: 12,
          created_at: date,
          updated_at: date,
       },
       {
          id: '336b3521-a1ac-429f-994b-6679e20a1d7b',
          room_type: 'palatial',
          week_day_rate: 11,
          weekend_rate: 16,
          created_at: date,
          updated_at: date,
       },
     ],
     {}
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('room_types', null, {})
  }
};
