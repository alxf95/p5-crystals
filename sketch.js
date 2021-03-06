const CRYSTAL_SIZE = 150;
const SIDES = 6;
const PALETTE = [];
const ALL_CRYSTALS = [];

// layout
const MARGIN = CRYSTAL_SIZE / 2;
const COLUMNS = 3;
const ROWS = 4;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const START = (CRYSTAL_SIZE / 2) + MARGIN;

function setup() {
    const totalX = START + GRIDBOX * COLUMNS;
    const totalY = START + GRIDBOX * ROWS;
    createCanvas(totalX, totalY, SVG);

    PALETTE.push(color(255, 52, 154)); // pink
    PALETTE.push(color(4, 0, 152));    // blue

    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    for (let x = 0; x < COLUMNS; x++) {
        for (let y = 0; y < ROWS; y++) {
            const posX = START + x * GRIDBOX;
            const posY = START + y * GRIDBOX;
            ALL_CRYSTALS.push(new Crystal(posX, posY));
        }
    }

    ALL_CRYSTALS.forEach(crystal => {
        crystal.render();
    });
}
