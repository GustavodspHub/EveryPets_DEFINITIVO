const express = require("express")
const app = express();
const routes = require("./routes");
require("./database");


app.use(express.json());


app.listen(3333, () => console.log("Server is running"))
app.use(routes)

