const mongoose = require('../db.js');

//声明schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    // recheck: String,
    token: String,
    create_time: Date
});
//根据schema生成model
const model = {
    User: mongoose.model('User', userSchema)
};

module.exports = model;