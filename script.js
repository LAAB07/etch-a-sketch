const btn = document.getElementById("btn");
const cont = document.getElementById("container");
let val = 0;
let idName = 1;

function getNumberDivs(){

    let userChoice;

    userChoice = prompt("Enter the number of divs that you want to draw");
    
    if (userChoice === null || userChoice === "" || userChoice === undefined){
            alert("You must enter a valid option into the prompt box!\nCannot be empty");
            return getNumberDivs();
    } else {
            return userChoice;    
    }

}

let userSelection = getNumberDivs();

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

addDiv(userSelection);

const newDivs = document.querySelectorAll('.newDiv');

[...newDivs].forEach(newDiv => {
  newDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('permahover');
  });
})