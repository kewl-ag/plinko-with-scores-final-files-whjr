class Div{
    constructor(x, y, width, height, angle) {
        var options = {
            
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}