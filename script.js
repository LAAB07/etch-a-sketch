const btn = document.getElementById("btn");
const cont = document.getElementById("container");
let val = 0;
let idName = 1;

function addDiv(numDivs){

    for(let i=0; i<numDivs; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        cont.appendChild(row);
        for (let j=0; j<numDivs; j++){
            const appendDiv = document.createElement("div");
            appendDiv.setAttribute("class", "newDiv");
            appendDiv.setAttribute("id", "div" + idName);
            row.appendChild(appendDiv);
            idName++;
        }

    }
}

addDiv(30);