class Ball 
 {
     constructor(x,y,r){
        
        let options={
		    restitution:0.3,
		    friction:0,
		    density:1.2
         }
         this.x=x;
         this.y=y;
         this.r=r;
         this.body = Bodies.circle(x,y,r,options);
         World.add(world,this.body);

     }

     display(){
        var ballpos=this.body.position;
        push();
        fill("white");
        translate(ballpos.x,ballpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
     }

 }