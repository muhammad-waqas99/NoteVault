const express =require('express')
const app =express()
const dotenv = require('dotenv')

dotenv.config();


const env = require('./')
const PORT = process.env.PORT || 8000

const connectToDB = require('./db')


const userRoute = require("./routes/user")
const notesRoute = require("./routes/notes")

connectToDB()

app.use(express.json())

app.use('/api/auth' , userRoute)
app.use('/api/notes' , notesRoute)




app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
