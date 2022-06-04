'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        categoryId: 1,
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        eventId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        eventId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        eventId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        eventId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        eventId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        eventId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        eventId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        eventId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        eventId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        eventId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        eventId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        eventId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        eventId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        eventId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
