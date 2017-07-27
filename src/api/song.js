import {instance} from '../axios'

export default {
    //获取所有歌曲
    getAllSongs(){
        return instance.get('/api/getAllSongs');
    },
    //保存歌曲
    saveSong(data){
        return instance.post('/api/saveSong', data);
    }

}