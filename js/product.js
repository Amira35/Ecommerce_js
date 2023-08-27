const product = document.querySelector('.product');
let products = JSON.parse(localStorage.getItem('products'))


products.filter((item)=>{
    if( item.id == localStorage.getItem('producId')){
          product.innerHTML = `
          <div class="col-md-5">
              <div class="product-img__main text-center py-1">
                  <img src="${item.imgUrl}" class="w-75">
              </div>
              <div class="product-img__secondary  m-3">
                <img src="${item.imgUrl}" class="w-100">
              </div>
            </div>
          <div class="col-md-4">
            <div class="product-price position-relative">
                <h3>$${item.price}</h3>
                <p>Ex Tax: $${item.price}</p>
            </div>
            <div class="product-available py-3 position-relative">
              <p class="m-0">Brand: Canon</p>
              <p class="m-0">vailability: <span><i class="${item.icon1}"></i></span> ${item.visability}</p>
              <button class="product-size hvr-pulse-grow" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                SIZE CHART 
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="img1/size-chart.jpg" class="w-100">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-quantity py-3 position-relative d-flex justify-content-between">
              <span class="me-2 d-flex align-items-center">QTY</span><input type="text" value="${item.instock}" size="2" class="text-center"> 
              <button class="hvr-pulse-shrink add-cart" >Add to cart</button>
              <span class="icon-love"><i class="fa-solid fa-heart"></i></span>
            </div>
            <div class="product-payment py-3">
              <img src="img1/payment-options.png">
            </div>
          </div>
          <div class="col-md-3">
              <div class="aside">
                  <div class="aside__img">
                    <img src="img1/360x234-3.jpg" class="w-100">
                  </div>
                  <div class="aside__text py-3 position-relative">
                      <p class="m-0">This is a static CMS block edited from theme admin panel.You can insert ant content (text, images, HTML)) here. Lorem ipsum dolor sit amet, consectetur adipiscing elit porta.</p>
                  </div>
                </div>
                <div class="row py-3">
                    <div class="col-12 my-2">
                      <div class="shipping d-flex align-items-center">
                          <span><i class="fa-solid fa-truck"></i></span>
                          <p class="m-0 ms-2">FREE GROUND SHIPPING ON ALL ORDERS OVER $50</p>
                      </div>
                    </div>
                    <div class="col-12 my-2">
                      <div class="shipping d-flex align-items-center">
                        <span><i class="fa-solid fa-dollar-sign"></i></span>
                        <p class="m-0 ms-2">30-DAY MONEY-BACK
                          GUARANTEE FOR EACH PRODUCT</p>
                      </div>
                    </div>
                    <div class="col-12 my-2">
                      <div class="shipping d-flex align-items-center">
                        <span><i class="fa-solid fa-gift"></i></span>
                        <p class="m-0 ms-2">FREE BONUS GIFTS
                          WITH EVERY ORDER</p>
                      </div>
                    </div>
                </div>
              </div>
          `
    }
  
});



const navbar = document.querySelector('.header-navbar');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:4 ,
    margin: 5 , 
    dots: false , 
    loop : true  
  });

  
});

