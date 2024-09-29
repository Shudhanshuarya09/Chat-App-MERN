import User from '../model/user.model.js';

export const signup = async (req, res) => {
 try {
  const {fullName, username, password, confirmPassword, gender } = req.body;

  if(password !== confirmPassword)
  {
    returnres.status(400).json({error:"Passwords do not match"})
  }

  const user = await User.findOne({username});

  if(user) {
    return res.status(400).json({error: "username already exixts"})
  }

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  const newUser = new User ({
    fullName,
    username,
    password,
    gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic
  })
  await newUser.save();

  res.status(201).json({
    _id: newUser._id,
    fullname: newUser.fullName,
    username: newUser.username,
    profilePic: newUser.profilePic
  })
 }
 catch (error) {
  console.log("Enter in signup controller ", error.message);
  res.status(500).json({error:"Internal server Error"})
 }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};