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
    'Language: C, C#, ...<br />' +
    'Interest: Infrastructure, Low layer, Game, English, ...<br />' +
    '<br />' +
    '<table border="0" width="168">' +
        '<tr align="center">' +
        '<td>' +
            '<a href="https://github.com/yorimoi/" target="_blank">' +
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
    '2016/05&nbsp;&nbsp;ITパスポート<br />' +
    '2016/09&nbsp;&nbsp;C言語プログラミング能力認定試験 3級<br />' +
    '2016/11&nbsp;&nbsp;基本情報技術者試験<br />' +
    '2017/06&nbsp;&nbsp;LPIC 101 (740/800)<br />' +
    '2017/07&nbsp;&nbsp;LPIC 102 (640/800)<br />' +
    '2018/02&nbsp;&nbsp;MOS Excel 2013 Expert Part1 (1000/1000)<br />' +
    '2018/03&nbsp;&nbsp;MOS Word 2013 (1000/1000)<br />' +
    '2018/07&nbsp;&nbsp;ICND1 with English (919/1000)<br />' +
    '2018/09&nbsp;&nbsp;ICND2 with English (850/1000)<br />' +
    '2018/11&nbsp;&nbsp;応用情報技術者試験<br />' +
    '2019/06&nbsp;&nbsp;LPIC 201 (720/800)<br />' +
    '2019/07&nbsp;&nbsp;LPIC 202 (640/800)<br />' +
    '2019/07&nbsp;&nbsp;LPIC 304 (720/800)<br />'
;
