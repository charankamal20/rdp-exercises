const companyButton = document.getElementById("company__button");
const dropDownArrow = document.getElementById("dropdown__button-arr");
const dropdownContainer = document.getElementById("dropdown__container");
const menuButton = document.getElementById("side__menu__button");
const menu = document.getElementById("menu__bar");

let menuFlag = false;

menuButton.addEventListener("click", ()=> {
    console.log("click");
    if(menuFlag) {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
    }
    else {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
    }
    menuFlag=!menuFlag;
});


function rotateUp() {
    dropdownContainer.classList.remove("hidden");
    dropDownArrow.classList.add("rotate-180");
    dropdownContainer.classList.add("flex"); 
}

function rotateDown() {
    dropDownArrow.classList.remove("rotate-180");
}

function removeMenu() {
    dropdownContainer.classList.remove("flex");
    dropdownContainer.classList.add("hidden"); 
}