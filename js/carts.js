const goToHome = document.querySelector('.home')
goToHome.addEventListener('click' , ()=>{
    window.location.href = 'index.html'
})

const productsCart = document.querySelector('.products-cart')
const product = document.querySelector('tbody');

let products = JSON.parse(localStorage.getItem('productsCart')) 


let totalProducts = [];
    products.forEach(element => {
        let Total = Number(element.price)*element.qty;
        totalProducts.push(Total)
        product.innerHTML += `
            <tr>
                <td><img src="${element.imgUrl}" alt=".." class="w-25" onclick="goToDetailsProduct(${element.id})" ></td>
                <td>${element.title}</td>
                <td><span><input type="text" size="2" class="me-3" value="${element.qty}"></span><span class="delete-icon" onclick="removeItem(${element.id})"><i class="fa-solid fa-trash"></i></span></td>
                <td>$ ${element.price}</td>
                <td>$ ${Total}.00 </td>
            </tr>
        `
        const increase = document.querySelector('.increase');
        increase.innerHTML = products.length
    });
    let sum = totalProducts.reduce(function(a, b){
        return a + b;
    });
   
    const productTotal = document.querySelector('.product-total');
    productTotal.innerHTML = `
            <tr>
                <td>Total:</td>
                <td>$ ${sum}.00</td>
            </tr>
    `




function removeItem(id){
    if(productsCart){
       let itemId = products.filter((item)=> item.id !== id ) //filter => remove Item
        localStorage.setItem('productsCart', JSON.stringify(itemId))
        products = JSON.parse(localStorage.getItem('productsCart'))
        product.innerHTML = ''
        products.forEach((element)=>{
            product.innerHTML += `
            <tr>
                <td><img src="${element.imgUrl}" class="w-25"></td>
                <td>${element.title}</td>
                <td><span><input type="text" size="2" class="me-3" value="${element.qty}"></span><span class="delete-icon" onclick="removeItem(${element.id})"><i class="fa-solid fa-trash"></i></span></td>
                <td>${element.price}</td>
                <td>$${Number(element.price)*element.qty}</td>
            </tr>
        `
        })
        let removeArr = [];
        let totalArr = [];
        removeArr.push(products)
        removeArr.forEach((item)=>{
            for(let i = 0 ; i < item.length ; i++){
                let total = Number(item[i].price) * item[i].qty
                totalArr.push(total)
            }
            let sum = totalArr.reduce(function(a, b){
                return a + b;
            });
            productTotal.innerHTML = `
            <tr>
                <td>Total:</td>
                <td>$ ${sum}.00</td>
            </tr>
    `
        })
        const increase = document.querySelector('.increase');
        increase.innerHTML = products.length;
    }
}
function goToDetailsProduct(id){
    if(localStorage.getItem('UserName')){
        localStorage.setItem('producId' , JSON.stringify(id))
        window.location.href = 'product.html'
    }
   else{
    window.location.href = 'login.html'
   }
}

let getEmail = localStorage.getItem('Email')

const email = document.querySelector('.email')
const select = document.querySelector('.custom-select');
const continueBtn = document.querySelector('.submit')
console.log();

continueBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(email.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }
    else{
        if(email.value === getEmail){
            Swal.fire({
                icon: 'success',
                title: 'The data is correct',
              })
            email.value = '';
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
            })
        }
    }

})

const navbar = document.querySelector('.header-navbar');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};