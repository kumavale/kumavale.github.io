
const COL8_000000 = "#000000";
const COL8_FF0000 = "#FF0000";
const COL8_00FF00 = "#00FF00";
const COL8_FFFF00 = "#FFFF00";
const COL8_0000FF = "#0000FF";
const COL8_FF00FF = "#FF00FF";
const COL8_00FFFF = "#00FFFF";
const COL8_FFFFFF = "#FFFFFF";
const COL8_C6C6C6 = "#C6C6C6";
const COL8_840000 = "#840000";
const COL8_008400 = "#008400";
const COL8_848400 = "#848400";
const COL8_000084 = "#000084";
const COL8_840084 = "#840084";
const COL8_008484 = "#008484";
const COL8_848484 = "#848484";


function graphic()
{
    let vram  = document.getElementById('screen');
    let title = document.getElementById('title_back');

    init_screen8(vram);
    make_window8(vram, 320, 200);

    boxfill8(title, 0, "1px", "1px",  "8%", "95%", "title_icon");
    boxfill8(title, 0,  "8%", "1px", "91%", "95%", "title_text");
}

function init_screen8(vram)
{
    boxfill8(vram, COL8_008484,    "0%",   " 0%", "100%",   "86%");
    boxfill8(vram, COL8_008484,    "0%",   " 0%",  "90%",   "80%", "textarea");
    boxfill8(vram, COL8_C6C6C6,    "0%",   "86%", "100%",   "14%");
    boxfill8(vram, COL8_FFFFFF,    "0%", "86.5%", "100%",   "2px");

    boxfill8(vram, COL8_FFFFFF,  "1.5%",   "88%",  "22%",   "3px");
    boxfill8(vram, COL8_FFFFFF,  "1.5%",   "88%",  "3px",   "10%");
    boxfill8(vram, COL8_848484,  "1.5%",   "98%",  "22%",   "3px");
    boxfill8(vram, COL8_848484, "23.5%",   "88%",  "3px",   "10%");

    boxfill8(vram, COL8_848484,   "80%",   "88%", "18.5%",  "3px");
    boxfill8(vram, COL8_848484,   "80%",   "88%",   "3px",  "10%");
    boxfill8(vram, COL8_FFFFFF,   "80%",   "98%", "18.5%",  "3px");
    boxfill8(vram, COL8_FFFFFF, "98.5%",   "88%",   "3px",  "10%");
}

function make_window8(vram, w, h)
{
    let cons = document.createElement('div');
    cons.id = 'console';
    cons.style.position = 'absolute';
    cons.style.top      = '2%';
    cons.style.right    = '2%';
    cons.style.width    = '320px'
    cons.style.height   = '200px'
    vram.appendChild(cons);

    boxfill8(cons, COL8_C6C6C6, "0px",  "0px", "320px", "200px");
    boxfill8(cons, COL8_FFFFFF, "1px",  "1px", "318px", "198px");
    boxfill8(cons, COL8_C6C6C6, "2px",  "2px", "316px", "196px");
    boxfill8(cons, COL8_000084, "3px",  "3px", "282px",  "26px", "cons_title");
    boxfill8(cons, COL8_000000, "8px", "35px", "298px", "153px", "cons_text");

    boxfill8(cons, COL8_FFFFFF, "294px",  "8px", "18px", "16px");
    boxfill8(cons, COL8_C6C6C6, "295px",  "9px", "16px", "14px", "cons_cross");

    document.getElementById('cons_title').innerText = 'console';

    document.getElementById('cons_text').innerHTML =
        '> ls<br />' +
        '<span id="click_about" onclick="click_about()">About</span><br />' +
        //'<span id="click_history" onclick="click_history()">History</span><br />' +
        '<span id="click_certification" onclick="click_certification()">Certification</span><br />';

    document.getElementById('cons_cross').innerHTML =
        '<span id="click_cross" onclick="click_cross()">X</span>';
}

function boxfill8(vram, c, l, t, w, h, id)
{
    let div = document.createElement('div');

    div.style.backgroundColor = c;
    div.style.position = 'absolute';
    div.style.left     = l;
    div.style.top      = t;
    div.style.width    = w;
    div.style.height   = h;

    if (id) {
        div.id = id;
    }

    vram.appendChild(div);
}

