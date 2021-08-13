const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    // userId:{
    //     type:String,
    //     require:true
    // },
    username:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    // img:{
    //     type:String,
    // },
    likes:{
        type:Array,
        default:[]
    },
    dislikes:{
        type:Array,
        default:[]
    }
    

  },
  {timestamps:true}
);

module.exports = mongoose.model('Post', PostSchema)