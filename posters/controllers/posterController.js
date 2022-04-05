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


module.exports = {poster_index}