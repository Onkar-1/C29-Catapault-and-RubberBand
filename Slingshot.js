class SlingShot{
    constructor(bodyA, pointB){
        //options nothing changed here
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //to load the images so we can actually use them later on
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //sling1 and 2 images to display the sling
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //push so this if statement and stuff dosent affect other things
            push();
            stroke(48, 22, 8);
            //to make the line smaller if you strech the sling forward
            if(pointA.x<220){
                //to display the sling in the sling shot
                strokeWeight(7);
                //the lines displaying the 2 back slings
                line(pointA.x -20, pointA.y, pointB.x -20, pointB.y);
                line(pointA.x -20, pointA.y, pointB.x +20, pointB.y);
                //image function to display th images
                image(this.sling3, pointA.x-30, pointA.y -10, 15, 30);
            }
            else{
                strokeWeight(3);
                //the lines displaying the 2 back slings
                line(pointA.x -20, pointA.y, pointB.x -20, pointB.y);
                line(pointA.x -20, pointA.y, pointB.x +20, pointB.y);
                //image function to display the images
                image(this.sling3, pointA.x-30, pointA.y -10, 15, 30);
            }
            pop();
        }
    }
    
}