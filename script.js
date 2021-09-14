const snakGame =document.getElementById("snak");
const ctx = snakGame.getContext('2d');

let changingDir=false;

let snake = [
    {x:150,y:150},
    {x:140,y:150},
    {x:130,y:150},
    {x:120,y:150},
    {x:110,y:150},
]
//food location
let foodX;
let foodY;

//snak path
let score=0;
//game score

let dx=10;
let dy=0;


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

//run 
function main(){
    setTimeout(() => {
        if(finishGame()) return;
        changingDir=false;
        clearCanvas();
        drowFood();
        advanceSnake();
        drowSnake();

        main()
    }, 100);
}
// function finish game
function finishGame(){
    for(let i=1; i<snake.length;i++){
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y)return true;

    }
    
    const leftWall = snake[0].x<0;
    const righttWall = snake[0].x>snakGame.width -10;
    const toptWall = snake[0].y<0;
    const bottomWall = snake[0].y>snakGame.height -10;

    return leftWall || righttWall || toptWall || bottomWall;
}

//canvas snake game
let clearCanvas = ()=>{
    ctx.fillStyle = '#121212'
    ctx.strokeStyle='#000'

    ctx.fillRect(0,0, snakGame.width, snakGame.height)
    ctx.strokeRect(0,0,snakGame.width,snakGame.height)

}

// create random food
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



