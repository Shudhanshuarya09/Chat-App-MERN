import jwt from "jsonwebtoken";
import user from "../model/user.model.js";

const protectRoute = async(req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ erro: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
      return res.status(401).json({ erro: "Unauthorized - Invalid Token " });
    }
const user = await user.findById(decoded.userId).select("-password");

if(!user){
  return res.status(404).json({error: "User not found"});
}

req.user = user
next();
  } catch (error) {
    console.log("Error in protectRoute middlware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;