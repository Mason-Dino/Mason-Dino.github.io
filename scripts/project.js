localStorage.getItem("bob")

function heart(id) {
    console.log(id)

    var heart = document.getElementById(id + "Image").src

    myHeart = heart.split("Portfolio/")
    heart = myHeart[1]

    if (heart === "style/image/heart-fill.svg") {
        document.getElementById(id + "Image").src = "style/image/heart-nofill.svg"
    }

    if (heart === "style/image/heart-nofill.svg") {
        document.getElementById(id + "Image").src = "style/image/heart-fill.svg"
    }
}