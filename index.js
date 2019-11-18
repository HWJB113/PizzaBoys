var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

objects = [];
var spider = new Image();
spider.src = "images/pizza.png"

function spawnObject(){
    var object={
        x:24,
        y:23,
        image: spider
    }
    objects.push(object);
}


spawn();

function spawn(){
    spawnObject();
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(spider.image, 30,30);

}
