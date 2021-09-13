const snakGame =document.getElementById("snak");
const ctx = snakGame.getContext('2d');

ctx.fillStyle = '#121212'
ctx.strokeStyle='#000'
ctx.fillRect(0,0, snakGame.width, snakGame.height)
ctx.strokeRect(0,0,snakGame.width,snakGame.height)


let snake = [
    {x:150,y:150},
    {x:140,y:150},
    {x:130,y:150},
    {x:120,y:150},
    {x:110,y:150},
]

snake.forEach(snakePart => {
    ctx.fillStyle='red';
    ctx.strokeStyle='#fff';

    ctx.fillRect(snakePart.x , snakePart.y , 10 , 10);
    ctx.strokeRect(snakePart.x , snakePart.y , 10 , 10);
})