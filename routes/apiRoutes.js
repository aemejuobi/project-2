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
=======
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);

    });
  });
};
