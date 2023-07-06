let ball, floor, player;

function setup() {
   new Canvas(800, 600);
   world.gravity.y = 10;
   floor = new Sprite();
   floor.y = 190;
   floor.w = 238;
   floor.h = 5;
   floor.collider = "static";

   player = new Sprite(400, 0, 84, 135);
   player.addAnimation("walk", "assets/img/sprites/grandmav2_walking_1.png", 4);
   player.y = 0;
   // player.offset.y = 100;
   // ball = new Sprite();
   // ball.diameter = 50;
   // ball.y = 30;
}

function draw() {
   console.log(player.y);
   clear();
}
