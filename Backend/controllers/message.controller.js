import conversation from "../model/conversation.model";

export const sendMessage = async (req, res) => {
  try {
    const {messsage} = req.body;
    const {id:receiverId} = req.params;
    const senderId = req.user._id

let conversation = await conversation.findOne({
  participants: {$all: [senderId, receiverId]},
})

if(!conversation){
  conversation = await conversation.create({
    participants: [senderId, receiverId],
  });
}

const newMessage = new Message({
senderId,
receiverId,
messsage,
});

if (newMessage){
  conversation.messsage.push(newMessage._id);
}

res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.messsage)
    res.status(500).json({ error: "Internal server error "});
  }
};