class Ground
{
   constructor(x,y,w,h)
   {
      let_options={
           isStatic:true
       };

       this.body = Bodies.rectangle(x,y,w,h);
       this.width = 800;
       this.height = 20;
       World.add(world,this.body);
   }
    
   show()
   {
       var pos = this.body.position;
       push();
       rectMode(CENTER);
       stroke(255);
       fill(127);
       rect(this.position.x,this.position.y,this.width,this.height);
       pop();
   }
}

