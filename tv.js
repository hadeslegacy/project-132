objects = []
function setup() {
    canvas = createCanvas(690, 490)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("cat").innerHTML = "Status : CATTTTT"
}

img = ""
statu = ""


function preload() {
    img = loadImage("tv.jpg")
}

function draw() {
    image(img, 0, 0, 690, 490);

    if(statu != "")
     {
       for (i = 0; i < objects.length; i++) {
         document.getElementById("cat").innerHTML = "Status : Object Detected";
   
         fill("#FF0000");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke("#FF0000");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
     }
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
    objects = results
}