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
//document.getElementById("aboutB").addEventListener("click", document.getElementById("AboutMe").scrollIntoView())