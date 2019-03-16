/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING, 
    // teamId: DataTypes.INTEGER
  });
  return User;
};