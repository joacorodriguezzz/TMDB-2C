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
  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });
})
.catch((error) => {
  console.error('Error syncing the database:', error);
});
