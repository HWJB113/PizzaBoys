$(function Movement(objectP) {
    this.objectP = objectP;
    var MoveUp = false;
    var MoveRight = false;
    var MoveDown = false;
    var LastDirection;
    var NewDirection;
    var MoveLeft = false;

    document.addEventListener('keydown', BeginMovement)

    function BeginMovement(x) {
        music.play();
        

       


        if (x.keyCode === 87) { 
              MoveUp = true;
              NewDirection = 0;
              
        }
      
        if (x.keyCode === 68)  {
            MoveRight = true;
            NewDirection = 1;
    
            
        }
      
        if (x.keyCode === 83)  {
            MoveDown = true;
            NewDirection = 2;
      
        }
      
        if (x.keyCode === 65)  {
            MoveLeft = true;
            NewDirection = 3;
        }
      
        ChangeDirection(NewDirection);
         
        }

        document.addEventListener('keyup', releaseKey)

    function releaseKey(x) {

        if (x.keyCode === 87) { 
            MoveUp = false;
            LastDirection = 0;
        }
          
        if (x.keyCode === 68)  {
            MoveRight = false;
            LastDirection = 1;
        }
              
        if (x.keyCode === 83){ 
            MoveDown = false; 
            LastDirection = 2;
        }
              
        if (x.keyCode === 65)  {
            MoveLeft = false;
            LastDirection = 3;
            }
          
              
        }

    function Movementloop() {
        
        
            
        if(MoveUp === true && (this.objectP.y - 5) > 20){
            this.objectP.y = (this.objectP.y - 5);
                window.scrollBy(0,-5);
            }
        
        if(MoveRight === true && (spider.x + 5) < 3420) {
            spider.x = (spider.x + 5);
                 window.scrollBy(5,0);
                }
        
        
        if (MoveDown === true && (spider.y + 5) < 3420){
            spider.y = (spider.y + 5)
                 window.scrollBy(0,5);
        }
        
        if (MoveLeft === true && (spider.x - 5) > 20){
            spider.x = (spider.x - 5);
                window.scrollBy(-5,0);
        }
                
        window.requestAnimationFrame(Movementloop)
                
    }
    

    function ChangeDirection(NewDirection){

        spider = spiderman;

        if (NewDirection !== LastDirection ){
            if (NewDirection === 0){
                spiderimg.src="Images/spiderU.gif"
                LastDirection = NewDirection;
            }
            if (NewDirection === 1){
                spiderimg.src="Images/spiderR.gif"
                LastDirection = NewDirection;
            }
            if (NewDirection === 2){
                spiderimg.src="Images/spiderD.gif"
                LastDirection = NewDirection;
            }
            if (NewDirection === 3){
                spiderimg.src="Images/spiderL.gif"
                LastDirection = NewDirection;
            }
            }
        }
        
        window.requestAnimationFrame(Movementloop)
})