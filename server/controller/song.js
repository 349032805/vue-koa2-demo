const Song = require('../models/song.js').Song;

//数据库的操作
const saveSong = async( ctx ) => {
    console.log("保存歌曲");
    let song = new Song(ctx.request.body)
    console.log("song:"+song);
    await new Promise((resolve, reject) => {
        song.save((err) => {
            if(err){
                reject(err);
            }
            resolve();
        });
    });
    ctx.status = 200;
    ctx.body = {
        success: true
    };
};


const getAllSongs = async( ctx ) => {
    console.log("查询所有歌曲信息");
    //查询所有歌曲信息
    let doc = await new Promise((resolve, reject) => {
        Song.find({}, (err, doc) => {
            if(err){
                reject(err);
            }
            resolve(doc);
        });
    });
    ctx.status = 200;
    ctx.body = {
        message: '成功',
        result: doc
    };
};


module.exports = {
    getAllSongs,
    saveSong
};