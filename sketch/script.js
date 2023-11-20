// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

const grid = document.querySelector('.grid');

// Use nested for loop to create 16x16 divs
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const gridDiv = document.createElement('div')
        gridDiv.classList.add('div'); 
        grid.appendChild(gridDiv); 
        // Change the color of the divs
        addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            gridDiv.style.background = '#' + randomColor; 
        }); 
    }; 
}; 

