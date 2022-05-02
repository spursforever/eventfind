'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users"}
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        allowNull: false,
        references: {model: "Categories"}
      },
      name: {
        type: Sequelize.STRING(60)
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(320)
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};