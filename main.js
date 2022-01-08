Status = "";
object = "";

function setup(){
    canvas = createCanvas(400, 330);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 330);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    Status = true;
}