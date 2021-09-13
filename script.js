const snakGame =document.getElementById("snak");
const ctx = snakGame.getContext('2d');



let snake = [
    {x:150,y:150},
    {x:140,y:150},
    {x:130,y:150},
    {x:120,y:150},
    {x:110,y:150},
]

let foodX;
let foodY;

function main(){
    setTimeout(() => {
        clearCanvas();
        drowFood();
        advanceSnake();
        drowSnake();

        main()
    }, 100);
}

let clearCanvas = ()=>{
    ctx.fillStyle = '#121212'
    ctx.strokeStyle='#000'

    ctx.fillRect(0,0, snakGame.width, snakGame.height)
    ctx.strokeRect(0,0,snakGame.width,snakGame.height)

}


let randomNumber=(max,min)=> Math.round((Math.random()*(max - min)+min)/10)*10
let createfood = () =>{
     foodX = randomNumber(0,snakGame.width -10);
     foodY = randomNumber(0,snakGame.height -10);
     snake.forEach(snakePart =>{
         if(snakePart.x === foodX && snakePart.y === foodY){
             createfood()
         }
     })
}

let advanceSnake = () =>{
    const head={x:snake[0].x+10,y:snake[0].y}

    snake.unshift(head);
    snake.pop();
}

let drowSnake = () =>snake.forEach(drowSnakePart)
let drowSnakePart =snakePart => {
    ctx.fillStyle='red';
    ctx.strokeStyle='#fff';

    ctx.fillRect(snakePart.x , snakePart.y , 10 , 10);
    ctx.strokeRect(snakePart.x , snakePart.y , 10 , 10);
}

let drowFood = () => {
    ctx.fillStyle = 'green';
    ctx.strokeStyle='green';

    ctx.fillRect(foodX,foodY, 10, 10)
    ctx.strokeRect(foodX,foodY, 10, 10)

}

createfood()

main();



