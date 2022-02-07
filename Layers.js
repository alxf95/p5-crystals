class Layer {
    constructor() {
        this.sides = SIDES;
        this.numShapes = this.sides;
        this.angle = 360 / this.numShapes;
        this.randomNumShapes = randomSelectTwo() ? this.numShapes : this.numShapes * 2;
        this.randomNumShapesAngle = 360 / this.randomNumShapes;
        this.stepsOut = 8;
        this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut;
        this.layerColor = getRandomFromPalette();
        this.thinStroke = 1;
        this.thickStroke = 3;
        this.randomWeight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
        this.randomShape = random(1);
    }
}

class Circles extends Layer {
    constructor() {
        super();
        this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
        this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2);
    }

    render() {
        noFill();
        stroke(this.layerColor);
        strokeWeight(1);
        push();
        for (let i = 0; i <= this.numShapes; i++) {
            ellipse(this.position, 0, this.shapeSize, this.shapeSize);
            rotate(this.angle);
        }
        pop();
    }
}

class SimpleLines extends Layer {
    constructor() {
        super();
        this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25);
        this.step = (CRYSTAL_SIZE / 2) / this.numSteps;
        this.start = floor(random(0, this.numSteps));
        this.stop = floor(random(this.start, this.numSteps + 1));
    }

    render() {
        noFill();
        stroke(this.layerColor);
        strokeWeight(this.randomWeight);
        push();
        for (let i = 0; i < this.randomNumShapes; i++) {
            line(this.start * this.step, 0, this.stop * this.step, 0);
            rotate(this.randomNumShapesAngle);
        }
        pop();
    }
}

class OutlineShape extends Layer {
    constructor() {
        super();
        this.isHexagon = randomSelectTwo();
    }

    render() {
        strokeWeight(this.randomWeight);
        stroke(this.layerColor);
        noFill();
        push();
        if (this.isHexagon) {
            hexagon(0, 0, CRYSTAL_SIZE / 2);
        } else {
            ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
        }
        pop();
    }
}

class DottedLines extends Layer {
    constructor() {
        super();
        this.shapeSize = 3;
        this.centerOffset = this.singleStep;
    }
    render() {
        fill(this.layerColor);
        noStroke();
        push();
        for (let i = 0; i <= this.randomNumShapes; i++) {
            for (let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.singleStep) {
                rect(x, 0, this.shapeSize, this.shapeSize);
            }
            rotate(this.randomNumShapesAngle);
        }
        pop();
    }
}

class CenteredShape extends Layer {
    constructor() {
        super();
        this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut - 2)) * this.singleStep;
    }

    render() {
        fill(this.layerColor);
        noStroke();
        push();
        if (this.randomShape < 0.1) {
            rect(0, 0, this.shapeSize * 2, this.shapeSize * 2);
        } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
            ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2);
        } else {
            rotate(this.angle);
            hexagon(0, 0, this.shapeSize);
        }
        pop();
    }
}

class RingOfShapes extends Layer {
    constructor() {
        super();
        this.steps = floor(random(1, this.stepsOut));
        this.center = this.steps * this.singleStep;
        this.direction = randomSelectTwo();
        this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1);

        if (this.steps < this.stepsOut / 2) {
            this.radius = floor(random(1, this.steps)) * this.singleStep;
        } else if (this.steps > this.stepsOut / 2) {
            this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep;
        } else {
            this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep;
        }
    }

    render() {
        stroke(this.layerColor);
        fill(this.fillColor);
        strokeWeight(this.randomWeight);
        push();
        for (let i = 0; i < this.numShapes; i++) {
            if (this.randomShape < 0.33) {
                ellipse(0, this.center, this.radius, this.radius);
            } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
                rect(0, this.center, this.radius, this.radius);
            } else {
                myTriangle(this.center, this.radius, this.direction);
            }
            rotate(this.angle);
        }
        pop();
    }
}

class SteppedHexagons extends Layer {
    constructor() {
        super();
        this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25;
        this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15;
        this.singleStep = ((CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps;
    }

    render() {
        stroke(this.layerColor);
        noFill();
        strokeWeight(this.randomWeight);
        push();
        rotate(this.angle / 2);
        for (let i = 1; i < this.numSteps; i++) {
            hexagon(0, 0, this.centerOffset + (i * this.singleStep));
        }
        pop();
    }
}
