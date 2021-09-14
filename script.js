const snakGame =document.getElementById("snak");
const ctx = snakGame.getContext('2d');

let changingDir=false;

document.addEventListener('keydown', changeDir)

function changeDir(event){
    const Left_Key = 37;
    const Right_Key = 39;
    const Up_key = 38;
    const Down_key = 40;

    if(changingDir) return;
    changingDir=true;

    const keyPressed = event.keyCode;
    if(keyPressed===Left_Key && dx!==10){
        dx= -10;
        dy=0;
    }
    if(keyPressed===Right_Key && dx!==-10){
        dx=10;
        dy=0;
    }
    if(keyPressed===Up_key && dy!==10){
        dx=0;
        dy=-10;
    }
    if(keyPressed===Down_key && dy!==-10){
        dx=0;
        dy=10;
    }
    
}

let snake = [
    {x:150,y:150},
    {x:140,y:150},
    {x:130,y:150},
    {x:120,y:150},
    {x:110,y:150},
]

let foodX;
let foodY;

let score=0;

let dx=10;
let dy=0;

function main(){
    setTimeout(() => {
        changingDir=false;
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
    const head={x:snake[0].x + dx , y:snake[0].y + dy}

    snake.unshift(head);
    if(head.x===foodX && head.y=== foodY){
        score += 10;

        document.getElementById('scorre').innerHTML = score;
        createfood();
    }else{
        snake.pop();
    }

    
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



