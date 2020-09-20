class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width, height,options);
        this.image = loadImage("pics/stone.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pause = this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(image.x,image.y,pause.width,pause.height);
        imageMode(CENTER);
        image(this.image,pause.x,pause.y,50,50);
    }
    detectCollision(lstone,lmango){
        mangoBodyPosition=lmango.body.position;
        stoneBodyPosition=lstone.body.position
       
       var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
       if(distance<=lmango.r+stone.r){
        Matter.body.setStatic(Imango.body,fals)
       }
      }
}