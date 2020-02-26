const router = require("express").Router();
const restricted = require("../middleware/restricted.js");
const Users = require("../users/users-model.js");

router.get("/users", restricted, async (req, res) => {
  const { username, password } = req.headers;

  if (username && password) {
    try {
      const users = await Users.findUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json({ message: "Invalid creds" });
  }
});

module.exports = router;