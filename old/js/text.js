var age = (function() {
    let url = 'https://ntp-a1.nict.go.jp/cgi-bin/json';
    let birthday = new Date('1998/12/22 00:00');
    let ret;

    try {
        let req = new XMLHttpRequest();
        req.open('HEAD', window.location.href, false);
        req.send(null);
        if (req.readyState == 4) {
            let now = new Date(req.getResponseHeader('Date'));
            ret = ((now.getFullYear() - birthday.getFullYear()));
            if ((now.getMonth() < (12-1)) ||
                    ((now.getMonth() >= (12-1)) && (now.getDate() < 22))) {
                --ret;
            }
        } else {
            ret = 'undefined';
        }
    } catch(e) {
        console.log(e.message);
        ret = 'null';
    }

    return ret;
}());

var About_text =
    '' +
    '※Press Shift+F2 to visible console.<br />' +
    '<br />' +
    'Age: ' + age + '<br />' +
    'Language: C, C#, Rust ...<br />' +
    'Interest: Infrastructure, Low level, Weather ...<br />' +
    'Like: Cat, Penguin, Wolf ...<br />' +
    'Hobby: Walking, Programming ...<br />' +
    '      (In the old days: Mountaineering, Cycling)<br />' +
    '<br />' +
    '<table border="0" width="168">' +
        '<tr align="center">' +
        '<td>' +
            '<a href="https://github.com/kumavale/">' +
                '<img src="images/github.png" width="64" style="background-color:#FFF;">' +
            '</a>' +
        '</td>' +
        '<td>' +
            '<a href="https://qiita.com/kmgy/">' +
                '<img src="images/qiita.png" width="64">' +
            '</a>' +
        '</td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td style="font-size:16px;">GitHub</td>' +
        '<td style="font-size:16px;">Qiita</td>' +
        '</tr>' +
    '</table>'
;

var Qualification_text =
    ' * ITパスポート<br />' +
    ' * 基本情報技術者試験<br />' +
    ' * 応用情報技術者試験<br />' +
    ' * MOS Word 2013<br />' +
    ' * MOS Excel 2013 Expert<br />' +
    ' * CCNA (ICND1,ICND2)<br />' +
    ' * LPIC 1,2,3(304)<br />' +
    ' * OSS-DB Silver<br />' +
    ' * 普通自動車運転免許<br />' +
    ' * 金融AMLオフィサー[実践]<br />'
;

var Products_text =
    '* sisterm - <a href="https://github.com/kumavale/sisterm">Source</a><br />' +
    '&emsp;正規表現でハイライトできるターミナルソフト<br /><br />' +
    '* mipsi - <a href="https://github.com/kumavale/mipsi">Source</a><br />' +
    '&emsp;MIPSのインタプリタ<br /><br />' +
    '* ぺにぺにWinter - <a href="https://github.com/kumavale/PenipeniWinter">Source</a><br />' +
    '&emsp;宇宙よりも遠い場所(5話)より登場した「ぺにぺにWINTER」の再現<br /><br />' +
    '* ExPing-t - <a href="https://github.com/kumavale/ExPing-t">Source</a><br />' +
    '&emsp;Ping-tのGoogleChrome拡張機能<br /><br />' +
    '* fmtcalc - <a href="https://github.com/kumavale/fmtcalc">Source</a><br />' +
    '&emsp;シェルコマンド`printf`の代替コマンド<br /><br />' +
    '* zlp - <a href="https://github.com/kumavale/zlp">Source</a><br />' +
    '&emsp;ゼロドリ専用MP3プレイヤー<br /><br />' +
    '* nand2tetris - <a href="https://github.com/kumavale/nand2tetris">Source</a><br />' +
    '&emsp;Rust製nand2tetris<br /><br />'
;
