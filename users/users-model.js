const db = require("../config/knexConfig.js");

module.exports = {
  findUser,
  findUserById,
  addUser
};

function findUser() {
  return db("users");
}

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(user) {
  return db("users").insert(user);
}