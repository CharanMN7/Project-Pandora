// Icon

let icon = document.getElementById("cherry-icon");

icon.onmouseover = function() {
    icon.src = "css/images/icons/cherries-color.png";
}

icon.onmouseleave = function() {
    icon.src = "css/images/icons/cherries-white.png";
}
/*****************/

// Menu

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

// Slider

let images = [
    "css/images/phone.png",
    "css/images/phone-curved.png"
];

let num = 0;

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}