// Function to create a grid
function createGrid(gridSize = 16) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';  // Clear any existing grid

    const squareSize = 960 / gridSize; // Calculate the size of each square based on the grid size
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add event listener to change color on hover
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black';  // Change to black when hovered
        });

        container.appendChild(square);
    }
}

// Function to resize the grid when the button is clicked
document.getElementById('resize-button').addEventListener('click', function() {
    const gridSize = prompt('Enter the number of squares per side (1 to 100):', 16);
    const size = parseInt(gridSize);
    
    // Validate the input
    if (size >= 1 && size <= 100) {
        createGrid(size);  // Create the new grid
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

// Initialize with a default 16x16 grid
createGrid(16);
