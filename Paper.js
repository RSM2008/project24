class Paper {

    constructor(x,y,width,height){

        var options={

            isStatic:false,
            restitution:0.3,
	        friction:0.5,
	        density :1.2
}


        this.body = Bodies.circle(x,y,20,20,options);
        World.add(world,this.body);

    }
    display(){

        ellipseMode(CENTER);
        var pos  = this.body.position;
        fill("purple");







    }
            



        


    }












