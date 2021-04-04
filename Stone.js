class Stone{
	constructor(x,y)
	{
	   var options ={
	    'restitution':0.8,
		'friction':0.9,
		'density':12
	   }
       this.body = Bodies.rectangle(x, y, 50, 50, options);
       this.width = 160;
       this.height = 160;
       World.add(world, this.body);
     };
     display(){
       push();
       fill('black');
       translate(this.body.position.x, this.body.position.y);
       rect(0, 0, this.width, this.height);
       pop();
       }
     };