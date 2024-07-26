// pull the server requirements
const express = require('express');

//initialize the server
const app = express();




app.listen(3000, () =>{
    console.log('Port 3000 is active')
})
//* READ
//GET Requests
app.get('/', async (req, res) =>{
    res.render('index.ejs')
    // swapping send for render to make content appear
})