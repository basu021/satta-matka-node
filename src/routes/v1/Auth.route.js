const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../../models/user.model");

router.post("/register", async (req, res, next) => {
  console.log(req.body);
//   res.json({ message: "Register route" });

try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();

    const doesExist = await User.getUserByEmail(email);
    if (doesExist) throw createError.Conflict(`${email} is already registered`);

    // Create a new user
    // await User.createUser(email, password);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
});

router.post("/login", (req, res, next) => {
  res.json({ message: "Login route" });
});

router.post("/refresh-token", (req, res, next) => {
  res.json({ message: "Refresh token route" });
});

router.delete("/logout", (req, res, next) => {
  res.json({ message: "Logout route" });
});

module.exports = router;
