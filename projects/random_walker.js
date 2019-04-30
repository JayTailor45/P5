class Walker {
    constructor() {
        this.x = height / 2;
        this.y = width / 2;
    }

    walk() {
        let n = round(random(1, 4))
        switch (n) {
            case 1:
                this.x--;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.y--;
                break;
            default:
                this.x++
                break;
        }
    }

    render() {
        ellipse(this.x, this.y, 2, 2)
    }
}

function setup() {
    createCanvas(640, 480);
    w1 = new Walker()
    w2 = new Walker()
    background(255)
}

function draw() {
    w1.walk();
    w1.render();

    w2.walk();
    w2.render();
}