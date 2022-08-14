let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let close = document.getElementById("close");

menuBtn.onclick = function() {
    menu.style.visibility = "visible";
}

close.onclick = function() {
    menu.style.visibility = "hidden";
}