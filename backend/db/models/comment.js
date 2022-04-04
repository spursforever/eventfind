'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: 'Users' }
    },
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: 'Images' }
    },
    comments: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' } );
    Comment.belongsTo(models.Image, {foreignKey: 'imageId'} );
  };
  return Comment;
};