const express =require('express')
const app =express()
const PORT = 3000

const connectToDB = require('./db')


const userRoute = require("./routes/user")

connectToDB()

app.use(express.json())

app.use('/api/auth' , userRoute)




app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
