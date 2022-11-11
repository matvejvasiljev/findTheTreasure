let pirate = document.getElementById("pirate")
let map = document.getElementById("map")
let hintBox = document.getElementById("hintBox")
let restartButton = document.getElementById("restartButton")

let steps = 0

let treasureX = Math.floor(Math.random() * 450 + 25)
let treasureY = Math.floor(Math.random() * 450 + 25)

console.log("сокровище: " + treasureX + ", " + treasureY)

restartButton.onclick = function () {
    treasureX = Math.floor(Math.random() * 450 + 25)
    treasureY = Math.floor(Math.random() * 450 + 25)
    pirate.style.left = "60px"
    pirate.style.top = "0px"
    hintBox.innerHTML = "Good luck!"
    map.style.pointerEvents = "auto"
    steps = 0
}

map.onclick = function (event) {
    steps += 1
    // console.log(steps);
    // console.log(event.target);
    let pirateX = event.offsetX
    let pirateY = event.offsetY
    console.log("пират: " + pirateX + ", " + pirateY)
    pirate.style.left = pirateX - 25 + "px"
    pirate.style.top = pirateY - 30 + "px"
    let X = pirateX - treasureX
    let Y = pirateY - treasureY

    let distance = Math.sqrt(X ** 2 + Y ** 2)
    console.log(distance);
    if (distance < 15) {
        hintBox.innerHTML = "You won! It took you " + steps + " steps"
        map.style.pointerEvents = "none"
    }
    else if (distance < 30) {
        hintBox.innerHTML = "Hotter than the sun"
    }
    else if (distance < 85) {
        hintBox.innerHTML = "Burning lava"
    }
    else if (distance < 125) {
        hintBox.innerHTML = "Hot"
    }
    else if (distance < 175) {
        hintBox.innerHTML = "Warm"
    }
    else if (distance < 220) {
        hintBox.innerHTML = "Cool"
    }
    else if (distance < 260) {
        hintBox.innerHTML = "Cold"
    }
    else if (distance < 300) {
        hintBox.innerHTML = "Ice"
    }
    else {
        hintBox.innerHTML = "Absolute zero"
    }
}