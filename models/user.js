'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
     type : DataTypes.STRING,
     unique:{
       args: true,
       message : 'Username Must be unique',
       fields: [sequelize.fn('lower',sequelize.col('username'))]
     },
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};