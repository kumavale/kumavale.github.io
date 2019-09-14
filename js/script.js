
window.onload = function()
{
    graphic();

    let t_icon = document.getElementById('title_icon');
    let t_text = document.getElementById('title_text');
    let img    = document.createElement('img');
    t_text.innerText = 'Under Construction';
    img.src = 'https://avatars1.githubusercontent.com/u/29778890?s=400&v=4';
    img.style.height = '100%';
    img.style.position = 'relative';
    t_icon.insertBefore(img, t_icon.firstChild);

    document.getElementById('title_text').style.fontSize =
        document.getElementById('title_back').offsetHeight - 4 + 'px';

    document.getElementById('textarea').innerText = 'Hello, World!';
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
    document.getElementById('textarea').innerHTML = About_text;
}

function click_history()
{
    document.getElementById('textarea').innerHTML = History_text;
}

function click_certification()
{
    document.getElementById('textarea').innerHTML = Certification_text;
}

window.addEventListener('resize', function(e) {
    document.getElementById('title_text').style.fontSize =
        document.getElementById('title_back').offsetHeight - 4 + 'px';
});
