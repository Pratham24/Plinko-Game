class Particle {
    constructor (x, y,r){
        var options = {
            'friction':0,
           'density':3,
            'restitution': 0.4
        }
        this.r=r;
        this.body = Bodies.circle(x, y,this.r, options);
        this.color=color(random(0,225),random(0,225),random(0,225));
        World.add(world, this.body);
    }
    display () {
        var pos = this.body.position;
        var angle=this.body.angle
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(this.color)
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }
}