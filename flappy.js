const canvas=document.getElementById('flappy');const ctx=canvas.getContext('2d');
let frames=0,pipes=[],score=0,bird={x:60,y:200,r:12,vy:0};
const gravity=0.6,jump=-9,gap=120,pipeW=52;
function reset(){frames=0;pipes=[];score=0;bird.y=200;bird.vy=0;}
function spawnPipe(){const t=50+Math.random()*200;pipes.push({x:canvas.width,top:t,bottom:t+gap});}
canvas.addEventListener('click',()=>bird.vy=jump);
function update(){frames++;bird.vy+=gravity;bird.y+=bird.vy;if(frames%90===0)spawnPipe();
for(let i=pipes.length-1;i>=0;i--){pipes[i].x-=2.5;if(pipes[i].x+pipeW<0)pipes.splice(i,1),score++;}
for(const p of pipes){if(bird.x+bird.r>p.x&&bird.x-bird.r<p.x+pipeW){if(bird.y-bird.r<p.top||bird.y+bird.r>p.bottom)reset();}}
if(bird.y>canvas.height||bird.y<0)reset();}
function draw(){ctx.fillStyle='#80d0ff';ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle='yellow';ctx.beginPath();ctx.arc(bird.x,bird.y,bird.r,0,Math.PI*2);ctx.fill();
ctx.fillStyle='green';for(const p of pipes){ctx.fillRect(p.x,0,pipeW,p.top);ctx.fillRect(p.x,p.bottom,pipeW,canvas.height-p.bottom);}
ctx.fillStyle='black';ctx.font='20px Arial';ctx.fillText('Score: '+score,8,24);}
function loop(){update();draw();requestAnimationFrame(loop);}reset();loop();
