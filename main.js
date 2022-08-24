function setup() {
    canvas = createCanvas(690, 490)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("cat").innerHTML = "Status : CATTTTT"
}

img = ""
statu = ""


function preload() {
    img = loadImage("dog_cat.jpg")
}

function draw() {
    image(img, 0, 0, 690, 490)
    fill("#FF0000")
    text("catbum", 45, 75)
    noFill()
    stroke("#FF0332")
    rect(30, 30, 640, 420)
    text("dog", 500, 75)
    noFill()
    stroke("#FF1239")
    rect(310, 40, 340, 400)
}

function modelLoaded() {
    console.log("Model Loaded!")
    statu = true
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error, "error")
    }
    console.log(results, "play roblox with Anirudh or this won't work")
}