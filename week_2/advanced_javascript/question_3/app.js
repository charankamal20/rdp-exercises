const dropdownButton = document.getElementById("dropdown__button");
const dropdownMenu = document.getElementById("dropdown__menu");
const dropdownArr = document.getElementById("dropdown__button-arr");


dropdownButton.addEventListener("click", () => {
    const displayStyle = window.getComputedStyle(dropdownMenu);
    let displayValue = displayStyle.getPropertyValue("display") === "flex" ? "none" : "flex";
    console.log("click");
    dropdownMenu.style.display = displayValue;

    const arrow = window.getComputedStyle(dropdownArr);
    let transformProp = arrow.getPropertyValue("transform") === 'matrix(1, 0, 0, 1, 0, 0)' ? 'rotate(180deg)' : 'rotate(0deg)';
    dropdownArr.style.transform = transformProp;

});
