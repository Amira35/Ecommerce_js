let products = [
    {
        id : 1 , 
        title : "Exerci Tation"  ,
        price : '500.00' , 
        imgUrl : "img1/product-3-270x330.png",
        visability : 'In Stock',
        instock : 10,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 2 , 
        title : "Donec Ac Tempus"  ,
        price : '101.00' , 
        imgUrl : "img1/product-8-270x330.png",
        visability :'In Stock',
        instock : 3,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 3 , 
        title : "Accumsan Elit"  ,
        price : '90.00' , 
        imgUrl : "img1/product-1-270x330.png",
        visability : 'In Stock',
        instock : 14,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 4 , 
        title : "Aliquam Consequat"  ,
        price : '80.00 ' , 
        imgUrl : "img1/product-7-270x330.png",
        visability : 'In Stock',
        instock : 4,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 5 , 
        title : "Andouille Eu"  ,
        price : '100.00' , 
        imgUrl : "img1/product-6-270x330.png",
        visability : 'In Stock',
        instock : 2,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 6 , 
        title : "Bima Zuma"  ,
        price : '100.00' , 
        imgUrl : "img1/product-14-270x330.png",
        visability :'In Stock',
        instock : 1,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 7 , 
        title : "Dail Miren Tukan"  ,
        price : '100.00' , 
        imgUrl : "img1/product-16-270x330.png",
        visability : 'In Stock',
        instock : 3,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    },
    {
        id : 8 , 
        title : "Gire Tima Pokem"  ,
        price : '80.00' , 
        imgUrl : "img1/product-14-270x330.png" ,
        visability :'In Stock',
        instock : 1,
        icon1 : 'fa-solid fa-square-check' ,
        qty : 1
    }
];

window.onload =  localStorage.setItem('products' , JSON.stringify(products))


const innerProduct = document.querySelector('.header-content__shopping')
const addToCartProducts = document.querySelector('.add-cart-products')
const showCart = document.querySelector('.show-cart-products');
const increaseProduct = document.querySelector('.increase')
const cartIcon = document.querySelector('.cart-icon');


//Stasrt Render Product
function displayProducts(){
  let dProduct =   products.map((item) => {
        return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="products my-3 hvr-box-shadow-outset">
                <div class="product-imgess position-relative ">
                    <img src="${item.imgUrl}" alt="" class="w-100" onclick="goToDetailsProduct(${item.id})">
                    <div class="show-deials-product">
                      <span class="icon-add-cart" onclick="addToCart(${item.id})"><i class="fa fa-shopping-bag"></i></span>
                      <span><i class="fa fa-eye" onclick="goToDetailsProduct(${item.id})"></i></span>
                      <span class="icon-love" onclick="favouriteItem(${item.id})"><i class="fa-solid fa-heart"></i></span>
                    </div> 
                  </div>
                <div class="product-datails text-center py-3">
                    <h5>${item.title}</h5>
                    <span>$ ${item.price}</span>
                </div>           
            </div>
        </div>
        `
    })
    innerProduct.innerHTML = dProduct.join("");
}
displayProducts()
//End Render Product




let allItemsCart = JSON.parse(localStorage.getItem('productsCart')) || [];
updateCart();

//Start function Add To Cart
function addToCart(id){
    if(localStorage.getItem('UserName')){
        //Check item already exist in cart 
        if(allItemsCart.some((item)=> item.id === id)){
            changeQty("plus" , id)
        }
        else{
            let addProductCart = products.find((item) => item.id === id)
            allItemsCart.push(addProductCart)
            displayItemCart();
            //Save in localstorage
            localStorage.setItem('productsCart' , JSON.stringify(allItemsCart))
        }
    }
    else
    {
        window.location.href = 'login.html'
    }
}

//Start Update Item Cart
function updateCart(){
    displayItemCart();
    //Save in localstorage
    localStorage.setItem('productsCart' , JSON.stringify(allItemsCart))
}
//ENd Update Item Cart


//Start Render Cart
function displayItemCart(){
    addToCartProducts.innerHTML = '' //clear cart Item
    allItemsCart.forEach((item)=>{
        addToCartProducts.innerHTML += `
            <li>
                <table class="cart-details">
                    <tr>
                        <td class="w-25"><img src="${item.imgUrl}" alt=".." class="w-100" onclick="removeItem(${item.id})"></td>
                        <td>${item.title}</td>
                        <td>$${item.price}</td>
                        <td>
                        <span class="icon-minus" onclick="changeQty('minus' , ${item.id})"><i class="fa-solid fa-minus"></i></span> x${item.qty}
                        <span class="icon-plus" onclick="changeQty('plus' , ${item.id})"><i class="fa-solid fa-plus"></i></span></td>
                    </tr>
                </table>
            </li>  `
    })
    let cartDetails = document.querySelectorAll('.cart-details');
     increaseProduct.innerHTML = cartDetails.length;
}

//Start Render Cart

function changeQty(action , id){
    allItemsCart = allItemsCart.map((item) =>{
        let qty = item.qty;
        if(item.id === id){
            if(action === "minus" && qty > 1){
                qty--;
            }
            else if(action === "plus" && qty < item.instock){
                qty++
            }
        }
        return {...item , qty};
       
    }) 
    updateCart()
}

//Start Remove Item from Cart 
function removeItem(id){
    allItemsCart = allItemsCart.filter((item) => item.id !== id)
    updateCart()
    let cartDetails = document.querySelectorAll('.cart-details');
    increaseProduct.innerHTML = cartDetails.length;
}
//End Remove Item from Cart

const viewProducts = document.querySelector('.view-products');
viewProducts.addEventListener('click' , ()=>{
    window.location.href = 'carts.html'
})


cartIcon.addEventListener('click' , showCartProduct)
function showCartProduct(){
   if(addToCartProducts.innerHTML !== ''){
       if(showCart.style.display == 'block'){
        showCart.style.display = 'none'
       }
       else{
        showCart.style.display = 'block'
       }
   }
   else{
        showCart.style.display = 'none'
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
let iconLove = document.querySelectorAll('.icon-love');
let arrFavoriteItem =  JSON.parse(localStorage.getItem('favouriteeProduct')) || [];

function favouriteItem(id){
    
    if(localStorage.getItem('UserName')){

        let chooseItem = products.find((item) => item.id === id)
        arrFavoriteItem.push(chooseItem);
        
        let unique = arrFavoriteItem.map((item) => item.id)
       .map((element , index  , array) => array.indexOf(element) === index && index)
       .filter((item) => arrFavoriteItem[item])
       .map((item) =>arrFavoriteItem[item]);
        

       products.filter((item) => {
        if(item.id === id) {
           for(let i = 0 ; i < iconLove.length ; i++){
              iconLove[i].addEventListener('click' , ()=>{
                  iconLove[i].style.backgroundColor = 'red'
              })
           }
        }
     })
     localStorage.setItem('favouriteProduct' , JSON.stringify(unique));
       return unique
    }
    else{
        window.location.href = 'login.html'
    }
}




const navbar = document.querySelector('.header-navbar');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


const email = document.querySelector('.subscribe-input')
const btnSubmit = document.querySelector('.submit')


let getEmail = localStorage.getItem('Email')
btnSubmit.addEventListener('click' , Submit )


function Submit(e){
    e.preventDefault()
    if(email.value === ''){
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
}
