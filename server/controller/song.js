const Song = require('../models/song.js').Song;

//数据库的操作
//根据id查找歌曲
const findSong = (id) => {
    return new Promise((resolve, reject) => {
        Song.findOne({ _id: id}, (err, doc) => {
            if(err){
                reject(err);
            }
            resolve(doc);
        });
    });
};
//找到所有歌曲
const findAllSongs = () => {
    return new Promise((resolve, reject) => {
        Song.find({}, (err, doc) => {
            if(err){
                reject(err);
            }
            resolve(doc);
        });
    });
};
//删除一个歌曲
const delSong = function(id){
    return new Promise(( resolve, reject) => {
        Song.findOneAndRemove({ _id: id }, err => {
            if(err){
                reject(err);
            }
            console.log('删除歌曲成功');
            resolve();
        });
    });
};


const saveSong = async( ctx ) => {
    console.log("保存歌曲");
    let song = ctx.request.body.song;
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