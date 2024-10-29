import jwt from 'jsonwebtoken'
import user from '../model/user.model'

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true,
    sameSite:"strict ",
  });
}

export default generateTokenAndSetCookie;