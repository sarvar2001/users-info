const express = require("express");
const connectDb = require("./config/config");
const app = express();
const cors = require("cors");

connectDb();
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
cors();
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/api/users", require("./routes/usersRoutes"));

app.listen(5000, console.log("server is running on port 5000"));
