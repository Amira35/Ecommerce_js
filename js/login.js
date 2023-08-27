const email = document.getElementById('email')
const password = document.getElementById('password')
const logInBtn = document.getElementById('logIn')
const registerBtn = document.querySelector('.register-btn');

let getEmail = localStorage.getItem('Email')
let getPassword = localStorage.getItem('Password')

logInBtn.addEventListener('click' , logIn)


registerBtn.addEventListener('click' , () => {
    window.location.href = 'register.html'
})


function logIn(e){
    e.preventDefault()
    if(email.value === '' || password.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }
    else{
        if(email.value === getEmail && password.value === getPassword){
            Swal.fire({
                icon: 'success',
                title: 'The data is correct',
              })
            setTimeout(() =>{
                window.location.href = 'index.html'
            } , 1500)
            email.value = '';
            password.value = ''

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
            })
        }
    }
}

