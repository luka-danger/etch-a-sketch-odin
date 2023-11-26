// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

function makeBoard(size) {
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardSize = size * size
    for (let i = 0; i < boardSize; i++) {
        let square = document.createElement('square');
        square.classList.add('square');
        grid.appendChild(square); 
    };
};

function randomColor(square) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = '#' + randomColor; 
    });
};

random.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        randomColor(square);
    }); 
});

function blackColor(square) {
    let opacity = 0;
    square.addEventListener("mouseover", () => {
        opacity += 0.2;
        square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
};

black.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        blackColor(square);
    }); 
});

size16.addEventListener('click', function () {
    makeBoard(16);
});

size32.addEventListener('click', function () {
    makeBoard(32);
});

size64.addEventListener('click', function () {
    makeBoard(64);
});

function clearBoard() {
    let squares = document.querySelectorAll('square')
    squares.forEach((square) => square.remove());
};

clear.addEventListener('click', function () {
    clearBoard()
});

function erase(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
    });
};

eraser.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        erase(square);
    }); 
});