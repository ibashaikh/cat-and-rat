
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png")
    catAni1 = loadAnimation("images/cat1.png")
    catAni2 = loadAnimation("images/cat2.png" , "images/cat3.png")
    catAni3 = loadAnimation("images/cat4.png")
    ratAni1 = loadAnimation("images/mouse1.png", "images/mouse2.png")
    ratAni2 = loadAnimation("images/mouse3.png", "images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    garden = createSprite(400, 300, 800, 600)
    garden.addImage(gardenImg)

    cat = createSprite(650, 500)
    cat.addAnimation("cat" ,catAni1 )
    cat.scale = 0.15

    rat = createSprite(80, 500)
    rat.addAnimation("rat", ratAni2)
    rat.scale = 0.15

    //rat.debug = true
    //cat.debug  = true

    rat.setCollider("rectangle", 0, 0, 700, 700)
    cat.setCollider("rectangle", 0, 0, 700, 700)

    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left_arrow")){
        cat.addAnimation("cat" ,catAni2 )
        cat.velocityX = -3
    }

    if(cat.x - rat.x < cat.width/2 + rat.width/2){
        cat.addAnimation("cat" ,catAni3 )
        cat.velocityX = 0

        rat.addAnimation("rat", ratAni1)
    }

  
    drawSprites();
}

