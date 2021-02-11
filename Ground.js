class Ground{
    constructor(x,y){
    
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,800,20,option)
        World.add(world,this.body) 
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("brown")
        rectMode(CENTER)
        rect(0,0,800,20)
        pop()
    }
    }
