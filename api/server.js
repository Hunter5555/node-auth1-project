const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const registerRouter = require("../controllers/register-router.js");
const loginRouter = require("../controllers/login-router.js");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);

module.exports = server;