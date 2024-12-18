import jwt from 'jsonwebtoken'
// import user from '../model/User.model'

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })
  
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndSetCookie;