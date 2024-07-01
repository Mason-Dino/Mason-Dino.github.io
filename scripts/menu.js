menuActive = false

function menu() {
    console.log("hey")

    if (menuActive == false) {
        about = document.getElementById("AboutMe")
        about.classList.add("noMenu")

        var menu = document.getElementById("menu")
        menu.classList.remove("noMenu")
        menu.classList.add("yesMenu")

        menuActive = true
    }

    else if (menuActive == true) {
        about = document.getElementById("AboutMe")
        about.classList.remove("noMenu")

        var menu = document.getElementById("menu")
        menu.classList.add("noMenu")
        menu.classList.remove("yesMenu")

        menuActive = false
    }
}