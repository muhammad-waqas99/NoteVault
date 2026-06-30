const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({


    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,

    },
tags: {
  type: [String],
  default: ["General"],
  validate: {
    validator: function (arr) {
      return arr.length <= 3;
    },
    message: "Max 3 tags allowed"
  }
},

  isPinned: {
     type:Boolean,
     default:false
  },
    
    Date:{
        type: Date,
        default:Date.now
    }
},{timestamps:true})

const Note = mongoose.model('note' , noteSchema)

module.exports=Note;