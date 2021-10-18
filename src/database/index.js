const Sequelize = require("sequelize");
const dbConfig = require("../config/config.json");

const User = require("../models/establishment");

const connection = 
    new Sequelize(dbConfig.development);

User.init(connection);

module.exports = connection;