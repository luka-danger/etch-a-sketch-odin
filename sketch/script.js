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
        const square = document.createElement('square');
        square.classList.add('square');
        grid.appendChild(square);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#" + randomColor;
        });
    };
};

function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#" + randomColor;
    });
};

random.addEventListener('click', function () {
    randomColor();
});

function blackColor() {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
};

black.addEventListener('click', function () {
    blackColor();
});

size16.addEventListener('click', function () {
    clearBoard()
    makeBoard(16)
});

size32.addEventListener('click', function () {
    clearBoard()
    makeBoard(32)
});

size64.addEventListener('click', function () {
    clearBoard()
    makeBoard(64)
});

function clearBoard() {
    let squares = document.querySelectorAll('square')
    squares.forEach((square) => square.remove());
};

clear.addEventListener('click', function () {
    clearBoard()
});
