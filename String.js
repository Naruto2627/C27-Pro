class String{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA :bodyA,
            bodyB :bodyB,
            pointA :{x:this.offsetX, y:this.offsetY}
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        strokeWeight(2);
        stroke("black");

        var Anchor1X = pointA.x+this.offsetX;
        var Anchor1Y = pointA.y+this.offsetY;

        var Anchor2X = pointB.x;
        var Anchor2Y = pointB.y-10;
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
