

	// Time complexity = 0(n*m)

const table =document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");

function makeGrid() {
    // Reset a Grid
    table.innerHTML = "";
    
    
    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth  = document.getElementById("inputWidth").value;
    
    
    
    // make a Grid
    for(let i = 0; i < gridHeight; i++){
        let row = document.createElement("tr");
        row.id = "row" + i;

        table.appendChild(row);
        let mainrow = document.getElementById("row" +i );

        for(let j = 0; j < gridWidth; j++){
            let td = document.createElement("td");
            mainrow.appendChild(td);
            
            // color the Element
            // click to fill color in tableData box
            td.addEventListener("click", function paint(){
                td.style.backgroundColor = color.value;
                //td.setAttribute("style", backgroundColor = color.value)
            });
            //  Double click to remove filled color
            td.addEventListener("dblclick",function removePaint(){
                td.style.backgroundColor = '';
            });

        }
    }
    
    
    
}
