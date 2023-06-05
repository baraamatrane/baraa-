let test= document.getElementById("containr");
let cdn=document.getElementById("cdn");
let imgx=document.querySelector("#imgx");
let totalprice=document.querySelector(".totalprice");
let addcat=document.getElementById("removecat");
let removecat=document.getElementById("addcat");
let head=document.getElementById("head");
let buy=document.getElementById("buy");
let empty=document.getElementById("empty");
let tash=document.getElementById("imgtash");
let contact=document.getElementById('cartconta');
let items1=document.querySelector('#shopy1');
let imgshop=document.querySelector('#imgshop');
let items2=document.querySelector('#shopy2');
let items3=document.querySelector('#shopy3');
let total=0;
let emptyh =document.querySelector("#empty");
let product=[{
    id:1,
    title:'AEROREDY T-SHIRT',
    price:25,
    img:'file:///C:/Users/BARAA/Desktop/soni%20designe/product3.jpg'
},
{
    id:2,
    title:'BLEUTHOTHE',
    price:20,
    img:'file:///C:/Users/BARAA/Desktop/soni%20designe/product2.jpg'
},
{
    id:3,
    title:'BOTTLE',
    price:5,
    img:'file:///C:/Users/BARAA/Desktop/soni%20designe/product4.jpg'
}
]
// if(localStorage.getItem('token')){
    
// }
// else{
//     window.location="sign in.html";
// }
function add(id){
    let choseditemADD= product.find((item) =>  {
        if(item.id === id){
            let quantity=document.querySelector("#quantity"+id);
            quantity.value++
            total = item.price + total;
            document.querySelector(".totalprice").innerHTML = total+"$"}
        }
        
    )}
    
    
function remove(id){
    let choseditemREMOVE= product.find((item) =>{
        if(item.id === id){
            let quantity=document.querySelector("#quantity"+id);
            if(quantity.value > 1){
            quantity.value--
            total = total-item.price ;
           document.querySelector(".totalprice").innerHTML = total+"$"
          
        }
        }
        
    })
    }
    
let arr=[];
function imgsh (id){
    let chosed= product.filter((item) =>{
    if(item.id ===id){
        emptyh.remove()
    contact.innerHTML +=
    `<div class="testcart${item.id}">
        <img class="productimg" src="${item.img}"  alt="" width="100x" height="100x">
     <div id="head${item.id}">
     <h2  style="font-size: 1.1em;" class="product2">${item.title}</h2>
      <span style="font-weight: 500;" class="price2"> ${item.price}£</span>
     <div class="buttn">
             <input style="width: 1.3rem;" id="addcat" onclick="remove(${item.id})"  type="submit" value="-" >
             <input type="text" value="1"  id="quantity${item.id}">
             <input id="removecat" onclick="add(${item.id})"  style="width: 1.3rem;" type="submit" value="+" >
         </div>
     </div>
     <img id="imgtash" onclick="tashremove(${item.id})" src="http://cdn.onlinewebfonts.com/svg/img_398870.png" alt="" width="20px" height="22px">
     </div>`;
     document.querySelector(".pricetotal").innerHTML=`<h3 class="total">Total</h3>
     <h2  class="totalprice">0</h2>` 
     document.querySelector("#buttonjs").innerHTML = `<button id="buy" type="button">Buy Now</button>`;
     let quantity=document.querySelector("#quantity"+id);
     total = (item.price*quantity.value) + total;
     document.querySelector(".totalprice").innerHTML = total+"$"
     localStorage.setItem(item.title,item.id)
    // console.log(arr)
}
     
    } )};    

    // console.log(JSON.parse(localStorage.getItem('pdtid')))
function local(){
    let chosed12= product.filter((item) =>{
        // console.log(arr.length)
        

    if(localStorage.getItem(item.title)==item.id){
        contact.innerHTML +=
    `<div class="testcart${item.id}">
        <img class="productimg" src="${item.img}"  alt="" width="100x" height="100x">
     <div id="head${item.id}">
     <h2  style="font-size: 1.1em;" class="product2">${item.title}</h2>
      <span style="font-weight: 500;" class="price2"> ${item.price}£</span>
     <div class="buttn">
             <input style="width: 1.3rem;" id="addcat" onclick="remove(${item.id})"  type="submit" value="-" >
             <input type="text" value="1"  id="quantity${item.id}">
             <input id="removecat" onclick="add(${item.id})"  style="width: 1.3rem;" type="submit" value="+" >
         </div>
     </div>
     <img id="imgtash" onclick="tashremove(${item.id})" src="http://cdn.onlinewebfonts.com/svg/img_398870.png" alt="" width="20px" height="22px">
     </div>`;
     emptyh.remove();
     document.querySelector(".pricetotal").innerHTML=`<h3 class="total">Total</h3>
     <h2  class="totalprice">0</h2>` 
     document.querySelector("#buttonjs").innerHTML = `<button id="buy" type="button">Buy Now</button>`;
    //  let quantity=document.querySelector("#quantity"+id);
     total = item.price + total;
     document.querySelector(".totalprice").innerHTML = total+"$"
        }


}


)}
local();
function tashremove(id){
    let choseditem= product.filter((item) => {
        if(item.id === id){
            let testcart =document.querySelector(".testcart"+id);
            testcart.remove();
            let quantity=document.querySelector("#quantity"+id); 
            total = total - item.price ;
            document.querySelector(".totalprice").innerHTML = total+"$"
            if(localStorage.getItem(item.title)==item.id){
                localStorage.removeItem(item.title)
            }
                

  }
})
             
        } 

        


cdn.onclick=function(){
    test.style.display='block';
}
imgx.onclick=function(){
    test.style.display='none';
}

