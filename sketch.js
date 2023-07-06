let player, floor;


function setup() {
   new Canvas(800, 600);

   world.gravity.x = 0;
   world.gravity.y = 10;

   corridor = new Sprite (250, 300, 6995, 600, 's');
   corridor.img = "./assets/img/couloir.png";
   corridor.scale = 0.56;

  player = new Sprite(0, 0, 10, 10, 'd');
   player.img = "./assets/img/pngwing.com.png";
   player.scale = 0.05;
   player.rotation = 0;


   floor = new Sprite(250, 482, 6995, 1, 's');
   floor.shapeColor = color(40, 140, 255, 0); 

   
   obstacle = new Sprite(100, 532, 100, 100, 's');

   corridor.overlaps(player);
   player.layer = 1;
   floor.layer = 1;

}

function draw() {
   clear();

   // if (kb.presses("right")) {
   //    player.vel.x = 3;
   // }
   // if (kb.presses("left")) {
   //    player.vel.x = -3;
   // }
   

   if (kb.pressing('left')) player.vel.x = -10;
   else if (kb.pressing('right')) player.vel.x = 10;
   else player.vel.x = 0;

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