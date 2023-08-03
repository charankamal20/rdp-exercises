const dropdownResponse = Array.from(document.getElementsByClassName("dropdown-answer"));
const dropdownOption = Array.from(document.getElementsByClassName("dropdown-option"));
const dropdownArr = Array.from(document.querySelectorAll("svg"));


for (let i = 0; i < dropdownOption.length; i++) {
    dropdownOption[i].addEventListener("click", function handleClick(event) {
        const style = window.getComputedStyle(dropdownResponse[i]);
        let display = style.getPropertyValue("display") === 'block' ? 'none' : 'block';
        display = "display: " + display;
        dropdownResponse[i].setAttribute('style', display);
        
        const svg = window.getComputedStyle(dropdownArr[i]);
        let transformProp = svg.getPropertyValue("transform") === 'matrix(1, 0, 0, 1, 0, 0)' ? 'rotate(180deg)' : 'rotate(0deg)';
        transformProp = "transform: " + transformProp;
        dropdownArr[i].setAttribute('style', transformProp);
    });
}

