const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./configs/db");
const app = express();
const routes = require("./routes/index");
const User = require("./models/users");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(4000, () => console.log("Servidor escuchando en el puerto 4000"));
});
