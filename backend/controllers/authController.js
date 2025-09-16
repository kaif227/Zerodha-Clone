const User = require("../models/UserModel");  // FIXED path 
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });
    // const token = createSecretToken(user._id);
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      httpOnly: true,
      secure: true, // change to true in production with https
      sameSite: "none",   // required if frontend and backend are on different domains
      maxAge: 7 * 24 * 60 * 60 * 1000
    });



    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });

    
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "none",  // required if frontend and backend are on different domains
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });

    next();
  } catch (error) {
    console.error(error);
  }
};
