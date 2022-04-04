'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: {model: 'Users'}
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.hasMany(models.Image, {foreignKey: 'albumId'});
    Album.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Album;
};