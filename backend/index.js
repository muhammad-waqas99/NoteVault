const express =require('express')
const app =express()
const dotenv = require('dotenv')

dotenv.config();


const env = require('./')
const PORT = process.env.PORT || 8000

const connectToDB = require('./db')


const userRoute = require("./routes/user")

connectToDB()

app.use(express.json())

app.use('/api/auth' , userRoute)




app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
