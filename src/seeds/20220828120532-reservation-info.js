'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     const date = new Date()

     await queryInterface.bulkDelete('reservation_infos', null, {
       truncate: true,
     })

     await queryInterface.bulkInsert(
      'reservation_infos',
      [
        {
          id: 'e6c72343-dceb-470e-9446-b95c6997ec33',
          reservation_id: '12000',
          room_type: 'deluxe',
          customer_id: '12323',
          amount_paid: '230000',
          status: 'paid',
          checking_time: '2020-12-12 12:00',
          checkout_time: '2021-01-01 11:00',
          created_at: date,
          updated_at: date,
        },
        {
          id: '7b169f98-f0b7-4a09-b0da-edc6ee073acd',
          reservation_id: '12001',
          room_type: 'regular',
          customer_id: '12324',
          amount_paid: '150000',
          status: 'paid',
          checking_time: '2020-12-12 12:00',
          checkout_time: '2021-01-01 11:00',
          created_at: date,
          updated_at: date,
        },
        {
          id: '2a147622-b0bc-4e75-bbfc-4e72d84459f3',
          reservation_id: '12002',
          room_type: 'palatial',
          customer_id: '12100',
          amount_paid: '560000',
          status: 'paid',
          checking_time: '2020-12-12 12:00',
          checkout_time: '2021-01-01 11:00',
          created_at: date,
          updated_at: date,
        },
        {
          id: '15acc22e-4166-4e80-8cb2-3ac6afd5a812',
          reservation_id: '12003',
          room_type: 'regular',
          customer_id: '12323',
          amount_paid: '200000',
          status: 'paid',
          checking_time: '2020-12-25 12:00',
          checkout_time: '2021-01-04 11:00',
          created_at: date,
          updated_at: date,
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservation_infos', null, {})
  }
};
