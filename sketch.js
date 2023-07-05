let player, floor;

function setup() {
   new Canvas(800, 600);
   world.gravity.x = 10;
   world.gravity.y = 10;

   player = new Sprite((0, 255, 0), 0);
   player.img = "./assets/img/pngwing.com.png";
   player.scale = 0.01;
   floor = new Sprite(250, 200, 500, 20, "static");
   obstacle = new Sprite(550, 180, 100, 100, "static");
}

function draw() {
   clear();
   if (kb.presses("right")) {
      player.vel.x = 3;
   }
   if (kb.presses("left")) {
      player.vel.x = -3;
   }
   if (kb.presses("up")) {
      player.vel.y = -4;
   }
   if (kb.presses("down")) {
      camera.zoom = 1.5;
   }
   if (player.collides(obstacle)) {
      player.vel.x = -5;
   }

   camera.x = player.x;
}
