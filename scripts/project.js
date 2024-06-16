localStorage.getItem("bob")

function heart(id) {
    console.log(id)

    var heart = document.getElementById(id).src
    console.log(heart)
    
    fill = "https://raw.githubusercontent.com/Mason-Dino/Mason-Dino.github.io/29bf84c156e7a54e60a314b96a38a71eb2c4ad7a/style/image/heart-fill.svg"
    nofill = "https://raw.githubusercontent.com/Mason-Dino/Mason-Dino.github.io/29bf84c156e7a54e60a314b96a38a71eb2c4ad7a/style/image/heart-nofill.svg"
    
    if (heart === fill) {
        document.getElementById(id).src = nofill
    }

    if (heart === nofill) {
        document.getElementById(id).src = fill
    }
}