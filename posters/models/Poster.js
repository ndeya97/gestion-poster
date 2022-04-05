const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posterSchema = new Schema ({
    mediaID: {
        // type: mongoose.SchemaTypes.ObjectId,
        type: String,
    },
    moment: {
        type: Boolean,
    },
    img: {
        type: String
    }
})

const Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;