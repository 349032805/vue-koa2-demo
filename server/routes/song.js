const SongController = require('../controller/song.js');
const Router = require('koa-router');

const childRouter = new Router();

//checkToken作为中间件存在
const checkToken = require('../token/checkToken.js');

//需要先检查权限的路由
childRouter.get('/getAllSongs', checkToken, SongController.getAllSongs);
childRouter.get('/saveSong', checkToken, SongController.saveSong);

module.exports = childRouter;