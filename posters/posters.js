// Load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const posterRoutes = require('./routes/posterRoutes');

app.use(bodyParser.json());


// Load mongoose
const mongoose = require('mongoose');


//Connect
mongoose.connect("mongodb://nadiop97:Ynover_97@cluster0-shard-00-00.wq4ds.mongodb.net:27017,cluster0-shard-00-01.wq4ds.mongodb.net:27017,cluster0-shard-00-02.wq4ds.mongodb.net:27017/postersservices?ssl=true&replicaSet=atlas-oh9j0s-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
    console.log("Database is connected - postersservice !");
});

app.get('/', (req, res) => {
    res.send("This is our main endpoind for poster !")
// res.redirect('/posters');
})  


//Posters routes
app.use('/posters', posterRoutes);


app.listen(7777, () => {
console.log("Up and running at 7777! This is our Poster service");
})