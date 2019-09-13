
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


window.onload = function()
{
    let vram = document.getElementById('screen');

    init_screen8(vram);
    make_window8(vram, 320, 200);
};

function init_screen8(vram)
{
    boxfill8(vram, COL8_008484,    "0%",   " 0%", "100%",   "86%");
    boxfill8(vram, COL8_C6C6C6,    "0%",   "86%", "100%",  "0.5%");
    boxfill8(vram, COL8_FFFFFF,    "0%", "86.5%", "100%",  "0.5%");
    boxfill8(vram, COL8_C6C6C6,    "0%",   "87%", "100%",   "13%");

    boxfill8(vram, COL8_FFFFFF,  "1.5%",   "88%",  "22%",  "0.5%");
    boxfill8(vram, COL8_FFFFFF,    "1%",   "88%", "0.5%",   "10%");
    boxfill8(vram, COL8_848484,  "1.5%",   "98%",  "22%",  "0.5%");
    boxfill8(vram, COL8_848484,   "23%", "88.5%", "0.5%",  "9.5%");
    boxfill8(vram, COL8_000000,  "1.5%", "98.5%",  "22%",  "0.5%");
    boxfill8(vram, COL8_000000, "23.5%", "88.5%", "0.5%", "10.5%");

    boxfill8(vram, COL8_848484,   "80%",   "88%",  "18%",  "0.5%");
    boxfill8(vram, COL8_848484,   "80%", "88.5%", "0.5%",   "10%");
    boxfill8(vram, COL8_FFFFFF,   "80%", "98.5%",  "18%",  "0.5%");
    boxfill8(vram, COL8_FFFFFF,   "98%",   "88%", "0.5%",   "11%");
}

function make_window8(vram, w, h)
{
    let cons = document.createElement('div');
    cons.id = 'console';
    cons.style.position = 'absolute';
    cons.style.top  = '2%';
    cons.style.left = '2%';
    vram.appendChild(cons);

    boxfill8(cons, COL8_C6C6C6, "0px",  "0px", "320px", "200px");
    boxfill8(cons, COL8_FFFFFF, "1px",  "1px", "318px", "198px");
    boxfill8(cons, COL8_C6C6C6, "2px",  "2px", "316px", "196px");
    boxfill8(cons, COL8_000084, "3px",  "3px", "282px",  "26px", "cons_title");
    boxfill8(cons, COL8_000000, "8px", "35px", "298px", "153px", "cons_text");

    boxfill8(cons, COL8_FFFFFF, "294px",  "8px", "18px", "16px");
    boxfill8(cons, COL8_C6C6C6, "295px",  "9px", "16px", "14px", "cons_cross");

    document.getElementById('cons_title').innerText = 'console';

    let input = document.createElement('input');
    input.id = 'input';
    input.autocomplete = 'off';
    input.spellcheck   = 'false';
    input.autofocus    = 'true';
    //  onkeypress='check(event.keyCode);'
    document.getElementById('cons_text').innerText = '>';
    document.getElementById('cons_text').appendChild(input);

    document.getElementById('cons_cross').innerText = 'X';
}

function boxfill8(vram, c, l, t, w, h, title)
{
    let div = document.createElement('div');

    div.style.backgroundColor = c;
    div.style.position = 'absolute';
    div.style.left     = l;
    div.style.top      = t;
    div.style.width    = w;
    div.style.height   = h;

    if (title) {
        div.id = title;
    }

    vram.appendChild(div);
}

