'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Categories', [
      {
        type: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Films and Media",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Sports & Fitness",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Fashion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Categories', null, {});

  }
};
