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