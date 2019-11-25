$(function GameStart() {
//this block of code in general is for creating the canvas that the game will be played on
//the first line creates a variable canvas based of the canvas that was created in the html
    var canvas = document.getElementById("Canvas");
    // calling get canvas will allow drawing methods to be calle don the canvas
    var ctx = canvas.getContext("2d");
    //this will create a background on the screen that is blue
    ctx.fillStyle = "blue";
    //this will fill the entire canvas wit the background colour defined above
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //these will set the height and width of the canvas
    ctx.canvas.width = 3500;
    ctx.canvas.height = 3500;
    //this sets the spawn rate for the pizzas at half a second
    var SpawnRate = 500;
    //this creates a variable for the last pizza spawn
    var LastSpawn = -1;
    //this creates a variable for the main player
    var Spiderman;
    //creates a new image that will be the player
    var SpiderImg = new Image();
    //imports the image to be used for the player
    SpiderImg.src = "Images/spiderR.gif"
    //creates an array to hold all of the spawned pizzas
    var Objects = [];
    //creates a new object that will be spawned for the pizzas
    var Pizza = new Image();
    //imports the image of the pizza
    Pizza.src = "Images/pizza.png"
    
    //this creates all the movement control variables
    var MoveLeft = false;
    var MoveUp = false;
    var MoveRight = false;
    var MoveDown = false;
    //these variables are used later to define which direction the player is facing
    var LastDirection;
    var NewDirection;

    //a new variable is defined that will hold the music
    var Music;
    //the variable is set equal to the music that is being held
    Music = new Audio("PizzaTime.ogg");
    //this event listener is designed to start whenever the music ends so that it will keep going infinitly the music is intially started in the movement
    Music.addEventListener('ended', LoopMusic)
    //this function serves to run a movement loop
    function LoopMusic(){
        //this sets the point that the music is at back to zero
        Music.currentTime = 0;
        //this makes the music start playing again
        Music.play();}

    //this onclick event is for 
    MoveUpM.onclick = function MobileMoveU(){

        MoveUp = true;
        MoveLeft = false;
        MoveRight = false;
        MoveDown = false;};

    MoveLeftM.onclick = function MobileMoveL(){

        MoveUp = false;
        MoveLeft = true;
        MoveRight = false;
        MoveDown = false;};

     Stop.onclick = function StopMovement(){

        MoveUp = false;
        MoveLeft = false;
        MoveRight = false;
        MoveDown = false;};

    MoveRightM.onclick = function MobileMoveR(){

        MoveUp = false;
        MoveLeft = false;
        MoveRight = true;
        MoveDown = false;};

    MoveDownM.onclick = function MobileMoveD(){

        MoveUp = false;
        MoveLeft = false;
        MoveRight = false;
        MoveDown = true;};
    //these are the calls for 3 different functions that are properly defined later on
    AssignTeam();
    MakeSpider();
    Animate();
    
    //these variables are designed to be used to set which team the player is on
    var PsTeam = 0;
    var FjTeam = 0;

    var TeamPsScore = 0;
    var TeamFjScore = 0;
    document.getElementById('ps_score').innerHTML = "" + TeamPsScore;
    document.getElementById('fj_score').innerHTML = "" + TeamFjScore;

    function AssignTeam(){

        if (PsTeam == FjTeam) {
            AssignedTeam = Math.floor(Math.random() * 2) + 1;}

        if (FjTeam > PsTeam){
            AssignedTeam = 1;
            PsTeam += 1;}

        if (PsTeam > FjTeam){
            AssignedTeam = 2
            FjTeam += 1;}}

    document.addEventListener('keydown', BeginMovement)

    function BeginMovement(x){

        Music.play();

        if (x.keyCode === 87){
            MoveUp = true;
            NewDirection = 0;}

        if (x.keyCode === 68){
            MoveRight = true;
            NewDirection = 1;}

        if (x.keyCode === 83){
            MoveDown = true;
            NewDirection = 2;}

        if (x.keyCode === 65){
            MoveLeft = true;
            NewDirection = 3;}

        ChangeDirection(NewDirection);}

    document.addEventListener('keyup', releaseKey)

    function releaseKey(x){

        if (x.keyCode === 87){
            MoveUp = false;
            LastDirection = 0;}

        if (x.keyCode === 68){
            MoveRight = false;
            LastDirection = 1;}

        if (x.keyCode === 83){
            MoveDown = false;
            LastDirection = 2;}

        if (x.keyCode === 65){
            MoveLeft = false;
            LastDirection = 3;}}

    function Movementloop(){

        if (TeamPsScore >= 31){
            TeamPsScore = 0;
            setInterval(GameStart(), 6000)
            return alert("The Final Score was 30 please press ok if you would like to replay the Offline demo")}

        if(TeamFjScore >= 30){
            TeamFjScore = 0;
            setInterval(GameStart(), 6000)
            return alert("The Final Score was 30 please press ok if you would like to replay the Offline demo")}

        Spider = Spiderman;

        if (MoveUp === true && (Spider.y - 5) > 20){
            Spider.y = (Spider.y - 5);
            window.scrollBy(0,-5);}

        if (MoveRight === true && (Spider.x + 5) < 3420){
            Spider.x = (Spider.x + 5);
            window.scrollBy(5,0);}

        if (MoveDown === true && (Spider.y + 5) < 3420){
            Spider.y = (Spider.y + 5)
            window.scrollBy(0,5);}

        if (MoveLeft === true && (Spider.x - 5) > 20){
            Spider.x = (Spider.x - 5);
            window.scrollBy(-5,0);}

       window.requestAnimationFrame(Movementloop)}

    function ChangeDirection(NewDirection){

        Spider = Spiderman;

        if (NewDirection !== LastDirection){

            if (NewDirection === 0) {
                SpiderImg.src = "Images/spiderU.gif"
                LastDirection = NewDirection;}

            if (NewDirection === 1){
                SpiderImg.src = "Images/spiderR.gif"
                LastDirection = NewDirection;}

            if (NewDirection === 2) {
                SpiderImg.src = "Images/spiderD.gif"
                LastDirection = NewDirection;}

            if (NewDirection === 3) {
                SpiderImg.src = "Images/spiderL.gif"
                LastDirection = NewDirection;}}}

    window.requestAnimationFrame(Movementloop)


    function SpawnObject(){

        var PizzaObj = {

            x: Math.random() * (canvas.width - 30) + 15,
            y: Math.random() * (canvas.height) + 100,
            width: 30,
            height: 30,
            image: Pizza}
        Objects.push(PizzaObj);}

    function MakeSpider(){

        var SpidyX = Math.random() * (canvas.width - 30);
        var SpidyY = Math.random() * (canvas.height);

        var Spider = {
            x: SpidyX,
            y: SpidyY,
            width: 75,
            height: 75,
            image: SpiderImg,
            team: AssignedTeam}

        setTimeout(window.scrollTo(SpidyX, SpidyY + (window.innerHeight * 0.3)))
        Spiderman = Spider;}

    
      
    function Animate(){

        var Time = Date.now();

        if (Time > (LastSpawn + SpawnRate)){
            LastSpawn = Time;
            SpawnObject();}
            requestAnimationFrame(Animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var Spider = Spiderman;
            ctx.fillStyle = "blue";
             ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < Objects.length; i++) {
                var PizzaObj = Objects[i];
                ctx.drawImage(PizzaObj.image, PizzaObj.x, PizzaObj.y, PizzaObj.width, PizzaObj.height);
                ctx.drawImage(Spider.image, Spider.x, Spider.y, Spider.height, Spider.width);
            
                if (Spider.x < PizzaObj.x + PizzaObj.width && Spider.x + Spider.width > PizzaObj.x && Spider.y < PizzaObj.y + PizzaObj.height && Spider.y + Spider.height > PizzaObj.y){
                    ctx.clearRect(PizzaObj.x, PizzaObj.y, PizzaObj.width, PizzaObj.height)
                    Objects.splice(i, 1)

                    if (Spider.team == 1){
                        TeamPsScore += 1;
                        document.getElementById('ps_score').innerHTML = "" + TeamPsScore;} 
                    else{
                        TeamFjScore += 1;
                        document.getElementById('fj_score').innerHTML = "" + TeamFjScore;}}}}});