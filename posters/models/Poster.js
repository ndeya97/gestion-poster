const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posterSchema = new Schema ({
    mediaID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    poster: {
        data: Buffer,
        contentType: String
    }
})

const Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;