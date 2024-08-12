//* It matters this is at the VERY top so the variables are loaded globally
const dotenv = require('dotenv')
dotenv.config() // loads the enviornment variables
// pull the server requirements
const express = require('express');
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI
//initialize the server
const app = express();

//* Importing the Fruit model
const Fruit = require('./models/fruit')

app.use(express.urlencoded({ extended: false }));


mongoose.connect(MONGODB_URI); //our tool to connect to MongoDB using my URI inside of .env
mongoose.connection.on("connected", () =>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3000, () =>{
    console.log('Port 3000 is active')
})
//* READ
//GET Requests
app.get('/', async (req, res) =>{
    res.render('index.ejs')
    // swapping send for render to make content appear
})
app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    res.render("fruits/index.ejs", { fruits: allFruits });
});

// NEW PAGE - 
app.get('/fruits/new', (req, res) =>{
    res.render('fruits/new.ejs')
})

app.post('/fruits', async (req, res) => {
    if (req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/");
})