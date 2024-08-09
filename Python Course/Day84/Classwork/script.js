/*
const div = document.getElementById('mydiv');
    let px = 0;

    const moveRight = setInterval(function(){
        div.style.left = `${px}px`;
        px++;

        if(px >= 500){
            clearInterval(moveRight);
        }
    }, 10); */




const child = document.getElementById('child');
const containerSize = 300;
const childSize = 50;
let posX = containerSize - childSize;
let posY = 0;
let dx = -1;
let dy = 0;

const move = setInterval(function(){
    posX += dx;
    posY += dy;

    child.style.left = `${posX}px`;
    child.style.top = `${posY}px`;

    if (posX >= containerSize - childSize){
        dx = 0; dy = -1; // ქვევით
    } else if (posY >= containerSize - childSize){
        dx = 1; dy = 0; // მარჯვნივ
    } else if (posX <= 0){
        dx = 0; dy = 1; // ზევით
    } else if (posY <= 0){
        dx = -1; dy = 0; // მარცხნივ
    }
}, 5);

