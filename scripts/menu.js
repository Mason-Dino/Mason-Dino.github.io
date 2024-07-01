menuActive = false

function menu(item) {
    console.log("hey")

    if (menuActive == false) {
        about = document.getElementById(item)
        about.classList.add("noMenu")

        var menu = document.getElementById("menu")
        menu.classList.remove("noMenu")
        menu.classList.add("yesMenu")

        var menuButton = document.getElementById("menuButton")
        menuButton.src = "style/image/close.svg"

        menuActive = true
    }

    else if (menuActive == true) {
        about = document.getElementById(item)
        about.classList.remove("noMenu")

        var menu = document.getElementById("menu")
        menu.classList.add("noMenu")
        menu.classList.remove("yesMenu")

        var menuButton = document.getElementById("menuButton")
        menuButton.src = "style/image/menu.svg"

        menuActive = false
    }
}