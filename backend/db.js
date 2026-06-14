const mongoose = require("mongoose")
const mongooseURI = "mongodb://localhost:27017/notevault"

const connectToDB =()=>{
    mongoose.connect(mongooseURI)
    .then(()=>{
        console.log("MongoDB Connected")
    })
    .catch(error =>{
        console.error(error.message)
    })
}

module.exports =connectToDB;