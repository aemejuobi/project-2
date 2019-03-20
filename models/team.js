module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    sportName: DataTypes.STRING,
    teamName: DataTypes.STRING,
    // teamId: DataTypes.INTEGER,
    email: DataTypes.STRING
  });
  return Team;
};
