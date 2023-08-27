let favouriteItem = JSON.parse(localStorage.getItem('favouriteProduct'))

const favProduct = document.querySelector('.favourite-display')
function displayProducts(){
  let dFProduct = favouriteItem.map((item) => {
        return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="products my-3 hvr-float-shadow">
                <div class="product-imgess position-relative ">
                    <img src="${item.imgUrl}" alt="" class="w-100" onclick="goToDetailsProduct(${item.id})">
                    <span class="icon-mark" onclick="removeFromFavourite(${item.id})"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                <div class="product-datails text-center py-3">
                    <h5>${item.title}</h5>
                    <span>$ ${item.price}</span>
                </div>           
            </div>
        </div>
        `
    })
    favProduct.innerHTML = dFProduct.join("");
}
displayProducts()

function goToDetailsProduct(id){
    if(localStorage.getItem('UserName')){
        localStorage.setItem('producId' , JSON.stringify(id))
        window.location.href = 'product.html'
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


function removeFromFavourite(id){
    let  getFavItem = localStorage.getItem('favouriteProduct')
    if(getFavItem){
        let items = JSON.parse(getFavItem)
       let itemFav = items.filter((item)=> item.id !== id ) //filter => remove Item
        localStorage.setItem('favouriteProduct', JSON.stringify(itemFav))
        let dFProduct = itemFav.map((item) => {
            return `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="products my-3 hvr-float-shadow">
                    <div class="product-imgess position-relative ">
                        <img src="${item.imgUrl}" alt="" class="w-100" onclick="goToDetailsProduct(${item.id})">
                        <span class="icon-mark" onclick="removeFromFavourite(${item.id})"><i class="fa-solid fa-xmark"></i></span>
                      </div>
                    <div class="product-datails text-center py-3">
                        <h5>${item.title}</h5>
                        <span>$ ${item.price}</span>
                    </div>           
                </div>
            </div>
            `
        })
        favProduct.innerHTML = dFProduct.join("");
    }
}

