
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const magicBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

magicBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})