//Icon

let icon = document.getElementById("cherry-icon");

icon.onmouseover = function() {
    icon.src = "css/images/icons/cherries-color.png";
}

icon.onmouseleave = function() {
    icon.src = "css/images/icons/cherries-white.png";
}
/*****************/

//Menu

let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let close = document.getElementById("close");

menuBtn.onclick = function() {
    menu.style.visibility = "visible";
}

close.onclick = function() {
    menu.style.visibility = "hidden";
}
/***************/

// 