const mongoose = require("mongoose")
const MongoDB_URI = process.env.MongoDB_URI 

const connectToDB =()=>{
    mongoose.connect(MongoDB_URI)
    .then(()=>{
        console.log("MongoDB Connected")
    })
    .catch(error =>{
        console.error(error.message)
    })
}

module.exports =connectToDB;