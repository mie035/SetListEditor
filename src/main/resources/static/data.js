// テーブルのヘッダー配列
var headers = [
    'Name',
    'ID',
    'Time(s)',
    'Ref',
];

var Setlists = [
    {
        Name: "2022/08/28 no beer no life",
        ID: 001,
        TuneIds: [100, 101, 102]
    }
];

var tunes = [
    {
        Name: "no heros",
        ID: 100,
        Time: 180,
        Ref: "None"
    },
    {
        Name: "cool dogs",
        ID: 101,
        Time: 60,
        Ref: "None"
    },
    {
        Name: "get it up",
        ID: 102,
        Time: 120,
        Ref: "None"
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
        sendName();
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
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