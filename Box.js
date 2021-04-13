class Box {
  // prop, fun
   
  constructor(x,y,w,h){
    var opt ={isStatic:true}
    this.w = w
    this.h= h
    this.body = Matter.Bodies.rectangle(x,y,w,h,opt)
    Matter.World.add(world, this.body)
    this.image = loadImage("wall.png")
  }
  
  display(){
   fill("SlateGrey") ;
    strokeWeight(0.4)
   push()
 //rectMode(CENTER)   ;
 imageMode(CENTER)   ;
   translate(this.body.position.x,this.body.position.y) ;
    rotate(this.body.angle)
    //rect(0,0,this.w,this.h,2)
    image(this.image,0,0,this.w,this.h,2)
    pop()
  }
}