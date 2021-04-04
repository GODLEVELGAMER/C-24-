class  Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 125;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      strokeWeight(2);
      stroke('black')
      fill('white')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };