class Tree{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("pics/tree.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(image.x,image.y,pos.width,pos.height);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,500,500);
    }
}