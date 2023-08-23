const generateElements = (textColor) => {
    function addElement(tag, text) {
        const element = document.createElement(tag);
        element.textContent = text;
        element.style.color = textColor;
        document.body.appendChild(element);
    }

    return addElement;
};

const redDiv = generateElements("#FF0000");
const redSpan = generateElements("#FF0000");
const h1 = generateElements("#0000FF");

redDiv("div", "Hello World");
redSpan("span", "Hello Span");
h1("h1", "Hello All");