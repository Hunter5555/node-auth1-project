const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");

router.post("/", async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await Users.findUserByUsername(username);
    console.log(user);

    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;

      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ message: "An error occured when logging out." });
      } else {
        res.status(200).json({ message: "bye, friend" });
      }
    });
  } else {
    res.status(200).json({ message: "you arent logged in" });
  }
});

module.exports = router;