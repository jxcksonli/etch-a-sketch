const grid = document.querySelector("#body");

const sizeInput = document.querySelector("input");
const sizeButton = document.querySelector("button");

sizeButton.addEventListener('click', () => {
    const gridSize = sizeInput.value;
    sizeInput.value = '';

})

for (i=0; i<gridSize; i++){
    const gridRow = document.createElement("div");
    gridRow.style.cssText = "display: flex; flex-direction: row;"

    for (i=0; i<gridSize; i++){
        const gridElement = document.createElement("div");
        gridRow.appendChild(gridElement);
    }
    grid.appendChild(gridRow);
}
