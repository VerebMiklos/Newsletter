// containers

const containerEl = document.getElementById("container");
const succesContainerEl = document.getElementById("succes-container");

// if the email is not valid
// input

const emailInput = document.getElementById("email");
const label = document.getElementById("right-label");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// buttons

const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");



function formSuccess() {
    containerEl.classList.remove("inactive")
    succesContainerEl.classList.remove("inactive")
    containerEl.classList.add("inactive")
    succesContainerEl.classList.add("succes-container")
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if(validateEmail(email)) {
        formSuccess()
        emailInput.innerText = email
        emailInput.value = ""

        } else {
        label.style.zIndex = "0"
        emailInput.classList.add("active")
        }
    })


dismissBtn.addEventListener("click", () => {
    containerEl.classList.add("inactive")
    succesContainerEl.classList.add("inactive")
    containerEl.classList.remove("inactive")
    succesContainerEl.classList.remove("succes-container")
    label.style.zIndex = '-1'
    emailInput.classList.remove("active")
})

