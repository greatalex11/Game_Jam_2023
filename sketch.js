let player, floor;

function setup() {
   new Canvas(800, 600);
   world.gravity.y = 10;
   player = new Sprite(0, 0, 84, 135);
   player.layer = 2;

   player.addAnimation("walk", "assets/img/sprites/canne/canne1.png", 4);
   bckgrnd = new Sprite(0, 550, 19019, 1080);
   bckgrnd.scale = 0.5;
   bckgrnd.img = "./assets/img/gros couloir.png";
   // obstacle = new Sprite(3000, 580, 100, 100, "static");
   floor = new Sprite(0, 600, 10000, 50, "static");
   floor.color = "red";
   // floor.collider = "static";
}

function draw() {
   clear();
   bckgrnd.vel.x = -2;
   if (player.collides(floor)) {
      console.log("collides");
   }

   if (kb.pressing("left")) {
      player.ani.play();
      player.ani = "walk";
      player.vel.x = -2;
      player.mirror.x = true;
   } else if (kb.pressing("right")) {
      player.ani.play();
      player.ani = "walk";
      player.vel.x = 2;
      player.mirror.x = false;
   } else if (kb.pressing("up" || "right")) {
      player.ani.stop();
      player.ani = "walk"; //creer jump + sleeping
      player.vel.x = 2;
      player.vel.y = -2;
      player.mirror.x = false;
   } else if (kb.pressing("down" || "right")) {
      player.ani.stop();
      player.ani = "walk"; //creer jump + sleeping
      player.vel.x = 2;
      player.vel.y = 2;
      player.mirror.x = false;
   } else {
      player.ani.stop();
      // player.vel.x = 0;
      // player.vel.y = 0;
   }

   //camera.x = player.x;
}
