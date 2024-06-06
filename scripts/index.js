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


function close() {
    var win = document.getElementById("win")
    win.classList.add("noWindow")

    var icon = document.getElementById("icon")
    icon.classList.remove("LaunchIconNo")
    icon.classList.add("launchIconYes")

    var compScreen = document.getElementById("CompScreen")
    compScreen.classList.remove("computerScreen")
    compScreen.classList.add("computerScreenNoWin")
}

function open() {
    var win = document.getElementById("win")
    win.classList.remove("noWindow")

    var icon = document.getElementById("icon")
    icon.classList.remove("launchIconYes")
    icon.classList.add("LaunchIconNo")

    var compScreen = document.getElementById("CompScreen")
    compScreen.classList.remove("computerScreenNoWin")
    compScreen.classList.add("computerScreen")
}

document.getElementById("icon").addEventListener("click", open)
document.getElementById("close").addEventListener("click", close);