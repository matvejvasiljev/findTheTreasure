let pirate = document.getElementById("pirate")
let map = document.getElementById("map")
let hintBox = document.getElementById("hintBox")

let treasureX = Math.floor(Math.random() * 500)
let treasureY = Math.floor(Math.random() * 500)

map.onclick = function (event) {
    let pirateX = event.offsetX - 25
    let pirateY = event.offsetY - 30
    // console.log("сокровище: " + treasureX + ", " + treasureY)
    // console.log("пират: " + pirateX + ", " + pirateY)
    pirate.style.left = pirateX + "px"
    pirate.style.top = pirateY + "px"
    let X = pirateX - treasureX 
    let Y = pirateY - treasureY

    let distance = Math.sqrt(X**2 + Y**2)
    console.log(distance);
    if (distance<10) {
        hintBox.innerHTML = "You won! It took you 1 step"
    }
    else if (distance<50) {
        hintBox.innerHTML = "Y"
    }
}