function hexagon(posX, posY, radius) {
    const rotAngle = 360 / 6;
    beginShape();
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
        vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}

function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle);
    const y = posY + radius * sin(angle);
    return createVector(x, y);
}

function randomSelectTwo() {
    return random(1) < 0.5;
}

function getRandomFromPalette() {
    const rando = floor(random(0, PALETTE.length));
    return PALETTE[rando];
}

function testLines() {
    const numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
    const angle = 360 / numShapes;
    strokeColor = getRandomFromPalette();
    noFill();
    push();
    translate(width / 2, height / 2);
    stroke(strokeColor);
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    for (let i = 0; i < numShapes; i ++) {
        line(0, 0, 0, CRYSTAL_SIZE / 2);
        rotate(angle);
    }
    pop();
}

function myTriangle(center, radius, direction) {
    if (direction) {
        beginShape();
        vertex(center + radius * cos(0), radius * sin(0));
        vertex(center + radius * cos(120), radius * sin(120));
        vertex(center + radius * cos(240), radius * sin(240));
        endShape(CLOSE);
    } else {
        beginShape();
        vertex(center + radius * cos(180), radius * sin(180));
        vertex(center + radius * cos(300), radius * sin(300));
        vertex(center + radius * cos(60), radius * sin(60));
        endShape(CLOSE);
    }
}

const layerConstructors = [
    {
        name: 'Outline Shape',
        init: () => new OutlineShape(),
        weight: 0.3,
    },
    {
        name: 'Centered Shape',
        init: () => new CenteredShape(),
        weight: 0.5,
    },
    {
        name: 'Simple Lines',
        init: () => new SimpleLines(),
        weight: 0.3,
    },
    {
        name: 'Dotted Lines',
        init: () => new DottedLines(),
        weight: 0.3,
    },
    {
        name: 'Circles',
        init: () => new Circles(),
        weight: 0.3,
    },
    {
        name: 'Ring of Shapes',
        init: () => new RingOfShapes(),
        weight: 0.3,
    },
    {
        name: 'Stepped Hexagons',
        init: () => new SteppedHexagons(),
        weight: 0.8,
    },
    {
        name: 'Test Lines',
        init: () => testLines(),
        weight: 1,
    },
]