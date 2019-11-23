$(function(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.canvas.width  = 3500;
    ctx.canvas.height = 3500;
    
    var spawnRate=1000;

    var lastSpawn=-1;

    var objects=[];

    var pizza = new Image();
    pizza.src = "Images/pizza.png"

    var spiderman;
    var spiderimg = new Image();
    spiderimg.src = "Images/spiderR.gif"

   
    

    var music;
    music = new Audio("PizzaTime.ogg");
    music.addEventListener('ended', LoopMusic)

    function LoopMusic(){
        music.currentTime = 0;
        music.play();
    }

    makeSpider();
    animate();
    movement(spiderman);
   
    
   


    function spawnObject(){


        var object={
            x:Math.random()*(canvas.width-30)+15,

            y:Math.random() * (canvas.height) + 100 ,

            width: 30,
            height: 30,

            image: pizza
        }


        objects.push(object);
    }
    function makeSpider(){
        var spider={
            x:600,
      
            y:450 ,
      
            width: 75,
            height: 75,
      
            image: spiderimg
            
            }
            spiderman = spider;
            
            
    
    }
    

    function animate(){

        var time=Date.now();

        if(time>(lastSpawn+spawnRate)){
            lastSpawn=time;
            spawnObject();
        }
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var spider = spiderman;
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            ctx.drawImage(object.image, object.x, object.y, object.width, object.height);           
            ctx.drawImage(spider.image, spider.x, spider.y, spider.height, spider.width);

            if(spider.x < object.x + object.width &&
                spider.x + spider.width > object.x &&
                spider.y < object.y + object.height &&
                spider.y + spider.height > object.y){
                    ctx.clearRect(object.x, object.y, object.width, object.height)
                    objects.splice(i, 1)

                }
               
        }
        
    }
});
