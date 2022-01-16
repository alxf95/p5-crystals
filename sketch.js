const CRYSTAL_SIZE = 500;
const SIDES = 6;
const PALETTE = [];

function setup() {
    createCanvas(530, 530, SVG);

    PALETTE.push(color(255, 52, 154)); // pink
    PALETTE.push(color(4, 0, 152));    // blue

    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    testLines();
}

function testLines() {
    const numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

    strokeColor = getRandomFromPalette();

    noFill();
    stroke(0);
    push();
        translate(width / 2, height / 2);
        stroke(PALETTE[0]);
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
        stroke(strokeColor);
        const angle = 360 / numShapes;
        for (let i = 0; i < numShapes; i ++) {
            line(0, 0, 0, CRYSTAL_SIZE / 2);
            rotate(angle);
        }
    pop();
}

function randomSelectTwo() {
    return random(1) < 0.5;
}

function getRandomFromPalette() {
    const rando = floor(random(0, PALETTE.length));
    return PALETTE[rando];
}
