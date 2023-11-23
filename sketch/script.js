// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

function makeBoard(size) {
    let grid = document.querySelector('.grid');
    let boxes = document.querySelectorAll('div'); 
    // Clear grid
    boxes.forEach((div) => div.remove()); 
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardSize = size * size
    for(let i = 0; i < boardSize; i++) {
        const box = document.createElement('div')
        box.classList.add('div'); 
        grid.appendChild(box); 
    };
}; 
makeBoard(16)
