const responsive_menu_btn = document.querySelector('.responsive_button');
const black_bg_btn        = document.querySelector('.black-bg');

responsive_menu_btn.addEventListener("click", ToggleMenu);
black_bg_btn       .addEventListener("click", ToggleMenu);

function ToggleMenu() {
    const menu     = document.querySelector('.menu');
    const black_bg = document.querySelector('.black-bg');

    if (menu.style.display == "block") {
        menu.style.display = "none";
        black_bg.style.opacity = "0";
        black_bg.style.visibility = "hidden";
    } else {
        menu.style.display = "block";
        black_bg.style.opacity = "0.5";
        black_bg.style.visibility = "visible";
    }
}
