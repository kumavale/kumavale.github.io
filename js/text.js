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
    'Interest: Infrastructure, Low level, Network, Weather ...<br />' +
    'Like: Cat, Penguin, Wolf ...<br />' +
    'Hobby: Wolking, Programming ...<br />' +
    '      (In the old days: Mountaineering, Cycling)<br />' +
    '<br />' +
    '<table border="0" width="168">' +
        '<tr align="center">' +
        '<td>' +
            '<a href="https://github.com/kumavale/" target="_blank">' +
                '<img src="images/github.png" width="64" style="background-color:#FFF;">' +
            '</a>' +
        '</td>' +
        '<td>' +
            '<a href="https://qiita.com/kmgy/" target="_blank">' +
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

var Certification_text =
    ' * ITパスポート<br />' +
    ' * 基本情報技術者試験<br />' +
    ' * 応用情報技術者試験<br />' +
    ' * MOS Word 2013<br />' +
    ' * MOS Excel 2013 Expert<br />' +
    ' * CCNA (ICND1,ICND2)<br />' +
    ' * LPIC 1,2,3(304)<br />'
;
