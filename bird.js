class Bird{
   
    constructor(x,y,w,h){
        var pig_options ={
            friction:1,
            density:1,
            restitution: 0.8
        }
    
        this.body = Bodies.rectangle(x,y,50,50,pig_options);
        this.w = 50
        this.h = 50
        World.add(world,this.body);

    }

    display(){
       var angle = this.body.angle
       var pos = this.body.position
       pos.x = mouseX
       pos.y = mouseY
       push();
       translate(pos.x,pos.y)
       rotate(angle)
       fill("violet");
       rect(0,0,this.w,this.h)
       pop();
    }
    
}


