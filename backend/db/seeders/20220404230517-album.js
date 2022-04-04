'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

     
      return queryInterface.bulkInsert('Albums', [
        {userId: 1, title: "Already visited"},
        {userId: 1, title: "Plan to visit it"},
        {userId: 2, title: "Already visited"},
        {userId: 2, title: "Plan to visit it"},
        {userId: 3, title: "Already visited"},
        {userId: 3, title: "Plan to visit it"},
        {userId: 4, title: "Already visited"},
        {userId: 4, title: "Plan to visit it"},
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Albums', null, {});
    
  }
};
