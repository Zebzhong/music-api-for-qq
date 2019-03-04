// 相似歌手列表
const config = {
  url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
  options: {
    albummid: "003ui8B10AtGES"
  },
  handle: (res) => {
    let data = res.data
    let newData = {
      time:data.aDate,
      total:data.total,
      lan:data.lan,
      genre:data.genre,
      company:data.company,
      album_id:data.id,
      album_mid:data.mid,
      album_desc:data.desc,
      album_name:data.name,
      singer_id:data.singerid,
      singer_mid:data.singermid,
      singer_name:data.singername,
      list:data.list.map(item=>{
        return {
          interval_num: item.interval,
          interval_str: `0${(item.interval/60).toFixed(2)}`,
          song_id: item.songid,
          song_mid: item.songmid,
          song_name: item.songname,
          song_orig: item.songorig,
          mv_mid:item.vid,
          singers:item.singer,
        }      
      })
    }
    return newData
  } 
}

module.exports = config