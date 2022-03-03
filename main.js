img = "";

function preload()
{
    img = loadImage('My vault.jpg');
}

function setup()
{
    canvas = creatrCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}