import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPasword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPasword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User Created Successfull",
      user: {
        id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
      
    });
  } catch (error) {
    if (error.response) {
      console.log(error);
      alert("Error:" + error.response.data.message);
    }

   
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    } else {
      res.status(200).json({
        message: "Login Successfull",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
