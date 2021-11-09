
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const magicBtn = document.querySelector(".change-color");
const changingColor = document.querySelector("span");

magicBtn.addEventListener("click", backgroundColorChange);
 
function backgroundColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  changingColor.textContent = `${color}`;
};




