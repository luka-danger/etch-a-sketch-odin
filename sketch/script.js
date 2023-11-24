// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

function makeBoard(size) {
    let grid = document.querySelector('.grid');
    let squares = document.querySelectorAll('div');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardSize = size * size
    for (let i = 0; i < boardSize; i++) {
        const square = document.createElement('div');
        square.classList.add('div');
        grid.appendChild(square);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#" + randomColor;
        });
    };
};

size16.addEventListener('click', function () {
    makeBoard(16)
});

size32.addEventListener('click', function () {
    makeBoard(32)
});

size64.addEventListener('click', function () {
    makeBoard(64)
});

function clearBoard() {
    let boxes = document.querySelectorAll('div')
    boxes.forEach((div) => div.remove());
};

clear.addEventListener('click', function () {
    clearBoard()
});