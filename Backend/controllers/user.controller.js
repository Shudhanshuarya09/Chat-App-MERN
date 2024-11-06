export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user_id;
  } catch (error) {
     console.error("error in getUsersForSidebar:", error.message);
     res.status(500).json({ error: "Internal server error" });
  }
}

