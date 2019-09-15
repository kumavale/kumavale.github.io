
var TITLE = 'kmgy';

window.onload = function()
{
    graphic();

    let t_icon = document.getElementById('title_icon');
    let t_text = document.getElementById('title_text');
    let img    = document.createElement('img');

    t_text.innerText = TITLE;
    img.src = 'https://avatars1.githubusercontent.com/u/29778890?s=400&v=4';
    img.style.height = '100%';
    img.style.position = 'relative';
    t_icon.insertBefore(img, t_icon.firstChild);

    document.getElementById('title_text').style.fontSize =
        document.getElementById('title_back').offsetHeight / 2 + 'px';

    // TODO Adding top page
    click_about();
};

var move_flg = false;
var move_start_x, move_start_y;

// start drag
window.onmousedown = function(e) {
    if (document.elementFromPoint(e.pageX, e.pageY).id == 'cons_title') {
        move_flg = true;
        move_start_x = e.clientX - document.getElementById('console').offsetLeft;
        move_start_y = e.clientY - document.getElementById('console').offsetTop;
    }
}

// end drag
window.onmouseup = function(e) {
    move_flg = false;
}

// drag
window.onmousemove = function(e) {
    if (move_flg == true) {
        let cons   = document.getElementById('console');
        let screen = document.getElementById('screen');
        cons.style.left = (e.clientX - move_start_x) + 'px';
        cons.style.top = (e.clientY - move_start_y) + 'px';

        if (cons.offsetLeft < 0) {
            cons.style.left = '0px';
        }
        if (cons.offsetTop < 0) {
            cons.style.top = '0px';
        }
        if (cons.offsetLeft > screen.offsetWidth - 320) {
            cons.style.left = screen.offsetWidth - 320 + 'px';
        }
        if (cons.offsetTop > screen.offsetHeight - 200) {
            cons.style.top = screen.offsetHeight - 200 + 'px';
        }
    }
}

function click_about()
{
    item_color_change(true, false, false);
    document.getElementById('textarea').innerHTML = About_text;
    document.getElementById('title_text').innerText = TITLE + ' - About';
}

//function click_history()
//{
//    item_color_change(false, true, false);
//    document.getElementById('textarea').innerHTML = History_text;
//}

function click_certification()
{
    item_color_change(false, false, true);
    document.getElementById('textarea').innerHTML = Certification_text;
    document.getElementById('title_text').innerText = TITLE + ' - Certification';
}

function click_cross()
{
    document.getElementById('console').style.display = "none";
}

function item_color_change(about, history, certification)
{
    document.getElementById('click_about').style.color = about ? "Aqua" : "Azure";
    //document.getElementById('click_history').style.color = history ? "#00FFFF" : "#FFFFFF";
    document.getElementById('click_certification').style.color = certification ? "Aqua" : "Azure";
}

window.addEventListener('resize', function(e) {
    document.getElementById('title_text').style.fontSize =
        document.getElementById('title_back').offsetHeight / 2 + 'px';
});

document.onkeydown = function(e) {
    //document.getElementById('textarea').innerText = e.key;
    if (e.code == "F2" && e.shiftKey == true) {
        // Visible console
        document.getElementById('console').style.display = "block";
    }
};
