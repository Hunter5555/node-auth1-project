const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const server = express();

const registerRouter = require("../controllers/register-router.js");
const loginRouter = require("../controllers/login-router.js");
const usersRouter = require("../controllers/users-router.js");
const restrictedRouter = require("../controllers/restricted-router.js");
const sessionConfig = require("../config/sessionConfig.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("./api/users", usersRouter);
server.use("/api/restricted", restrictedRouter);

module.exports = server;