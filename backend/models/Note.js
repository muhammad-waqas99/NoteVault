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
    tag:{
         type:String,
        default:"General",
    },

    
    Date:{
        type: Date,
        default:Date.now
    }
},{timestamps:true})

const Note = mongoose.model('note' , noteSchema)

module.exports=Note;