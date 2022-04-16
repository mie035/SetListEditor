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
    selectedData:"aaaaa",
    sls:Setlists,
  },
  methods:{
    onSelectedChanged:function(e)
    {
      console.log(`selected : ${opts.selected}`);
      if(opts.selected === "New")
      {
        let newSl = GetNewSetList();
        console.log(`new setlist : ${JSON.stringify(newSl)}`);
        opts.sls.push(newSl);
        opts.$set(opts, 'selected', newSl.id);
        opts.$set(opts, 'selectedData', newSl);
      }
      Object.keys(opts.sls).forEach((i=>{
        if(opts.sls[i].id === opts.selected)
        {
          console.log(`ettoo ${JSON.stringify(opts.sls[i].tuneIds)}`);
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
      let newTune = GetNewTune();
      opts.selectedData.tuneIds.push(newTune.id);
      tunes.push(newTune);
      tbl.tunes.push(newTune);
    },
    onDeleteTbl:function(e)
    {
      console.log(`delete data...`);
      let popped = tbl.tunes.pop();
      let popped2 = opts.selectedData.tuneIds.pop();
      console.log(`popped : ${JSON.stringify(popped)}`);
      console.log(`popped : ${JSON.stringify(popped2)}`);
    },
    onApplyTbl:function(e)
    {
      console.log(`apply data...`);
      PutSetList();
    },
  }
})