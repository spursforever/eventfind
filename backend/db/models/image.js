'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: 'Users' }
    },
    albumId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: 'Albums' }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    content: {
      allowNull: false,
      type:DataTypes.TEXT
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Album, { foreignKey: 'albumId' } );
    Image.belongsTo(models.User, { foreignKey: 'userId' } );
    Image.hasMany(models.Comment, { foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true })
  };
  return Image;
};