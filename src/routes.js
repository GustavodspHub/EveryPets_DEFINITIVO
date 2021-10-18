const routes = require("express").Router();

const establishmentController =  require("./controller/establishmentController");
const session = require ("./controller/session");

routes.post('/cadastro', establishmentController.store);
routes.post('/session', session.store)


module.exports = routes;