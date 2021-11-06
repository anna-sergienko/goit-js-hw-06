const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");


const addInputFn = () => {
    return textInput.value.trim() === "" ? textOutput.textContent = "Anonymous" : textOutput.textContent = textInput.value;
}



textInput.addEventListener("input", addInputFn);