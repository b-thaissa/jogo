const circle = document.getElementById('circle');
const gameArea = document.getElementById('gameArea');

let posX = 50;
let posY = 50;

const moveSpeed = 50;
const originalBackgroundColor = '#f8b71d';

document.addEventListener('keydown', (event)=>{
    switch(event.code){
        case 'ArrowUp':
        if (posX > 0) posY -= moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight) posY += moveSpeed;
            break;
        case 'ArrowLeft':
            if (posX > 0) posX -= moveSpeed;
            break;
        case 'ArrowRight':
            if (posX < window.innerWidth - circle.offsetWidth) posX += moveSpeed;
            break;
        
    }
    updateCirclePosition();
});

function updateCirclePosition() {
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}

function createSquares(){
    clearShapes();
    gameArea.style.backgroundColor = 'red';

    for(let i =0; i<4; i++) {
       const square = document.createElement('div');
       square.classList.add('square');
       square.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
       square.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
       gameArea.appendChild(square);
    }
}

function createCircles(){
    clearShapes();
    gameArea.style.backgroundColor = '#e0a295'
    for(let i =0; i<5; i++){
    const smallCircle = document.createElement('div');
    smallCircle.classList.add('small-circle');
    smallCircle.left = `${Math.random() * (window.innerWidth - 30)}px`;
    smallCircle.top = `${Math.random() * (window.innerHeight - 30)}px`;
    gameArea.appendChild(smallCircle);   
    }
}

function clearShapes(){
    const shapes = document.querySelectorAll('.square, .small-circle');
    shapes.forEach(shape => shape.remove());
}

function resetGameArea(){
    clearShapes();
    gameArea.style.backgroundColor = originalBackgroundColor;
}

document.addEventListener('keydown', (event)=>{
    if(event.code === 'Digit1'){
        createSquares();
    }else if(event.code === 'Digit2'){
        createCircles();
    }else if(event.code === 'Digit3'){
        resetGameArea();
    }
});