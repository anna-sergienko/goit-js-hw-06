const inputText = document.querySelector("#text");
const sizeController = document.querySelector("#font-size-control");



sizeController.addEventListener("input", function () {
    const size = sizeController.value;
    inputText.style.fontSize = size + "px";
});