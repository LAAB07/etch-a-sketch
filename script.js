let val = 0;
let idName = 1;
let opacity = 1;
let darken = true;

//CREATING HTML ELEMENTS

const btnCreate = document.createElement("button");
btnCreate.setAttribute("id","btnCreate");
btnCreate.textContent="CHANGE SIZE OF GRID (MAX 100)";
const btnErase = document.createElement("button");
btnErase.setAttribute("id","btnErase");
btnErase.textContent="ERASE GRID";
const cont = document.getElementById("container");
const option = document.getElementById("option");
option.appendChild(btnCreate);
option.appendChild(btnErase);

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
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        newDiv.style['background-color'] = color;
        newDiv.style['opacity'] = opacity;
        if(darken){
            opacity = opacity - .1;
            if(opacity<=0){
                darken = false;
            }
        } else {
            opacity = opacity + .1;
            if(opacity>=1){
                darken = true;
            }
        }
  });
})

btnCreate.addEventListener("click", getNumberDivs);

function getNumberDivs(){

    let userChoice;

    userChoice = prompt("Enter the number of divs that you want to draw");
    
    if (userChoice === null || userChoice === "" || userChoice === undefined || userChoice > 100){
            alert("You must enter a valid option into the prompt box!\nCannot be empty and must be less than 100");
            return getNumberDivs();
    } else {
            cont.replaceChildren();
            idName = 1;
            addDiv(userChoice);
            const newDivs = document.querySelectorAll('.newDiv');

            [...newDivs].forEach(newDiv => {
            newDiv.addEventListener('mouseover', () => {
                    newDiv.classList.add('permahover');
                    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
                    newDiv.style['background-color'] = color;
                    newDiv.style['opacity'] = opacity;
                    if(darken){
                        opacity = opacity - .1;
                        if(opacity<=0){
                            darken = false;
                        }
                    } else {
                        opacity = opacity + .1;
                        if(opacity>=1){
                            darken = true;
                        }
                    }
            });
            })
            // addDiv(userChoice);    
    }

}

btnErase.addEventListener("click", eraseGrid);

function eraseGrid(){

    const newDivs = document.querySelectorAll('.newDiv');

    [...newDivs].forEach(newDiv => {
        newDiv.style['background-color'] = '#faca70';
        newDiv.style['opacity'] = 1;
    });
}






// newDivs.forEach(newDiv => {
//     newDiv.addEventListener("mouseover", usePermahover);
// });

// function usePermahover(){
//     newDiv.classList.add('permahover');
// }