class Crystal {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
        this.layers = [];

        layerConstructors.forEach(layerCon => {
            const picker = random(1);
            if (picker > layerCon.weight) {
                this.layers.push(layerCon.init());
            }
        });
    }

    render() {
        push();
        translate(this.x, this.y);
        this.layers.forEach(layer => {
            layer.render();
        });
        pop();
    }
}