const grid = document.querySelector("#body");
const sizeInput = document.querySelector("input");
const sizeButton = document.querySelector("button");
const gridSize = 0;

sizeButton.addEventListener('click', () => {
    grid.textContent = '';
    // Sets content to be empty so the grid reset

    const gridSize = sizeInput.value;
    sizeInput.value = '';
    
    if (gridSize >= 100){
        alert('Input of ' + gridSize + ' is above the maximum value of 100, try selecting a smaller value 😃');
        return;
    }
    const squareLength = 960 / gridSize;
    setUpGrid(gridSize, squareLength);  
    colourGrid()
})

function setUpGrid(gridSize,squareLength){
    // Set up the grade based on size input
    for (let i=0; i<gridSize; i++){
        const gridRow = document.createElement("div");
        gridRow.style.cssText = "display: flex; flex-direction: row;"
    
        for (let j=0; j<gridSize; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.style.cssText = "width: " + squareLength + "px; height: " + squareLength + "px";
            gridRow.appendChild(gridElement);
        }
        grid.appendChild(gridRow);
    }
}

function colourGrid() {
    const gridElements = document.querySelectorAll(".gridElement");
    console.log(gridElements, gridElements.length);
    
    gridElements.forEach((gridElement) => {
        // For each grid element, we add a 'mouseenter' listener
        gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = "purple";
        });
    })
};