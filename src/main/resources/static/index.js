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
  data:{
    selected:"",
    selectedData:"",
    tunes:tunes,
  },
  methods:{
    onSelectedChanged:function(e)
    {
      console.log(`selected : ${btnTblAdd.selected}`);
      if(btnTblAdd.selected === "New")
      {
        let newTune = GetNewTune();
        console.log(`new setlist : ${JSON.stringify(newTune)}`);
        btnTblAdd.tunes.push(newTune);
        btnTblAdd.$set(btnTblAdd, 'selected', newTune.id);
        btnTblAdd.$set(btnTblAdd, 'selectedData', newTune);
      }
    },
    onAddTbl:function(e)
    {
      Object.keys(btnTblAdd.tunes).forEach((i=>{
        if(btnTblAdd.tunes[i].id === btnTblAdd.selected)
        {
          let ret = GetTunesData([btnTblAdd.selected]);
          tbl.tunes.push(ret[0]);
          opts.selectedData.tuneIds.push(ret[0].id);
          console.log(`update tables ${JSON.stringify(opts.selectedData.tuneIds)}`);
        }
      }));
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
  },
  computed:{
    filterdTunes:function(){
      console.log(`filterd!!! ${opts.selected}`);
      let ret = [];
      if(opts.selected === "")
      {
        return ret;
      }
      Object.keys(this.tunes).forEach(i=>{
        if(!opts.selectedData.tuneIds.includes(this.tunes[i].id))
        {
          ret.push(this.tunes[i]);
        }
      });
      return ret;
    }
  }
})