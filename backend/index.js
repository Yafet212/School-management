
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const { noticeCreate } = require("./controllers/notice-controller.js")

const PORT = process.env.PORT || 5000


dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
const connection_url = 'mongodb+srv://admin:duCmnjjAv7bdGTWP@cluster0.drfc74h.mongodb.net/schoolDB?retryWrites=true&w=majority'
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type'],
}))


mongoose.connect(connection_url, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))
mongoose.connection.once('open', () =>{
    console.log('DB connected');
})


app.use('/', Routes);
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
