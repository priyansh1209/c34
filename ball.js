class Ball{
    constructor(){
        this.body = Bodies.circle(250,200,50)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,50,50)
        pop()
    }
}