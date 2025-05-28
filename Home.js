let Products=[];

function fetchData(){
    fetch('https://dummyjson.com/products').then((res)=>{
   return res.json()
   
    }).then((res)=>{
        Products=res.products;       
        localStorage.setItem("prod",JSON.stringify(Products))
        productdetails(Products)
    })
}
function productdetails(products){
let product="";
products.map((val)=>{
    product+=`
    <main  id="image-box">
  
    <img id='image' src="${val.images[0]}"/>
    <div id='rate' >
    <div>Rating: ${val.rating}
     <span>★</span></div>
    </div>
    <h2 id='name'>${val.title}</h2>
    <h3 id='price'>Price: $ ${val.price}</h3>
    
    <button id='btn' onClick="viewMore(${val.id})">View More</button>
<br><br>
   
    </main>`
})
document.getElementById("container").innerHTML=product

}

function viewMore(id){
    localStorage.setItem('pid',id);
    window.location.href='./viewMore.html'

}


function searchItem(event){   
let searchTerm=event.target.value.toLowerCase();
let fp=Products.filter((Products)=>
Products.title.toLowerCase().includes(searchTerm)||
Products.category.toLowerCase().includes(searchTerm)
)
productdetails(fp)
}
document.getElementById('search').addEventListener('input',searchItem)
fetchData()
