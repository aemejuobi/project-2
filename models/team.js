module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    sportName: DataTypes.STRING,
    teamName: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    openings: DataTypes.INTEGER,
    isOpen: DataTypes.BOOLEAN
  });
  return Team;
};
