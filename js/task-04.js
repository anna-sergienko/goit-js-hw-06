let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
const changingVal = document.querySelector("#value");

plusBtn.addEventListener("click", () => {
    counterValue += 1;
    return changingVal.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
    counterValue -= 1;
    return changingVal.textContent = counterValue;
});



