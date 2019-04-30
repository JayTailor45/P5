let t = 0

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0)
    fill(255)
    t = t + 0.005
    let x = noise(t)
    x = map(x, 0, 1, 0, width)
    ellipse(x, height / 2, 50, 50);
}