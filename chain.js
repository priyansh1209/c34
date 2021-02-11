class Chain{
    constructor(bodyA,pointB){
        
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1,
            length: 250
        }
        this.body = Matter.Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.body)
    }
    display(){
        var pos1 = this.body.bodyA.position
        var pos2 = this.pointB
        push()
        strokeWeight(3)
        stroke(255,100,0)
        line(pos1.x,pos1.y,pos2.x,pos2.y)
        pop()
    }
}