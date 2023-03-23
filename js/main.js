import { data } from "./getData.js"

const container = document.querySelector(".container");
const searchBtn = document.getElementsByTagName("button");
const inputVal = document.querySelector("input")


const drinksData = data();

function showDrinksOnUI(arr) {
    for(let drink of arr){
        const div = document.createElement("div");
        const img = document.createElement("img");
        const drinkName = document.createElement("h3");

        drinkName.innerHTML = drink.strDrink;
        img.src = drink.strDrinkThumb;
        div.appendChild(drinkName);
        div.appendChild(img);
        container.appendChild(div);
        div.classList.add("drinks")
        
        if(drink.strAlcoholic === "Non alcoholic") {
            div.classList.add("non-alco")
        } else if(drink.strAlcoholic === "Alcoholic") {
            div.classList.add("alco")
        } 

        if(drink.strCategory === "Ordinary Drink") {
            div.classList.add("ord-drink")
        } else if(drink.strCategory === "Cocktail") {
            div.classList.add("cocktail")
        }
    }
}

function searchFilter(inputVal) {
    const filteredDrinks = [];
    for (let el of drinksData) {
        let nameOfDrinks = el.strDrink.toLowerCase();
        if (nameOfDrinks.includes(inputVal.toLowerCase())) {
            filteredDrinks.push(el);
        }
    }
    return filteredDrinks;
}


// inputVal.addEventListener("keyup", (event) => {
//     event.preventDefault()
//     const drinks = searchFilter(inputVal.value)
//     console.log(drinks)
//     showDrinksOnUI(drinks)
// })

let input = document.querySelector("input");

function clear() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function clickEvent() {
    if(input.value === "") {
        console.log("input value is empty")
        clear();
        showDrinksOnUI(drinksData)
    } else {
        const inputValue = input.value;
        const drinks = searchFilter(inputValue);
        console.log(drinks, "<===");
        clear()
        showDrinksOnUI(drinks)
    }
}

input.addEventListener("keyup", clickEvent)


showDrinksOnUI(drinksData);

//  HOMEWORK 
// add buttons, select,option and categories, filter alcoholic or non alcoholic, deploy in netlify


// Filter

const btnAll = document.querySelector(".btn-all");
const allDrinksNodeList = document.querySelectorAll(".drinks");
const allDrinks = Array.from(allDrinksNodeList);

btnAll.addEventListener("click", (event) => {
    event.preventDefault();
    const filterAll = allDrinks.map((el) => {
        clear();
        for(let i = 0; i < allDrinks.length; i++) {
            container.append(allDrinks[i]);
        }
    });
});

const btnAlco = document.querySelector(".btn-alco");
const alcoNodeList = document.querySelectorAll(".alco");
const alcoDrinks = Array.from(alcoNodeList);

btnAlco.addEventListener("click", (event) => {
    event.preventDefault();
    const filterAlco = alcoDrinks.map((el) => {
        clear();
        for(let i = 0; i < alcoDrinks.length; i++) {
            container.append(alcoDrinks[i])
        }
    })
})


const btnNonAlco = document.querySelector(".btn-non-alco");
const nonAlcoNodeList = document.querySelectorAll(".non-alco");
const nonAlco = Array.from(nonAlcoNodeList);

btnNonAlco.addEventListener("click", (event) => {
    event.preventDefault();
    const filterNonAlco = nonAlco.map((el) => {
        clear();
        for(let i = 0; i < nonAlco.length; i++){
            console.log(nonAlco[i])
            container.append(nonAlco[i])
        }
    })
})

const btnOrdinaryDrink = document.querySelector(".btn-ord-drink")
const ordDrinkNodeList = document.querySelectorAll(".ord-drink")
const ordDrink = Array.from(ordDrinkNodeList);

btnOrdinaryDrink.addEventListener("click", (event) => {
    const filterOrdinary = ordDrink.map((el) => {
        clear();
        for(let i = 0; i < ordDrink.length; i++) {
            container.append(ordDrink[i])
        }
    })
})

const btnCocktail = document.querySelector(".btn-cocktail");
const cocktailNodeList = document.querySelectorAll(".cocktail");
const cocktails = Array.from(cocktailNodeList)

btnCocktail.addEventListener("click", (event) => {
    const filteredCocktails = cocktails.map((el) => {
        clear()
        for (let i = 0; i < cocktails.length; i++) {
            container.append(cocktails[i])
        }
    })
})



// Modal

let modalDiv = document.querySelector(".modal-header")
let newModalDiv = document.createElement("div")
newModalDiv.setAttribute("class", "newDiv")
let getNewModalDiv = document.querySelector(".newDiv")
setTimeout(() => {
    console.log(getNewModalDiv)
}, 3000);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = allDrinks.map((el) => {
const h3 = document.querySelector("h3");
const description = document.querySelector(".description");
const instruction = document.querySelector(".instruction");
const modalImg = document.querySelector(".modal-img");
const ingredients = document.querySelector(".ingredients")


    el.addEventListener("click", (event) => {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        modalDiv.append(newModalDiv)
        for (let key of drinksData) {        
            if(event.target.src === key.strDrinkThumb){
                h3.append(key.strDrink);
                instruction.append(`Instructions: ${key.strInstructions}`)
                modalImg.src = key.strDrinkThumb
                modalImg.append(key.strDrinkThumb)
                ingredients.append(`Ingredients: ${key.strIngredient1, key.strIngredient2}`)
            } else {
            }
        }
    })
})


// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    const h3 = document.querySelector("h3");
    h3.innerText = ""
  };
  
  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  
  // close modal when the Esc key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });