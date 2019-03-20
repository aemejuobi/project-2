module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    userEmail: DataTypes.STRING
  });
  return User;
};