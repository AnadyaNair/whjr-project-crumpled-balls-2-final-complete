class ball {
    constructor(x, y, radius) {
        var options = { restitution: 1 }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        Matter.World.add(world, this.body)
        this.radius = radius;
        this.image = loadImage("paperball.png");
    }
    display() {
        // fill("#ed4f3e");
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
    }
}