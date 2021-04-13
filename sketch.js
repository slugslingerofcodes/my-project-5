var engine, world;
var flag = 0;
var PLAY = 1,
    END = 0;
var gameState = PLAY;

function preload() {
    plr = loadImage("5.png")
    doorImg = loadImage("door.png")
    fire = loadImage("Fire.png")
    enemyImage = loadImage("knight.png")
   
}

function setup() {
    createCanvas(1200, 500)
 
    engine = Matter.Engine.create()
    world = engine.world
    boundary1 = new Box(1195, 200, 20, 400)
    boundary2 = new Box(1195, 470, 20, 70)
    boundary3 = new Box(290, 5, 587, 20)
    boundary6 = new Box(890, 5, 887, 20)
    boundary4 = new Box(5, 250, 20, 500)
    boundary5 = new Box(290, 495, 587, 20)
    wall1 = new Box(547, 390, 75, 20)
    wall2 = new Box(521, 445, 130, 20)
    wall3 = new Box(455, 370, 20, 170)
    wall4 = new Box(520, 295, 20, 170)
    wall5 = new Box(380, 280, 170, 20)
    wall6 = new Box(380, 220, 170, 20)
    wall7 = new Box(520, 140, 20, 150)
    wall8 = new Box(455, 140, 20, 140)
    wall9 = new Box(307, 360, 20, 80)
    wall10 = new Box(53, 110, 75, 20)
    wall11 = new Box(139, 50, 20, 70)
    wall12 = new Box(140, 220, 20, 170)
    wall13 = new Box(235, 145, 170, 20)
    wall14 = new Box(310, 97, 20, 75)
    wall15 = new Box(53, 400, 75, 20)
    wall16 = new Box(53, 325, 20, 130)

    wall20 = new Box(242, 360, 110, 20)
    wall19 = new Box(387, 385, 20, 140)
    wall18 = new Box(277, 445, 200, 20)
    wall21 = new Box(380, 80, 20, 130)
    wall22 = new Box(220, 60, 20, 50)
    wall23 = new Box(220, 95, 50, 20)

    wall24 = new Box(1147, 390, 75, 20)
    wall25 = new Box(1121, 445, 130, 20)
    wall26 = new Box(1055, 370, 20, 170)
    wall27 = new Box(1120, 295, 20, 170)
    wall28 = new Box(980, 280, 170, 20)
    wall29 = new Box(980, 220, 170, 20)
    wall30 = new Box(1120, 140, 20, 150)
    wall31 = new Box(1055, 140, 20, 140)
    wall32 = new Box(907, 360, 20, 80)
    wall33 = new Box(653, 110, 75, 20)
    wall34 = new Box(739, 50, 20, 70)
    wall35 = new Box(740, 220, 20, 170)
    wall36 = new Box(235, 145, 170, 20)
    wall37 = new Box(910, 97, 20, 75)
    wall38 = new Box(653, 400, 75, 20)
    wall39 = new Box(653, 325, 20, 130)

    wall40 = new Box(842, 360, 110, 20)
    wall41 = new Box(987, 385, 20, 140)
    wall42 = new Box(877, 445, 200, 20)
    wall43 = new Box(980, 80, 20, 130)
    wall44 = new Box(820, 60, 20, 50)
    wall45 = new Box(820, 95, 50, 20)

    door1 = new Door(30, 80, 40, 50)
    door2 = new Door(1152, 322, 40, 50)


    plr1 = new Plr(50, 80)
    enemy1 = new Enemy(150, 80)
    enemy2 = new Enemy(550, 300)
    enemy3 = new Enemy(350, 200)
    enemy4 = new Enemy(650, 50)
    enemy5 = new Enemy(90, 400)
    enemy6 = new Enemy(850, 250)
    enemy7 = new Enemy(920, 100)

}

function draw() {
    background("black")
    Matter.Engine.update(engine)
        // bgsound.play()
        //display box1,box2
    if (gameState == PLAY) {
        boundary1.display()
        boundary2.display()
        rectMode(CENTER)
        boundary3.display()
        boundary4.display()
        boundary5.display()
        wall1.display();
        wall2.display();
        wall3.display();
        wall4.display();
        wall5.display();
        wall6.display();
        wall7.display();
        wall8.display();
        wall9.display();
        wall10.display();
        wall11.display();
        wall12.display();
        wall13.display();
        wall14.display();
        wall15.display();
        wall16.display();
        wall23.display();
        wall20.display();
        wall19.display();
        wall18.display();
        wall21.display();
        wall22.display();
        wall23.display();

        wall24.display();
        wall25.display();
        wall26.display();
        wall27.display();
        wall28.display();
        wall29.display();
        wall30.display();
        wall31.display();
        wall32.display();
        wall33.display();
        wall34.display();
        wall35.display();
        wall36.display();
        wall37.display();
        wall38.display();
        wall39.display();
        wall40.display();
        wall41.display();
        wall42.display();
        wall43.display();
        wall44.display();
        wall45.display();
        boundary6.display()


        door1.display()
        door2.display()
        plr1.display()
        enemy1.display()
            //enemy1.bullets()
        enemy2.display()
        enemy3.display()
        enemy4.display()
        enemy5.display()
        enemy6.display()
        enemy7.display()
    }
    if (plr1.body.position.y > height) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
        conmouseleave.log("fire")
    }


    var collision1 = Matter.SAT.collides(plr1.body, enemy1.body);
    if (collision1.collided) {
        flag = 1;
        gameState = END;
    }

    var collision2 = Matter.SAT.collides(plr1.body, enemy2.body);
    if (collision2.collided) {
        flag = 2;
        gameState = END;

    }

    var collision3 = Matter.SAT.collides(plr1.body, enemy3.body);
    if (collision3.collided) {
        flag = 3;
        gameState = END;
    }


    var collision4 = Matter.SAT.collides(plr1.body, enemy4.body);
    if (collision4.collided) {
        flag = 4;
        gameState = END;

    }

    var collision5 = Matter.SAT.collides(plr1.body, enemy5.body);
    if (collision5.collided) {
        flag = 5;
        gameState = END;

    }

    var collision6 = Matter.SAT.collides(plr1.body, enemy6.body);
    if (collision6.collided) {
        flag = 6;
        gameState = END;

    }

    var collision7 = Matter.SAT.collides(plr1.body, enemy7.body);
    if (collision7.collided) {
        flag = 7;
        gameState = END;

    }

    if (flag === 1) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
    }

    if (flag === 2) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
    }

    if (flag === 3) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
        //  bg.play();
    }
    if (flag === 4) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
        //  bg.play();
    }
    if (flag === 5) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
    }

    if (flag === 6) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
        //  bg.play();
    }
    if (flag === 7) {
        textSize(50);
        textFont("Arial");
        stroke(3);
        fill('blue');
        text("GAME OVER", 500, 200);
    }

    image(fire, 550, 380, 300, 150)
    image(fire, 850, 380, 300, 150)
}

function keyPressed() {
    if (keyCode == 32) {
        Matter.Body.applyForce(plr1.body, plr1.body.position, { x: 0.004, y: -0.007 })
        Matter.Body.applyForce(plr1.body, plr1.body.position, { x: 0.004, y: -0.007 })

    }

    if (keyCode == UP_ARROW) {
        Matter.Body.applyForce(plr1.body, plr1.body.position, { x: 0.001, y: -0.02 })
    }

    if (keyCode == RIGHT_ARROW) {
        Matter.Body.applyForce(plr1.body, plr1.body.position, { x: 0.01, y: -0.001 })
    }

    if (keyCode == LEFT_ARROW) {
        Matter.Body.applyForce(plr1.body, plr1.body.position, { x: -0.01, y: -0.001 })
    }
}