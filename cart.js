
document.addEventListener("DOMContentLoaded",displayCart())
function displayCart(){
    let total=0
    let item1=JSON.parse(localStorage.getItem('cart'))
    let cartItem="";
   item1.map((val,index)=>{ 
   id=val.id
           cartItem+=`
           <main>
           <div id='main'>
           <div id='img'> <img id='image'src="${val.images[0]}" alt="${val.name}"/></div>
            <div id="info">${val.title} <br>
            Price : $ ${val.price}<br><br>
            <button id="decrement" data-index="${index}">-</button>
            <span id="value" data-index="${index}">${val.quantity}</span>
            <button id="increment" data-index="${index}">+</button><br>
           <br> <button id='buy'>Buy now</button>
           <button id='remove' onclick="removefromcart(${index})">Remove</button>
          
            </div>
            </div>
           
           </main>
           `   
           total+=val.price*val.quantity
           
   })
  document.getElementById("content").innerHTML=cartItem  
  document.getElementById("total").innerHTML=`   <span id="total-name">Total : </span> $ ${total.toPrecision(6) }
  <br> ` 

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
    
}

function removefromcart(index){
 let cart=JSON.parse(localStorage.getItem('cart'))||[]
 
  cart.splice(index,1)

  localStorage.setItem('cart',JSON.stringify(cart))
  displayCart()
}