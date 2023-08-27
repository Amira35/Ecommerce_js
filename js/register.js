const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const registerBtn = document.getElementById('sendData')
const areadyRegister = document.querySelector('.aready-register')


let nameRegx = /[a-zA-Z]{3,}/g
let emailRgex = /[a-zA-Z]{2,}[0-9]{3,}@gmail.com/g;
let passwordRgex = /\w{8,16}/




registerBtn.addEventListener('click' , register)

function register(e){
    e.preventDefault()
    if(userName.value === '' || email.value === '' || password.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please complete the date!',
        })
    }
    else
    {

        if(email.value.match(emailRgex) && userName.value.match(nameRegx) && password.value.match(passwordRgex)){
       
            localStorage.setItem('UserName' ,  userName.value)
            localStorage.setItem('Email' , email.value)
            localStorage.setItem('Password' , password.value)
            
            setTimeout(()=>{
                    window.location.href = 'login.html'
            } , (1500))
        
                userName.value = '';
                email.value = '';
                password.value = ''
            }
             else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter the data correctly!',
                })
            } 
    }
}

areadyRegister.addEventListener('click' , ()=> { 
    window.location.href = 'login.html'
})



