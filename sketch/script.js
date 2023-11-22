// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

const grid = document.querySelector('.grid');

for(let i = 0; i < (16 * 16); i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('div'); 
    grid.appendChild(gridDiv); 
    // Change the color of the divs
    addEventListener('click', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        gridDiv.style.background = '#' + randomColor; 
    }); 
}; 

