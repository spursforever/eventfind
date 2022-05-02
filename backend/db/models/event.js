'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.Ticket, { foreignKey: "eventId", onDelete: 'CASCADE', hooks: true }); 
    Event.belongsTo(models.User, { foreignKey: "userId" }); 
    Event.belongsTo(models.Category, { foreignKey: "categoryId" }); 
  };
  return Event;
};