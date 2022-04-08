const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posterSchema = new Schema ({
    mediaID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Media',
        required: false
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