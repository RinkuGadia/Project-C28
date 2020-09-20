class Mango{
    constructor(x,y,width,height){
        var options = {
          isStatic:true,
          restitution:0,
          friction:1           
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("pics/mango.png");
    this.width = width;
    this.height = height;
  }
  display(){
     var pos = this.body.position;
     //rectMode(CENTER);
     //rect(image.x,image.y,this.width,this.height);
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,60,60);
  }
}