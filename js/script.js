var move_flg = false;
var move_start_x, move_start_y;

// start drag
window.onmousedown = function(e) {
    if (document.elementFromPoint(e.pageX, e.pageY).id == "cons_title") {
        move_flg = true;
        move_start_x = e.clientX - document.getElementById("console").offsetLeft;
        move_start_y = e.clientY - document.getElementById("console").offsetTop;
    }
}

// end drag
window.onmouseup = function(e) {
    move_flg = false;
}

// drag
window.onmousemove = function(e) {
    if(move_flg == true) {
        document.getElementById("console").style.left = (e.clientX - move_start_x) + "px";
        document.getElementById("console").style.top = (e.clientY - move_start_y) + "px";
    }
}
