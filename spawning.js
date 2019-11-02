$(function(){


    var canvas=document.getElementById("gamemap");
    var ctx=canvas.getContext("2d");

    var spawnRate=1500;

    var spawnRateOfDescent=0.50;

    var lastSpawn=-1;

    var objects=[];

    var startTime=Date.now();

    animate();

    function spawnRandomObject(){

        var t = "blue";

        var object={

            type:t, 

            x:Math.random()*(canvas.width-30)+15,

            y:Math.random() * (canvas.height) + 100 ,
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



        ctx.clearRect(0,0,canvas.width,canvas.height);


        for(var i=0;i<objects.length;i++){
            var object=objects[i];
            ctx.beginPath();
            ctx.arc(object.x,object.y,8,0,Math.PI*2);
            ctx.closePath();
            ctx.fillStyle=object.type;
            ctx.fill();
        }

    }

});