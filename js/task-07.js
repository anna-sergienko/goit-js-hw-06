const inputText = document.querySelector("#text");
const sizeController = document.querySelector("#font-size-control");
sizeController.setAttribute("value", 20);


sizeController.addEventListener("input", () => {
    const size = sizeController.value;
    inputText.style.fontSize = size + "px";
});

