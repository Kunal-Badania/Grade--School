let username = document.querySelector("#names")
let email = document.querySelector("#emails")
let msg = document.querySelector("#message")
let submit = document.querySelector("#submit")

let formusername = document.querySelector("#name")
let formemail = document.querySelector("#email")
let formsubmit = document.querySelector("#form-submit")

let phoneno = document.querySelector("#phone-number")


function submits(){
    let message = `
    Name: ${username.value}
Email: ${email.value}
Message: ${msg.value}`
    fetch(`https://api.telegram.org/bot6531509928:AAE8AMDZYLdtPy1aVhUCazd9ynuA8oksVg4/sendMessage?chat_id=5015143399&text=${encodeURIComponent(message)}`)
   
    .then(response=>{
        submit.disabled = true
        submit.textContent = "SENDING"
        if(response.ok){
        setInterval(() => {
            submit.disabled=false
            username.value=""
            email.value=""
            msg.value=""
            submit.textContent = "SEND MESSAEG NOW"
        }, 1300);
        }else{
            submit.disabled = true
            submit.textContent = "ERROR SENDIG MESSAGE"
            setInterval(() => {
                submit.disabled=false
                username.value=""
                email.value=""
                msg.value=""
                submit.textContent = "SEND MESSAEG NOW"
            }, 1300);
        }
    })
}



function register(){
    let message = `
    New registration
Name: ${formusername.value}
Email: ${formemail.value}
Phone No: ${phoneno.value}`
    fetch(`https://api.telegram.org/bot6531509928:AAE8AMDZYLdtPy1aVhUCazd9ynuA8oksVg4/sendMessage?chat_id=5015143399&text=${encodeURIComponent(message)}`)
   
    .then(response=>{
        formsubmit.disabled = true
        formsubmit.textContent = "SENDING"
        if(response.ok){
        setInterval(() => {
            formsubmit.disabled=false
            formusername.value=""
            formemail.value=""
            phoneno.value=""
            formsubmit.textContent = "GET IT NOW"
        }, 1300);
        }else{
            formsubmit.disabled = true
            formsubmit.textContent = "ERROR SENDIG MESSAGE"
            setInterval(() => {
                formsubmit.disabled=false
                formusername.value=""
                formemail.value=""
                phoneno.value=""
                formsubmit.textContent = "GET IT NOW"
            }, 1300);
        }
    })
}