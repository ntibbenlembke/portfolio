const soundcloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sidenav = document.querySelector('.aside');

function setInitialIconState() {
    btnBars.style.display = "block";
    btnTimes.style.display = "none";
}

function setInitialIconState() {
    btnBars.style.display = "block";
    btnTimes.style.display = "none";
}

btnBars.addEventListener('click', () => sidebarSwap('open'));
btnTimes.addEventListener('click', () => sidebarSwap('closed'));

const sidebarSwap = (navCondition) => {
    if (navCondition === 'open') {
        sidenav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    } else if (navCondition === 'closed') {
        sidenav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
}

$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
        wheelZoom: false,
    }, "tags")) {
        // something went wrong hide the canvas container
        $("#myCanvasContainer");
    }
})

// contact me section

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    validateInput()
})

const validateInput = () => {
    let email = emailInput.value
    let textarea = textareaInput.value

    if(!email && !textarea){
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage("Please fill in the required fields")
    }
    else if (!email && textarea){
        setError(emailInput.parentElement)
        showMessage("Email can't be empty")
    }
    else if (!textarea && email) {
        setError(textareaInput.parentElement)
        showMessage('Please provide a message')
    }
    else if(email && textarea){
        emailjs.sendForm("service_jfufcge", "template_0gc079n", contactForm, "xA42OtE4do6RikX3e");
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage('Message sent successfully', 'green')
        textareaInput.value = ''
        emailInput.value = ''
        nameInput.value = ''
        subjectInput.value = ''
    }
}

const setError = (input) => {
    if(input.classList.contains("success")){
        input.classList.remove("success")
    }else {
        input.classList.add("error")
    }
}
const setSuccess = (input) => {
    if(input.classList.contains("error")){
        input.classList.remove("error")
    }else {
        input.classList.add("success")
    }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add('message-content')
    divContent.style.backgroundColor = updateColor
    messageDiv.prepend(divContent)
  
    messageDiv.style.transform = `translate(${(0, 0)}%)`
    setTimeout(() => {
      divContent.classList.add('hide')
      divContent.addEventListener('transitionend', () => {
        divContent.remove()
      })
    }, 5000)
  }


document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })