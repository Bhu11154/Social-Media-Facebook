const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true,
        min:6
    },
    confirmpassword:{
        type:String,
        require:true,
        min:6
    }
  }
);

module.exports = mongoose.model('User', UserSchema)