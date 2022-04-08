const mongoose = require('mongoose');
const Poster = require('../models/Poster');
const poster_index = (req, res) => {
    Poster.find().then((posters) => {
        res.json(posters)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}


/*
const poster_create_post = async (req,res) => {
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
}
*/

const poster_create_post = (req,res) => {
    var newPoster = {
        mediaID: mongoose.Types.ObjectId(req.body.mediaID),
        moment: req.body.moment,
        img: req.file.img
    }
    console.log(req.body)
    console.log(newPoster.mediaID)

     // Create a new Poster
     var poster = new Episode(newPoster)

    poster.save().then(() => {
        console.log("New poster created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })

    // Save poster to the media
    Media.findById(poster.serieID).then((media) => {
        if(media){
            media.posters.push(poster)
            // res.send("new poster created and add to media");
            media.save().then(() => {
                console.log(media)
                res.send("new poster created and add to media");
        
            }).catch(err => {
            if(err){
                throw err;
            } 
            })
            console.log(media)
        }else{
            res.sendStatus(400);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })

} 

const poster_details = (req,res) => {
    Poster.findById(req.params.id).then((poster) => {
        if(poster){
            axios.get("http://localhost:4545/medias/"+poster.mediaID).then((response) => {
                console.log(response)
                var posterObject = {mediaTitle: response.data.title, mediaCategorie: response.data.categorie, posterImage: '' }

                posterObject.posterImage = poster.img
                res.json(posterObject)
            })
        }else{
            res.send("Invalid Poster")
        }
    })
}

module.exports = {
                    poster_index,
                    poster_create_post,
                    poster_details
                }