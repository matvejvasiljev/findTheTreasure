let pirate = document.getElementById("pirate")
let map = document.getElementById("map")
let hintBox = document.getElementById("hintBox")

map.onclick = function () {
    console.log("You won!")
    hintBox.innerHTML = "It took you 1 step"
}