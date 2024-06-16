if (localStorage.getItem("dino") == null) {
    localStorage.setItem("dino", false)
    localStorage.setItem("song", false)
    localStorage.setItem("fun", false)
    localStorage.setItem("disecon", false)
}

function getHeart() {
    for (let i = 0; i < 4; i ++) {
        projects = ["dino", "song", "fun", "disecon"]
        
        if (localStorage.getItem(projects[i]) === "true") {
            heart(projects[i])
        }
    }
}

function heart(id) {

    fill = "https://raw.githubusercontent.com/Mason-Dino/Mason-Dino.github.io/29bf84c156e7a54e60a314b96a38a71eb2c4ad7a/style/image/heart-fill.svg"
    nofill = "https://raw.githubusercontent.com/Mason-Dino/Mason-Dino.github.io/29bf84c156e7a54e60a314b96a38a71eb2c4ad7a/style/image/heart-nofill.svg"

    if (id.includes("Image")) {
        var storage = id.split("Image")
        storage = storage[0]

        var heart = document.getElementById(id).src

        if (heart === fill) {
            document.getElementById(id).src = nofill
            localStorage.setItem(storage, false)
        }
    
        if (heart === nofill) {
            document.getElementById(id).src = fill
            localStorage.setItem(storage, true)
        }
    }

    else {
        var heart = document.getElementById(id + "Image").src

        document.getElementById(id + "Image").src = fill
    }
    
    
}