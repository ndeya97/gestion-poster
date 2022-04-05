const express = require('express');
const posterController = require('../controllers/posterController');
const router = express.Router();
const multer = require('multer');
const Poster = require('../models/Poster');





// define storage for images 

const storage = multer.diskStorage({
    //destination for files
    destination: function (req, file, callback){
        callback(null, './public/uploads/images');
    },

    //add back the extension
    filename: function (req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});

//upload parameters for multer 
const upload =  multer({
    storage: storage,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    },
});

//route that handles all the poster
router.get("/", posterController.poster_index);

//route that handles new post 
router.post('/', upload.single('img'), async (req,res) => {
    console.log(req.file);
    let poster = new Poster({
        mediaID: req.body.mediaID,
        moment: req.body.moment,
        img: req.file.filename,
    });

    try {
        poster = await poster.save(); 
        res.redirect('/posters');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;