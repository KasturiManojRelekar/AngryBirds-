class Log{
    
        constructor(x,y,h,angle){
            var ball_options ={
                friction:2,
                density:1,
                restitution: 0.8
            }
        
            this.body = Bodies.rectangle(x,y,20, h,ball_options);
            this.w = 20
            this.h = h
            Matter.Body.setAngle(this.body,angle)
            World.add(world,this.body);
    
        }
    
        display(){
           var angle = this.body.angle
           var pos = this.body.position
           push();
           translate(pos.x,pos.y)
           rotate(angle)
           fill("yellow");
           rectMode(CENTER);
           rect(0,0,this.w,this.h)
           pop();
        }
        
    }
