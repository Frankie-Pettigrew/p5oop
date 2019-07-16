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
    }

    move(){
        this.x += random(-5, 5);
        this.y += random(-5,5);
        if(this.x > width){
            this.x = width;
        } else if(this.x < 0){
            this.x = 0;
        } 

        if(this.y > height){
            this.y = height;
        } else if(this.y < 0){
            this.y = 0;
        }

    }

    checkColliders(){

    }

    show(){
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
        stroke(this.r,this.g,this.b);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.w, this.h);
    }

}

 // subclass
class RedBubb extends Bubble{
    constructor(){
        console.log("made a redbubb");
        super();
    }

    show(){
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
        stroke(this.r,this.g,this.b);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.w, this.h);
    }
}