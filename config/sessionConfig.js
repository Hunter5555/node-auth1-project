const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const configKnex = require("./knexConfig.js");

module.exports = {
  name: "monster",
  secret: "keep it secret, keep it safe",
  cookie: {
    maxAge: 1000 * 60 * 10, // milliseconds
    secure: false, // use cookie over https
    httpOnly: true // false means can JS access the cookie on the client
  },
  resave: false, // avoid recreating existing unchanged sessions
  saveUninitialized: false, // GDPR compliance
  store: new KnexSessionStore({
    knex: configKnex,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 30 // delete expired sessions
  })
};