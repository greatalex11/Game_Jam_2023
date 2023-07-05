// function setup() {
// 	new Canvas(250, 100);
// }

// function draw() {
// 	background('blue');
// }

let block, floor;

function setup() {
   new Canvas(60, 342);
   world.gravity.y = 10;

   block = new Sprite(30, 30);
   floor = new Sprite(30, 300, 60, 5, "static");
   floor.color = "red";
}

function draw() {
   clear();
   if (block.colliding(floor)) {
      block.color = "red";
   } else block.color = "blue";

   if (block.colliding(floor) > 60) {
      block.vel.y = -9;
   }
}
