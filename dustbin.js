class dustbin {
    constructor(x, y, width, height) {
        var options = { isStatic: false }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        Matter.World.add(world,this.body)
        this.width = 200;
        this.height = 200;
        this.image = loadImage("dustbinimg.png");
    }
    display(){
        // fill("#4287f5")
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,this.width,this.height);
    }
}