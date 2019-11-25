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

    //this onclick event is for mobile phone movement controls
    MoveUpM.onclick = function MobileMoveU(){
        //here it uses the movement variables that were origionally created for the keyboard movment system
        //it will simply set whichever direction it is trying to move in to true 
        MoveUp = true;
        MoveLeft = false;
        MoveRight = false;
        MoveDown = false;};

        //this onclick event is the same as the one mentioned above except for moving left
    MoveLeftM.onclick = function MobileMoveL(){

        MoveUp = false;
        MoveLeft = true;
        MoveRight = false;
        MoveDown = false;};
        //this onclick event is the same as the one mentioned above except for stopping the movement to do this it 
        //sets all the variable sback to false which is its origional state
     Stop.onclick = function StopMovement(){

        MoveUp = false;
        MoveLeft = false;
        MoveRight = false;
        MoveDown = false;};
        //this onclick event is the same as the one mentioned above except for moving right
    MoveRightM.onclick = function MobileMoveR(){

        MoveUp = false;
        MoveLeft = false;
        MoveRight = true;
        MoveDown = false;};
        //this onclick event is the same as the one mentioned above except for moving down
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
    //these 2 variables are to be used to store both of the teams scores
    var TeamPsScore = 0;
    var TeamFjScore = 0;
    //this is used to get the HTML element that will display the score of each of the teams in the singleplayer version only one score will be
    //changed
    document.getElementById('ps_score').innerHTML = "" + TeamPsScore;
    document.getElementById('fj_score').innerHTML = "" + TeamFjScore;

    //this is one of the functions that was called above this one is used to randomly assign the player to a team
    function AssignTeam(){
        //this if statment is triggered when the number of people on each team is the same 
        if (PsTeam == FjTeam) {
            //it will make it so that the team that is assigned to the play is randomly selected either 1 or 2 
            AssignedTeam = Math.floor(Math.random() * 2) + 1;}
        //this if statemenet is designed to be triggered if team Fj has more people than Ps
        if (FjTeam > PsTeam){
            //it will set the player to team 1
            AssignedTeam = 1;
            //it will then increase the number of people in that team by one
            PsTeam += 1;}
        //this if statemenet is for if team Ps is larger than Fj in this case the player is assigned to team 2 
        if (PsTeam > FjTeam){
            AssignedTeam = 2
            //and the number of people on team Fj is increased by 1
            FjTeam += 1;}}

    //this event listener is designed so that whenever a key is pressed it will call the begin movement function
    document.addEventListener('keydown', BeginMovement)
    //this function is the start of the keyboard movement system which is the better version
    function BeginMovement(x){
        //this is where the music will begin playing and it will continue playing because of the function mentioned before that loops it
        Music.play();
        //this if statement is for when the W key is pressed it will set moveup to true and the new direction to 0 
        if (x.keyCode === 87){
            MoveUp = true;
            NewDirection = 0;}
        //this if statement is for when the D key is pressed it will set moveright to true and the new direction to 1 
        if (x.keyCode === 68){
            MoveRight = true;
            NewDirection = 1;}
        //this if statement is for when the S key is pressed it will set movedown to true and the new direction to 2 
        if (x.keyCode === 83){
            MoveDown = true;
            NewDirection = 2;}
        //this if statement is for when the A key is pressed it will set moveleft to true and the new direction to 3
        if (x.keyCode === 65){
            MoveLeft = true;
            NewDirection = 3;}

            //all of the above if statements will the be used to determine which direction spiderman is moving and which direction he is facing

        //this will call the change direction function and pass in the value that was deteremined by the keypress if's
        ChangeDirection(NewDirection);}

    //this event listener is for when the key is released so whenever the person stops pressing the movement button
    document.addEventListener('keyup', releaseKey)
    //this function will effectivly act the same way that the begin movemenet function did except setting the movement value sto the oppisite
    function releaseKey(x){
        //all of these are the same as last time barr the moves being set to false instead of true
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
    //it will then run the movemenet loop which is the function responsible for the player moving
    function Movementloop(){

        //also in the movement loop is the functions for the ending of the game these were put here since they would need to be called at the same time
        // as movemnt so although it looks slightly more messy it is more effecient for them to be here.

        //the first if statemene tis just to check if the time score is ever equal to 30 
        if (TeamPsScore == 30){
            //if it is it will set the team score back to 0
            TeamPsScore = 0;
            //and call the entire Javascript file again on a delay
            setInterval(GameStart(), 6000)
            //it will then call return otherwise the origional version of the javascript function will continue to run in the background
            return alert("The Final Score was 30 please press ok if you would like to replay the Offline demo")}
        //this if statement will effectivly do the same as the first except this time it is working for the team Fj and now Ps
        if(TeamFjScore == 30){
            TeamFjScore = 0;
            setInterval(GameStart(), 6000)
            return alert("The Final Score was 30 please press ok if you would like to replay the Offline demo")}

        //this is where the object that is created for spiderman is set equal to a local variable
        Spider = Spiderman;
        //here the if statement checks to make sure that the movement variable for up is set equal to true this will allow it to move
        //it also as an && this is here to make sure that the player cannot move of the edge of the play field as it just will not move 
        if (MoveUp === true && (Spider.y - 5) > 20){
            //this will change the players y value by -5
            Spider.y = (Spider.y - 5);
            //this will scroll with the player that way the player is always relativly in the center of the screen
            window.scrollBy(0,-5);}
        //this if statement will basically do the same as the above statement except for moving right
        if (MoveRight === true && (Spider.x + 5) < 3420){
            Spider.x = (Spider.x + 5);
            window.scrollBy(5,0);}
        //this if statement will basically do the same as the above statement except for moving down
        if (MoveDown === true && (Spider.y + 5) < 3420){
            Spider.y = (Spider.y + 5)
            window.scrollBy(0,5);}
        //this if statement will basically do the same as the above statement except for moving left
        if (MoveLeft === true && (Spider.x - 5) > 20){
            Spider.x = (Spider.x - 5);
            window.scrollBy(-5,0);}
        //this will keep the code iterating so that it is constantly moving as long as the conditions are being met in the ifs
       window.requestAnimationFrame(Movementloop)}
        //this function is for changing the directions it only works for the keyboard version of movement
    function ChangeDirection(NewDirection){
        // this will again localise a verison of the player object
        Spider = Spiderman;
        //this will make sure that it only runs when the new direction is not equal to the old direction this means the player has started moving in a new direction
        if (NewDirection !== LastDirection){
            // if the new direction is 0 it will use the spiderman up gif 
            if (NewDirection === 0) {
                SpiderImg.src = "Images/spiderU.gif"
                //and set the directions to be equal
                LastDirection = NewDirection;}
            // if the new direction is 1 it will use the spiderman right gif 
            if (NewDirection === 1){
                SpiderImg.src = "Images/spiderR.gif"
                //and set the directions to be equal
                LastDirection = NewDirection;}
            // if the new direction is 2 it will use the spiderman down gif 
            if (NewDirection === 2) {
                SpiderImg.src = "Images/spiderD.gif"
                //and set the directions to be equal
                LastDirection = NewDirection;}
            // if the new direction is 3 it will use the spiderman left gif 
            if (NewDirection === 3) {
                SpiderImg.src = "Images/spiderL.gif"
                //and set the directions to be equal
                LastDirection = NewDirection;}}}
    
    window.requestAnimationFrame(Movementloop)

    //this function is incharge of making sure the pizza objects are spawned randomly
    function SpawnObject(){
        //first it will create one new object
        var PizzaObj = {
            //then it will set its x value to a random number on the canvas
            x: Math.random() * (canvas.width - 30) + 15,
            //then it will set its y  value to a random number on the canvas
            y: Math.random() * (canvas.height) + 100,
            //they will all have the same width and height
            width: 30,
            height: 30,
            //and they will all use the image that was create above for pizza
            image: Pizza}
            //it will then place the newly create pizza in the objects array which holds them all
        Objects.push(PizzaObj);}
    //this function is incharge of the creation of the player
    function MakeSpider(){
        //it will create a random x and y on the canvas
        var SpidyX = Math.random() * (canvas.width - 30);
        var SpidyY = Math.random() * (canvas.height);
        //it will then actually create a variable for the player
        var Spider = {
            //it will set the players x and y values equal to whatever was randomly generated
            x: SpidyX,
            y: SpidyY,
            //the player will also always be the same size
            width: 75,
            height: 75,
            //and the same image that was designated above
            image: SpiderImg,
            //and it will give the player whatever team they were assigned to
            team: AssignedTeam}
            //it will then scroll to whatever the players x and y coordinates are on the canvas
        setTimeout(window.scrollTo(SpidyX, SpidyY + (window.innerHeight * 0.3)))
        //and set this newly created player = to a global variable so it can be used elsewhere
        Spiderman = Spider;}

    
    //this function is incharge of the spawning and collisions
    function Animate(){
        //this will set the current time equal to a held variable called time
        var Time = Date.now();
        //this if statement is incharge of using the predefined variables to make sure that pizza objects are constanly spawning
        if (Time > (LastSpawn + SpawnRate)){
            LastSpawn = Time;
            //this is where an object is spawned
            SpawnObject();}
            //after this it will call itself again so that it is constatnly running
            requestAnimationFrame(Animate);
            //this will completely clear the canvas of everything on it
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //the player will then be set equal to a local variable
            var Spider = Spiderman;
            //the canvas will then again be filled with a background as the wipe got rid of it
            ctx.fillStyle = "blue";
             ctx.fillRect(0, 0, canvas.width, canvas.height);
            //a for loop is then setup that will iterate through the entire object array 
            for (var i = 0; i < Objects.length; i++) {
                //it will set each item in turn equal to a temporary value
                var PizzaObj = Objects[i];
                //and it will draw that object to its generated location
                ctx.drawImage(PizzaObj.image, PizzaObj.x, PizzaObj.y, PizzaObj.width, PizzaObj.height);
                //it will also at the same time draw the player onto the map again this will all constantly be happening
                ctx.drawImage(Spider.image, Spider.x, Spider.y, Spider.height, Spider.width);
                //this extemely large if statemenet is designed to check to see if the player object is colliding with any of the objects in the object array 
                if (Spider.x < PizzaObj.x + PizzaObj.width && Spider.x + Spider.width > PizzaObj.x && Spider.y < PizzaObj.y + PizzaObj.height && Spider.y + Spider.height > PizzaObj.y){
                    //if it is then it will clear that specific pizza 
                    ctx.clearRect(PizzaObj.x, PizzaObj.y, PizzaObj.width, PizzaObj.height)
                    // this will remove the object that was collided with so it does not respawn when the canvas is redrawn
                    Objects.splice(i, 1)
                    //this will check to make sure which team the player is on 
                    if (Spider.team == 1){
                        //it will then increase the score of that team
                        TeamPsScore += 1;
                        document.getElementById('ps_score').innerHTML = "" + TeamPsScore;} 
                        //this is simply for the other other team
                    else{
                        TeamFjScore += 1;
                        document.getElementById('fj_score').innerHTML = "" + TeamFjScore;}}}}});