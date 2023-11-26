// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

function makeBoard(size) {
    // Creates a grid of X pixel sizes depending on selection
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Creates a square board by iterating up to X * X 
    let boardSize = size * size
    for (let i = 0; i < boardSize; i++) {
        let square = document.createElement('square');
        square.classList.add('square');
        grid.appendChild(square); 
    };
}; 

let draw = false; 

// Activates the draw function while mouse is clicked down
document.addEventListener('mousedown', () => {
    draw = true;
});

// De-activates the draw function while mouse is not clicked 
document.addEventListener('mouseup', () => {
    draw = false;
});

// Opacity, Color: Random
function randomColor(square) {
    let opacity = 0;
    square.addEventListener('mouseover', () => {
        if (draw) {
            // Generate random rgb 
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            opacity += 0.2;
            // Apply random generations to rgb + increment alpha (opacity)
            square.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${opacity})`;
        }
    });
}

// Calls randomColor() when 'Random Mode' button is clicked
random.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        randomColor(square);
    }); 
});

// No opacity, Color: Random
function rainbowColor(square) {
    // Generate random hexadecimal color 
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.addEventListener('mouseover', () => {
        if (draw) {
            square.style.backgroundColor = '#' + randomColor;
        }
    });
};

// Calls rainbowColor() when 'Random Mode' button is clicked
rainbow.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        rainbowColor(square);
    }); 
});

// Opacity, Color: Black
function classicMode(square) {
    let opacity = 0;
    square.addEventListener("mouseover", () => {
        if (draw) {
            // Add alpha opacity to rgb and increment by 20% each mouseover 
            opacity += 0.2;
            square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        }
    });
};

// Calls blackColor() when 'Random Mode' button is clicked
classic.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        classicMode(square);
    }); 
});

// No Opacity - Color: Black
function darkMode(square) {
    square.addEventListener("mouseover", () => {
        if (draw) {
            // Add alpha opacity to rgb and increment by 20% each mouseover 
            square.style.backgroundColor = "black";
        }
    });
};

// Calls darkMode() when 'Random Mode' button is clicked
dark.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        darkMode(square);
    }); 
});

size16.addEventListener('click', function () {
    clearBoard();
    makeBoard(16);
});

size32.addEventListener('click', function () {
    clearBoard();
    makeBoard(32);
});

size64.addEventListener('click', function () {
    clearBoard();
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
        // "Erases" board by changing color back to grid background
        square.style.backgroundColor = "rgb(185, 184, 184)";
    });
};

eraser.addEventListener('click', function () {
    let squares = document.querySelectorAll('.square');
    // Remove one square at a time
    squares.forEach(square => {
        erase(square);
    }); 
});