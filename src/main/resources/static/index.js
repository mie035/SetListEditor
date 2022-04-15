// data.js is refered
Init();
var app = new Vue({
  el: '#title',
  data: {
    message: 'Setlist Editor',
    setlistName:"",
  }
})
var opts = new Vue({
  el: '#opts',
  data: {
    selected: '',
    sls:Setlists,
  },
  methods:{
    onSelectedChanged:function(e)
    {
      Object.keys(opts.sls).forEach((i=>{
        if(opts.sls[i].name == opts.selected)
        {
          let ret = GetTunesData(opts.sls[i].tuneIds);
          tbl.$set(tbl, 'tunes', ret);
        }
      }));
    }
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

var btnTblAdd = new Vue({
  el: '#btnTblAddDelete',
  methods:{
    onAddTbl:function(e)
    {
      console.log(`add data...`);
      tunes.push({
        name:"New",
        id:-1,
        time:60,
        ref:"None",
      });
    },
    onDeleteTbl:function(e)
    {
      console.log(`delete data...`);
      tunes.pop();
    },
    onApplyTbl:function(e)
    {
      console.log(`apply data...`);
      PutSetList();
    },
  }
})