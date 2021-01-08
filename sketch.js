var back, backgroundImage;

function preload()
{
    backgroundImage = loadImage("images/background.png");
}

function setup()
{
    createCanvas(800,400);

    

}

function draw()
{
    background("blue");

    textFont('Georgia');
    
    fill("white");
    textSize(30);
    text("SUPER MARIO BROS",270, 100);
    
    stroke("white");
    fill("black");
    rect(90,150,620,200);
    
    fill("white");
    textSize(20);
    text("Mario's princess is kidnapped but King Koopa and Mario has to ",100,200);
    text("travel through Mushroom World inorder to save princess Toadstool.",100,225);
    text("Thay must traverse side scrolling stages while avoiding hazards such ",100,250);
    text("as enemies and pits with the aid of power - ups such as the Super",100,275);
    text(" Mushroom,Fire flower and StarMan.",100,300);
    text("All the best...!!",300,330);

    text("Press 'S' to start the game.",250,380);


    if(keyIsPressed === true)
    {
        console.log("Game");
        startGame();
    }


    drawSprites();
}

function startGame()
{
    background("white");

    back = createSprite(3000,200,3384,400);
    back.addImage(backgroundImage);
    back.scale = 1.78;
}