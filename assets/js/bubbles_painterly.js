// oop stuff within p5

var bubbles = [];
var numBubbs = 500;
function setup(){
    createCanvas(windowWidth, windowHeight);
    for(i=0;i<numBubbs;i++){
        if(Math.random() * 100 < 50){
        var newBubb = new Bubble();
        bubbles.push(newBubb);
        } else {
            var newBubb = new RedBubb();
            bubbles.push(newBubb);
        }
    }
}

function draw(){
    // background(0);
    for(i=0;i<bubbles.length;i++){
        bubbles[i].move();
        bubbles[i].show();
    }
    
}

// regular class declaration
class Bubble {
    
    constructor(){
        this.x = random(0, width);
        this.y = random(0,height);
        this.w = random(10,25);
        this.h = random(10,25);
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
        this.pos = createVector(this.x, this.y);
        this.velocity = createVector(0,0);
        this.accel = createVector(0,0);
        console.log(this.pos);
    }

    move(){
        this.accel = createVector(random(-1,1),random(-1,1));
        this.velocity.add(this.accel);
        this.pos.add(this.velocity);
        this.accel = 0;
        this.velocity.mult(0.95);
        if(this.pos.x > width){
            this.pos.x = width;
        } else if(this.pos.x < 0){
            this.pos.x = 0;
        } 

        if(this.pos.y > height){
            this.pos.y = height;
        } else if(this.pos.y < 0){
            this.pos.y = 0;
        }

    }

    checkColliders(){

    }

    show(){
        stroke(this.r,this.g,this.b);
        strokeWeight(6);
        fill(this.r,this.g,this.b);
        ellipse(this.pos.x, this.pos.y, this.w, this.h);
    }

}

 // subclass
class RedBubb extends Bubble{
    constructor(){
        console.log("made a redbubb");
        super();
    }

    show(){
        stroke(this.r,this.g,this.b);
        strokeWeight(6);
        fill(this.r,this.g,this.b);
        ellipse(this.pos.x, this.pos.y, this.w, this.h);
    }
}