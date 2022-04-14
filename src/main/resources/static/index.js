// data.js is refered
Init();
var setlist = GetCurrentSetlist();
var app = new Vue({
  el: '#title',
  data: {
    message: 'Setlist Editor',
    setlistName:setlist.Name,
  }
})

// Vueインスタンス
var tbl = new Vue({
  el: '#tbl',
  data: {
    tunes: tunes,
    headers: headers
  }
})