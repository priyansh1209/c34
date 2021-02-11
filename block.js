class Block{
    constructor(x,y){
        var option={
            restitution: 0.3,
            friction: 0.5,
            density: 1
        }
        var r = Math.round(random(0,255))
        var g = Math.round(random(0,255))
        var b = Math.round(random(0,255))
        
        this.colour = color(r,g,b)
        this.body = Bodies.rectangle(x,y,20,20,option)
        World.add(world,this.body) 
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill(this.colour)
        rect(0,0,20,20)
        pop()
    }
}