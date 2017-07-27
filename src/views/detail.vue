<template>
  <div class="detail">
 	<p>hello !</p>
      <p>歌名:{{song.song_name}}</p>
      <p>歌手:{{song.singer}}</p>
  </div>
</template>

<script>
    import api from '../api/song.js';
     export default {
      data() {
          return {
            song: {}
          }
        },
      created() {
          console.log("---------detail");
          this._getSong();
       },
       methods:{
           _getSong(){
            console.log("获取歌曲详细");
            console.log("详细页面的songId:"+this.$route.params.songId)
            // let id = this.$route.params.songId;
            let detail = {
              id:this.$route.params.songId
            };
            api.getSongDetail(detail).then(response => {
                console.log(response);
                this.song = response.data.result;
              }).catch((err) => {
                console.log(err);
            })

          }
       }
    };
</script>

<style lang="less" scoped>
      .detail {
        text-align: center;
        padding-top: 30px;
        font-size: 18px;
      }
</style>
