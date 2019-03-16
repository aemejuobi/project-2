var db = require("../models");

module.exports = function(app) {
  // Get all Project
  app.get("/api/Project", function(req, res) {
    db.Project.findAll({}).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Create a new Project
  app.post("/api/Project", function(req, res) {
    db.Project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Delete an Project by id
  app.delete("/api/Project/:id", function(req, res) {
    db.Project.destroy({ where: { id: req.params.id } }).then(function(
      dbProject
    ) {
      res.json(dbProject);
    });
  });
};
