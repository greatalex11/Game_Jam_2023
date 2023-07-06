let player, floor, decors, joint, bonus;

// function preload() {
//    kitchen = loadImage("assets/img/cuisine.png");
// }

function setup() {
   new Canvas(800, 600);

   world.gravity.x = 0;
   world.gravity.y = 10;

   bonus = new Sprite(-10000, 0);
   decors = new Sprite(0, 300, 20865, 600, "s");
   decors.img = "./assets/img/decor.png";

   player = new Sprite(-10000, 0, 158, 270, "d");
   player.addAni("walk", "./assets/img/sprites/grandmav2_walking_1.png", 4);
   player.addAni("canne", "./assets/img/sprites/Canne1.png", 4);
   player.addAni("jump", "./assets/img/sprites/Saut1.png", 3);

   // player.addAni("jump", "./assets/img/sprites/Saut1", 2);
   player.scale = 0.8;
   player.rotation = 0;

   floor = new Sprite(0, 594, 50000, 20, "s");
   floor.shapeColor = color(40, 140, 255, 0);
   floor.stroke = color(40, 140, 255, 0);

   obstacle = new Sprite(0, 532, 100, 100, "s");

   decors.overlaps(player);
   decors.layer = 1;
   player.layer = 2;
   floor.layer = 2;
}

function draw() {
   clear();
   decors.vel.x = -2;

   if (player.pos.y < 100) {
      player.pos.y = 100;
   }
   if (kb.pressing("up")) {
      player.ani = "jump";
   }
   if (kb.pressing("left")) {
      player.ani.play();
      player.ani = "canne";
      player.vel.x = -8;
      player.mirror.x = true;
      if (player.pos.y > 440) {
         if (kb.pressing("up")) {
            player.ani.stop();
            player.vel.x = 8;
            player.vel.y = -9;
            player.mirror.x = false;
         }
      }
   } else if (kb.pressing("right")) {
      if (player.pos.y > 440) {
         if (kb.pressing("up")) {
            // player.ani.stop();
            player.ani.play();

            player.ani = "jump"; //creer jump + sleeping
            player.vel.x = 8;
            player.vel.y = -9;
            player.mirror.x = false;
         }
      }
      player.ani.play();
      player.ani = "canne";
      player.vel.x = 8;
      player.mirror.x = false;
   } else {
      player.ani.stop();
      // player.vel.x = 0;
      // player.vel.y = 0;
   }

   camera.x = player.x;
}
