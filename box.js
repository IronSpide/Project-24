class Box{

    constructor(x,y,length,width){
    var options = {
    isStatic:true,
    restitution:0,
    friction:0,
    density:1.2
    }
    this.x = x
    this.y = y
    this.body = Bodies.rectangle(this.x, this.y,length,width,options)
    }
    
    display(){
    var pose = this.body.position
    push()
    translate(pose.x, pose.y)
    rectMode(CENTER)
    fill("blue")
    rect(0,0)
    pop()
    }
    
    }