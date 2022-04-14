// テーブルのヘッダー配列
var headers = [
    'Name',
    'ID',
    'Time(s)',
    'Ref',
];

var Setlists = [
    {
        name: "2022/08/28 no beer no life",
        id: 001,
        tuneIds: [100, 101, 102]
    }
];

var tunes = [
    {
        name: "no heros",
        id: 100,
        time: 180,
        ref: "None"
    }
];

var stompClient = null;

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(`this is umm ${greeting}`);
        });
        stompClient.subscribe('/topic/SetLists', function (_setlists) {
            console.log(`setlist is coming!! ${_setlists}`);
            let obj = JSON.parse(_setlists.body);
            Object.keys(obj).forEach((key)=>{
                Setlists.push(obj[key]);
                console.log(`add setlist ${JSON.stringify(obj[key])}`);
            });

        });
        stompClient.subscribe('/topic/Tunes', function (_tunes) {
            console.log(`setlist is coming!! ${_tunes}`);
            let obj = JSON.parse(_tunes.body);
            Object.keys(obj).forEach((key)=>{
                tunes.push(obj[key]);
                console.log(`add tune ${JSON.stringify(obj[key])}`);
            });
            console.log(`tunes ${JSON.stringify(_tunes)}`);
            console.log(`result of tunes ${tunes}`);
            
        });
        reqSetList();
        reqTune();
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function reqSetList()
{
    console.log(`req setlists...`);
    stompClient.send("/app/getSetlists", {}, "{}");
}

function reqTune()
{
    console.log(`req tune...`);
    stompClient.send("/app/getTunes", {}, "{}");
}

function sendName() {
    console.log(`sending hello...`);
    stompClient.send("/app/hello", {}, JSON.stringify({'name': "whoa"}));
}

function Init() {
    connect();
}

function GetCurrentSetlist()
{
    return Setlists[0];
}