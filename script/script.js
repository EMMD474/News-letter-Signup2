const form = document.getElementById("form");
const display = document.getElementById("error");
const email = document.getElementById("email");

form.addEventListener("submit", (e)=> {
    const emailValue  = email.value.trim();
    localStorage.setItem("value", emailValue);
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailValue.match(pattern))
    {
        console
    }
    else {
        email.classList.add("active");
        display.innerText = "Valid email required";
        e.preventDefault();
    }
});