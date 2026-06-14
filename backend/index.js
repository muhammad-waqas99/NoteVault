const express =require('express')
const app =express()
const PORT = 3000

const connectToDB = require('./db')


const userRoute = require("./routes/user")

connectToDB()


app.use('/api/auth' , userRoute)


app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
