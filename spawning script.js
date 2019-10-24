var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

   
    var spawnLineY=25;
	
	
    var spawnRate=1000;

    var lastSpawn=-1;

    var objects=[];

    var startTime=Date.now();

    animate();


    function spawnRandomObject(){

        var t;





        var object={
            type:"red", 
            x:Math.random()*(canvas.width-50)+15,
            y:Math.floor(Math.random() * (250) + 100 ),
        } 
        objects.push(object);
    }



    function animate(){

        var time=Date.now();

        if(time>(lastSpawn+spawnRate)){
            lastSpawn=time;
            spawnRandomObject();
        }

        requestAnimationFrame(animate);

 


        }

    