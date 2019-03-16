/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    sportName: DataTypes.STRING,
    teamName: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    teamOpenings: DataTypes.BOOLEAN
  });
  return Team;
};
