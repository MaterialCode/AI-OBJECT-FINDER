status = ""
object_name = ""

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value
}

function modelLoaded() {
    console.log("model Loaded")
    status = true
}

function draw() {
    image(video, 0, 0, 640, 420)
}