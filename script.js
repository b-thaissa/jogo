const circle = document.getElementById("circle");
const gameArea = document.getElementById("gameArea");

let posX = 50;
let posY = 50;

const moveSpeed = 50;
const originalBackgroundColor = '#f8b71d';

document.addEventListener('keydown', (event)=>{
    switch(event.code){
        case 'ArrowUp':
        if (posX > 0) 
            posY = posY - moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight)
                posY = posY + moveSpeed;
    }
})