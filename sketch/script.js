// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

function makeBoard(size) {
    let grid = document.querySelector('.grid');
    let boxes = document.querySelectorAll('div'); 
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardSize = size * size
    for(let i = 0; i < boardSize; i++) {
        const box = document.createElement('div');
        box.classList.add('div'); 
        grid.appendChild(box); 
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#" + randomColor;
        }); 
    };
}; 

makeBoard(16)