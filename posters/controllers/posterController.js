const Poster = require('../models/Poster');

const poster_create = (req, res, next) => {
    upload.single('image')

    var obj = {
        mediaID: req.body.mediaID,
        status: req.body.status,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
        Poster.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    }
};

module.exports = {
    poster_index,
    poster_create,
    poster_update,
    poster_details
}