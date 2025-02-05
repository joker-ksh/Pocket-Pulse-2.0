const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: { 
    type: String,
    required: false,  
  },
  avatar : {
    type : String,
    required : false,
    default: null,
  },
  rating : {
    type : Number,
    required : false,
    default: 100,
  },
  friends: [
    {
      uid: { type: String, required: true }, // Friend's unique ID
      name: { type: String, required: true }, // Friend's name
    },
  ],
  Transactions : [
    {
      fid : {type : String, required : true},
      type : {type : String, required : true},
      amount : {type : Number, required : true}
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
