/*
window.onscroll = function() {scroll()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function scroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
*/

function close() {
    var win = document.getElementById("win")

    win.classList.add("noWindow")
}

document.getElementById("close").addEventListener("click", close);