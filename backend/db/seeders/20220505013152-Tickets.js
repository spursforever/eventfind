'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tickets', [
      {
        eventId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 10,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 15,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 14,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 6,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tickets', null, {});

  }
};
