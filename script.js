const grid = document.querySelector("#body");
const sizeInput = document.querySelector("input");
const sizeButton = document.querySelector("button");
const gridSize = 0;

sizeButton.addEventListener('click', () => {
    grid.textContent = '';
    // Sets content to be empty so the grid reset
    const gridSize = sizeInput.value;
    sizeInput.value = '';
    
    if (gridSize > 100){
        alert('Input of ' + gridSize + ' is above the maximum value of 100, try selecting a smaller value 😃');
        return;
    }
    const squareLength = 960 / gridSize;

    addColourOptions();
    addOpacityOptions();
    setUpGrid(gridSize, squareLength);  
    colourGrid("black");
});

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
    return
};

function colourGrid(colour) {
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((gridElement) => {
        // For each grid element, we add a 'mouseenter' listener
        gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = colour;
        });
    })
};

function addColourOptions(){
    const colourOptionsText = document.createElement("p");
    colourOptionsText.textContent = "Select a column below by clicking it"

    const colourOptions = document.createElement("div");
    colourOptions.style.cssText = "display: flex; flex-direction: row; justify-content: center; gap: 3px;";


    const colors = ["#E8CACA", "#FFE5A8", "#F8FF97", "#BCFFA4", "#A6FFD3", "#B9E3FF", "#C1CCFF", "#E4CFFF", "#F1CEF4"];
    colors.forEach(color => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.classList.add("colourButton");
        button.setAttribute("id", color);
        colourOptions.appendChild(button);

        button.addEventListener("click", () => {
            colourGrid(color);
        });
    });

    grid.appendChild(colourOptionsText);
    grid.appendChild(colourOptions);
};

function addOpacityOptions(){
    const opacityOptions = document.createElement("div");
    opacityOptions.style.cssText = "display: flex; flex-direction: column; padding: 12px;";

    const opacityText = document.createElement("p");
    opacityText.textContent = "Brighten ☀️ or Dim 🌙 the sketch"
    opacityOptions.appendChild(opacityText);

    const opacityButtons = document.createElement("div");
    opacityButtons.style.cssText = "display: flex; flex-direction: row; justify-content: center; gap: 20px";

    const brightenButton = document.createElement("button");
    brightenButton.textContent = "☀️";
    brightenButton.setAttribute("id" ,"brightenButton");
    opacityButtons.appendChild(brightenButton);

    brightenButton.addEventListener('click', () => {
        const gridElements = document.querySelectorAll(".gridElement");
        
        gridElements.forEach((gridElement) => {
            let opacity = Number(gridElement.style.opacity);
            if (opacity <= 0.9){
                gridElement.style.opacity = opacity + 0.1;
            };
        })
    });

    const dimButton = document.createElement("button");
    dimButton.textContent = "🌙";
    dimButton.setAttribute("id" ,"dimButton");
    opacityButtons.appendChild(dimButton);

    dimButton.addEventListener('click', () => {
        const gridElements = document.querySelectorAll(".gridElement");
        gridElements.forEach((gridElement) => {
            let opacity = Number(gridElement.style.opacity);
            if (opacity >= 0.1){
                gridElement.style.opacity = opacity - 0.1;;
            };
        })
    });

    opacityOptions.appendChild(opacityButtons);

    grid.appendChild(opacityOptions);
};