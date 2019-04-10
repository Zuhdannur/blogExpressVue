'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User,{
      foreignKey: 'id_user',
      onDelete:'CASCADE'
    });
  };
  return Post;
};