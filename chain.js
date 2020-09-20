class Chain{
    constructor(pointB,bodyA){
        var options = {
            pointB: pointB,
            bodyA: bodyA,
            stiffness: 0.0295,
            length: 15
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var bodyA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("gray");
        line(pointB.x, pointB.y, bodyA.x, bodyA.y);
      }
    }
    
}