function movement() {
var MoveUp = false;
var MoveDownRight = false;
var MoveRight = false;
var MoveDown = false;
var LastDirection;
var NewDirection;
var MoveLeft = false;
var xcoord = 400;
var ycoord= 400;

document.addEventListener('keydown', BeginMovement)

function BeginMovement(x) {

  if (x.keyCode === 37 && x.keyCode === 39)  {
    MoveDownRight = true;
    NewDirection = 4;



}
    if (x.keyCode === 38) { 
        MoveUp = true;
        NewDirection = 0;
        
    }

    if (x.keyCode === 39)  {
        MoveRight = true;
        NewDirection = 1;


    }

    if (x.keyCode === 40)  {
        MoveDown = true;
        NewDirection = 2;

    }

    if (x.keyCode === 37)  {
        MoveLeft = true;
        NewDirection = 3;
    


    }

    

    ChangeDirection(NewDirection);
   
    }

 document.addEventListener('keyup', releaseKey)

 function releaseKey(x) {

  if (x.keyCode === 37 && x.keyCode === 39)  {
    MoveDownRight = false;
    LastDirection = 4;
}
    if (x.keyCode === 38) { 
         MoveUp = false;
         LastDirection = 0;
    }

        if (x.keyCode === 39)  {
            MoveRight = false;
            LastDirection = 1;
        }
    
         if (x.keyCode === 40){ 
            MoveDown = false; 
             LastDirection = 2;
        }
    
         if (x.keyCode === 37)  {
             MoveLeft = false;
             LastDirection = 3;
         }

    
    }



function Movementloop() {
    var div = document.getElementById("playerDiv")
    
    if(MoveUp === true){
        ycoord = (ycoord-5);
    }

        if (MoveRight === true) {
            xcoord = (xcoord+5);
        }

        if (MoveDown === true){
            ycoord = (ycoord+5)
        }

        if (MoveLeft === true){
            xcoord = (xcoord - 5);
        }
        div.style.left = xcoord
        div.style.top = ycoord
        window.requestAnimationFrame(Movementloop)
        
    }

function ChangeDirection(NewDirection){
    if (NewDirection !== LastDirection ){
        if (NewDirection === 0){
            document.getElementById("player").src="./Images/spiderU.gif"
            LastDirection = NewDirection;
        }
        if (NewDirection === 1){
            document.getElementById("player").src="./Images/spiderR.gif"
            LastDirection = NewDirection;
        }
        if (NewDirection === 2){
            document.getElementById("player").src="./Images/spiderD.gif"
            LastDirection = NewDirection;
        }
        if (NewDirection === 3){
            document.getElementById("player").src="./Images/spiderL.gif"
            LastDirection = NewDirection;
        }
        if (NewDirection === 4){
          document.getElementById("player").src="./Images/spiderRD.gif"
          LastDirection = NewDirection;
      }
    }
}
window.requestAnimationFrame(Movementloop)
}



    