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



const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL // .env se URL utha lo
    : "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json())

app.use('/api/auth' , userRoute)
app.use('/api/notes' , notesRoute)

app.get('/', (req, res) => {
  res.send('NoteVault API is running securely.');
});




app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})
