class Ground
{
    constructor(x,y,w,h)
    {

        let options=
        {
            isStatic:true
            
        }

        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.groundObj=Bodies.rectangle(x,y,w,h,options);
        
        World.add(world,this.groundObj);
    }

    display()
    {
        push ();

        translate (this.groundObj.position.x,this.groundObj.position.y); 
        rectMode(CENTER);
        fill("yellow");

        rect(0,0,this.w,this.h);
        pop ();
    }
}