var products=JSON.parse(localStorage.getItem('prod'))
var item=JSON.parse(localStorage.getItem('pid')) 
console.log(item);

document.addEventListener('DOMContentLoaded',()=>{
    let newProduct=""
var prod;
    products.map((val,index)=>{
    
    if(val.id==item){
      prod=(val.id);
        newProduct+=`
        <main>
       <div id='img-det'>
       <div id='img'> <img id='image'src="${val.images[0]}"/></div>
       <div id='text'> <span id='name'><strong>${val.title}</strong> <br>Price: $${val.price} 
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating :${val.rating} ${rate(val.rating)}</span>
       <br>
       Category : ${val.category} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Brand: ${val.brand}<br>
  Tags : ${val.tags} <br>
 
    Return Policy : ${val.returnPolicy}<br>
            Minimum Order Quantity :${val.minimunOrderQuantity}<br>

       Warranty Information :${val.warrantyInformation} <br>
           Shipping Information :${val.shippingInformation}<br>
           Availability Status :${val.availabilityStatus}<br>
            <button id="decrement" data-index="${index}">-</button>
            <span id="value" data-index="${index}">1</span>
            <button id="increment" data-index="${index}">+</button><br>
    <button id='btn' onclick="window.location.href='./Cart.html'" >Buy Now ></button>     
    <button id='cart' >+ Add to cart</button>
           </div>
       </div>
        </main>`
        }
    })
document.getElementById('product').innerHTML=newProduct

document.querySelectorAll('#increment').forEach(button => {
  button.addEventListener('click', function() {
    let index = this.getAttribute('data-index');
    let valueElement = document.querySelector(`#value[data-index="${index}"]`);
    valueElement.textContent = parseInt(valueElement.textContent) + 1;
  });
});

document.querySelectorAll('#decrement').forEach(button => {
  button.addEventListener('click', function() {
      let index = this.getAttribute('data-index');
      let valueElement = document.querySelector(`#value[data-index="${index}"]`);
      if (valueElement) {
        let currentValue = parseInt(valueElement.textContent, 10) || 0;
        if (currentValue > 0) {
          valueElement.textContent = currentValue - 1;
        }
      } else {
        console.error(`Element with index ${index} not found for decrement.`);
      }
    });
       
  });


  document.querySelectorAll('#cart').forEach(button => {
    button.addEventListener('click', function() {
      console.log(products[item]);
        let quantity =document.getElementById('value').textContent
   
        if (quantity > 0) {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart=Array.from(cart)
          cart.push({ ...products[--item], quantity: quantity });
          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`Order added in cart`);
        } else {
          alert('Please select a quantity before ordering.');
        }
    });
  });

})
console.log(localStorage.getItem('cart'));


function rate(rat){
    var i=1;
    rating=rat;
    var ot=""
    while(i<=rating ){
        ot+="🌟"
        i++;  
    }
    while(rating<5 ){ 
        rating++;
        ot+="⭐"  
    }
    return ot;
}