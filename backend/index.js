const express =require('express')
const cors = require('cors')
const app =express()
const dotenv = require('dotenv')

dotenv.config();

const dns = require('dns')
dns.setServers(['1.1.1.1','8.8.8.8'])

const env = require('./')
const PORT = process.env.PORT || 5000

const connectToDB = require('./db')


const userRoute = require("./routes/user")
const notesRoute = require("./routes/notes")

connectToDB()
app.use(cors())
app.use(express.json())

app.use('/api/auth' , userRoute)
app.use('/api/notes' , notesRoute)




app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
