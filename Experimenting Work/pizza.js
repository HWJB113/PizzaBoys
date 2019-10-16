function movement() {
var UpMove = false;
var RightMove = false;
var DownMove = false;
var LeftMove = false;
var xStartCoord = 200;
var yStartCoord = 200;

document.addEventListerner('keydown', BeginMovement)

function beginMovement(x) {
    if (x.keyCode === 38) { 
        MoveUp = true;
    }

        if (x.keycode === 39)  {
            MoveRight = true;
        }

        if (x.keycode === 40)  {
            MoveDown = true;
        }

        if (x.keycode === 37)  {
            MoveLeft = true;
        }

    }

 document.addEventListerner('keyup', releasekey)

 function beginMovement(x) {
    if (x.keyCode === 38) { 
         MoveUp = false;
    }

        if (x.keycode === 39)  {
            MoveRight = false;
        }
    
         if (x.keycode === 40)  {
             MoveDown = false;
        }
    
         if (x.keycode === 37)  {
             MoveLeft = false;
         }
    
    }

function Movementloop() {
    var div = document.getElementById("player")
    
    if(MoveUp = true){
        ycoord = (ycoord-5);
    }

        if (MoveRight = true) {
            xcoord = (xcoord-5);
        }

        if (MoveDown = true){
            ycoord = (ycoord-5)
        }

        if (MoveLeft){
            xcoord = (xcoord - 5);
        }
    }

div.style.left = xcoord
div.style.top = ycoord

window.requestAnimationFrame(Movementloop)
}



    