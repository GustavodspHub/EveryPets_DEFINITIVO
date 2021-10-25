const routes = require("express").Router();


const establishmentController =  require("./controller/establishmentController");
const sessionConstroller = require ("./controller/session");

routes.post('/session', sessionConstroller.store);

const authMiddleware = require("./middlewares/authorization")

routes.post('/cadastro', establishmentController.store);

routes.use(authMiddleware)

module.exports = routes;