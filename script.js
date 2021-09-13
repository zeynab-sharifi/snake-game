const snakGame =document.getElementById("snak");
const ctx = snakGame.getContext('2d');

ctx.fillStyle = '#121212'
ctx.strokeStyle='#000'
ctx.fillRect(0,0, snakGame.width, snakGame.height)
ctx.strokeRect(0,0,snakGame.width,snakGame.height)