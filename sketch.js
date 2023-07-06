let player, floor;

function setup() {
   new Canvas(800, 600);

   world.gravity.x = 0;
   world.gravity.y = 10;

   corridor = new Sprite (0, 300, 19019, 600, 's');
   corridor.img = "./assets/img/gros couloir.png";
   corridor.scale = 0.56;

   kitchen = new Sprite (18018, 300, 18538, 600, 's');
   kitchen.img = "./assets/img/cuisine.png";
   kitchen.scale = 0.56;

   player = new Sprite(-4700, 0, 19, 36, 'd');
   player.img = "./assets/img/canne1.png";
   player.scale = 5;
   player.rotation = 0;

   floor = new Sprite(250, 594, 190190, 20, 's');
   floor.shapeColor = color(40, 140, 255, 0); 
   floor.stroke = color(40, 140, 255, 0);

   obstacle = new Sprite(100, 532, 100, 100, 's');


   kitchen.overlaps(player);
   corridor.overlaps(player);
   corridor.layer = 1;
   kitchen.layer = 1;
   player.layer = 2;
   floor.layer = 2;

}

function draw() {
   clear();

   if (kb.pressing('left')) player.vel.x = -50;
   else if (kb.pressing('right')) player.vel.x = 50;
   else player.vel.x = 0;

   if (kb.presses("up")) {
      player.vel.y = -4;
   }
   if (player.collides(obstacle)) {
      player.vel.x = -5;
   }

   camera.x = player.x;
}