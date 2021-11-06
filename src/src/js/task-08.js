const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const emailVal = event.currentTarget.elements.email.value;
    const pswrdVal = event.currentTarget.elements.password.value;

  if (emailVal === "" ||  pswrdVal === "") {
    alert("Please fill in all the fields!");
  }

  console.log({emailVal, pswrdVal});
  event.currentTarget.reset();
}


    

