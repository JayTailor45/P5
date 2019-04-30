function setup() {
    createCanvas(640, 480)
    ball = new Ball()
}

function draw() {
    ball.move()
    ball.bounce()
    ball.render()
}

class Ball {
    constructor() {
        this.position = new createVector(width / 2, height / 2)
        this.speed = new createVector(2.5, -2)
    }
    move() {
        this.position.add(this.speed)
    }
    bounce() {
        if (this.position.x > width || this.position.x < 0) {
            this.speed.x = this.speed.x * -1
        }

        if (this.position.y > height || this.position.y < 0) {
            this.speed.y = this.speed.y * -1
        }
    }
    render() {
        background(122)
        ellipse(this.position.x, this.position.y, 50)
    }
}