const mongoose = require('../db.js');

//声明schema
const songSchema = mongoose.Schema({
    song_name: String,
    singer: String,
    create_at: String,
    update_at: String
});
//根据schema生成model
const model = {
    Song: mongoose.model('Song', songSchema)
};

module.exports = model;