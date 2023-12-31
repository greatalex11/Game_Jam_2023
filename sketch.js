let player,
   floor,
   bonus,
   obstacle,
   obstacle1,
   obstacle2,
   obstacle3,
   obstacle4,
   obstacle5,
   obstacle6;

function setup() {
   new Canvas(800, 600);
   player = new Sprite(0, 470, 84, 135);
   player.addAnimation("walk", "assets/img/sprites/grandmav2_walking_1.png", 4);
   player.layer = 2;
   player.scale = 1.5;
   // player.offset.y = -100;
   bonus = new Sprite(400, 470, 120, 100);
   bonus.layer = 3;
   bonus.scale = 2;
   bonus.img = "./assets/img/sprites/Bonus.png";
   world.gravity.y = 10;
   bckgrnd = new Sprite(0, 300, 20865, 600, "static");
   bckgrnd.scale = 1;
   bckgrnd.layer = 1;
   // bckgrnd.offset.y = 300;
   bckgrnd.img = "./assets/img/decor.png";
   // bckgrnd.overlaps(player);

   obstacle = new Sprite(1000, 580, 100, 100, "static");
   obstacle1 = new Sprite(100, 200, 100, 100, "static");
   obstacle1.layer = 3;
   obstacle2 = new Sprite(10000, 1500, 100, 100, "static");
   obstacle2.layer = 3;
   obstacle3 = new Sprite(300, 400, 100, 100, "static");
   obstacle3.layer = 3;
   obstacle4 = new Sprite(3000, 580, 100, 100, "static");
   obstacle4.layer = 3;
   obstacle5 = new Sprite(3000, 580, 100, 100, "static");
   obstacle5.layer = 3;
   obstacle6 = new Sprite(3000, 580, 100, 100, "static");
   floor = new Sprite(0, 600, 10000, 50, "static");
   floor.color = "red";
   floor.collider = "static";
}

function draw() {
   clear();
   // console.log(player.position);
   bckgrnd.vel.x = -2;
   // if (player.collides(floor)) {
   //    console.log("collides");
   // }
   if (player.position.y < 0) {
      player.position.y = 0;
   }
   if (player.rotation < 0) {
      player.rotation = 0;
   }
   if (player.rotation > 0) {
      player.rotation = 0;
   }
   if (kb.pressing("left")) {
      player.ani.play();
      player.ani = "walk";
      player.vel.x = -2;
      player.mirror.x = false;
   } else if (kb.pressing("right")) {
      player.ani.play();
      player.ani = "walk";
      player.vel.x = 2;
      player.mirror.x = true;
   } else if (kb.pressing("up" || "right")) {
      player.ani.stop();
      player.ani = "walk"; //creer jump + sleeping
      player.vel.x = 2;
      player.vel.y = -8;
      player.mirror.x = true;
   } else if (kb.pressing("down" || "right")) {
      player.ani.stop();
      player.ani = "walk"; //creer jump + sleeping
      player.vel.x = 2;
      player.vel.y = 2;
      player.mirror.x = true;
   } else {
      player.ani.stop();
      // player.vel.x = 0;
      // player.vel.y = 0;
   }

   //camera.x = player.x;
}
