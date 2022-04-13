// テーブルのヘッダー配列
const headers = [
    'Name',
    'ID',
    'Time(s)',
    'Ref',
];

const Setlists = [
    {
        Name: "2022/08/28 no beer no life",
        ID: 001,
        TuneIds: [100, 101, 102]
    }
];

const tunes = [
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

function GetCurrentSetlist()
{
    return Setlists[0];
}