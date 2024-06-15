const grid = document.querySelector("#body");

const sizeInput = document.querySelector("input");
const sizeButton = document.querySelector("button");
const gridSize = 0;

sizeButton.addEventListener('click', () => {
    grid.textContent = '';
    // Sets content to be empty so the grid reset

    const gridSize = sizeInput.value;
    sizeInput.value = '';
    

    for (let i=0; i<gridSize; i++){
        const gridRow = document.createElement("div");
        gridRow.style.cssText = "display: flex; flex-direction: row;"
    
        for (let j=0; j<gridSize; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.textContent = "Test";
            gridRow.appendChild(gridElement);
        
        }
        grid.appendChild(gridRow);
    }
    
})
