function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded() {
    console.log('PoseNet Is Initialized!');
}


function draw() {
    background('#000000');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}