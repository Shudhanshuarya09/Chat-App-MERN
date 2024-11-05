import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!message) {
      return res.status(203).json({ message: "There is nothing to send!" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });



    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId, 
      message,     
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await newMessage.save();
    // await conversation.save();

    await Promise.all([conversation.save(), newMessage.save()]);


    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async  (req, res) => {
  try {
    const {id:userToChatId}= req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {$all: [senderId, userToChatId]},
    }).populate("messages");

    res.status(200).json(conversation.messages);
    
  } catch (error) {
    console.log("Error in sendMessage controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}