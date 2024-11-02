import mongoose from 'mongoose';

const messageschema = new mongoose.Schema ({
  senderId:{
    type: mongoose.SchemaTypeOptions.Types.ObjectId,
    ref: "User",
    required: true
  },
  recieverId:{
    type: mongoose.SchemaTypeOptions.Types.ObjectId,
    ref: "User",
    required: true
  },
  mesage:{
    type: String,
    required: true
  }
}, {timestamps: true});

const message = mongoose.model("Message", messageschema);

export default Message;