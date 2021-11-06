const inputData = document.querySelector("#validation-input[data-length]");

const addText = (event) => {

    if (event.currentTarget.value.length === Number(inputData.dataset.length)) {
        inputData.classList.add("valid")
            inputData.classList.remove("invalid")
    } else {
        inputData.classList.add("valid")
            inputData.classList.add("invalid")
    }

};

inputData.addEventListener("blur", addText);




