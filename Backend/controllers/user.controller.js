import User from '../model/User.model.js';

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user_id;

    const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
res.status(200).json(filteredUsers);

  } catch (error) {
     console.error("error in getUsersForSidebar:", error.message);
     res.status(500).json({ error: "Internal server error" });
  }
}

