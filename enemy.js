class Enemy {
  constructor(x,y){
    var opt = {
      isStatic:true
    }
    
    this.body = Matter.Bodies.rectangle(x,y,25,25)
    this.bullet = Matter.Bodies.rectangle(x,y,5,5)
    Matter.World.add(world,this.body)
    Matter.World.add(world,this.bullet)
  }
  
  display(){
     push()
  //  translate(this.body.position.x,this.body.position.y) ;
  //   rotate(this.body.angle)
    imageMode(CENTER)
    image(enemyImage,this.body.position.x,this.body.position.y,25,25)
    pop()
  }

  bullets(){
    push()
    imageMode(CENTER)
    image(plr,this.bullet.position.x,this.bullet.position.y,105,105)
 
    pop()
  }
}