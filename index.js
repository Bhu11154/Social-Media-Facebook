const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const app = express()
app.use(express.json());
app.use(cors());
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
 
dotenv.config()

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}, ()=>{
    console.log('MongoDB Connected...')
})

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT||5001, ()=> console.log('Server is running!!!!'))