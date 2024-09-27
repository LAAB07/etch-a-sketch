let val = 0;
let idName = 1;

//CREATING HTML ELEMENTS

const button = document.createElement("button");
button.setAttribute("id","btn");
button.textContent="CHANGE SIZE OF GRID";
const cont = document.getElementById("container");
const option = document.getElementById("option");
option.appendChild(button);

//FUNCTION THAT CREATES THE GRID

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

addDiv(16);

const newDivs = document.querySelectorAll('.newDiv');

[...newDivs].forEach(newDiv => {
  newDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('permahover');
  });
})

button.addEventListener("click", getNumberDivs);

function getNumberDivs(){

    let userChoice;

    userChoice = prompt("Enter the number of divs that you want to draw");
    
    if (userChoice === null || userChoice === "" || userChoice === undefined){
            alert("You must enter a valid option into the prompt box!\nCannot be empty");
            return getNumberDivs();
    } else {
            cont.replaceChildren();
            idName = 1;
            addDiv(userChoice);
            const newDivs = document.querySelectorAll('.newDiv');

            [...newDivs].forEach(newDiv => {
            newDiv.addEventListener('mouseover', () => {
                    newDiv.classList.add('permahover');
            });
            })
            // addDiv(userChoice);    
    }

}





// newDivs.forEach(newDiv => {
//     newDiv.addEventListener("mouseover", usePermahover);
// });

// function usePermahover(){
//     newDiv.classList.add('permahover');
// }