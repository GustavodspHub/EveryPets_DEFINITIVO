const routes = require("express").Router();

const establishmentController =  require("./controller/establishmentController");

routes.post('/cadastro', establishmentController.store);

module.exports = routes;