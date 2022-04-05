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

module.exports = {
                    poster_index,
                    poster_create_post
                }