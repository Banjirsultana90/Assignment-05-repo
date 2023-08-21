
//   modals
  const gohomebutton = document.getElementById('go-home');

  gohomebutton.addEventListener('click', function() {
    window.open( href="index.html");
  });
// Add to cart and price section
let total=0
let dtotal=0
 function handleclick(target){
   const selecteditems=document.getElementById('selected-items')
    const items=target.childNodes[3].childNodes[3].innerText;
    const count=selecteditems.childElementCount;
    const p=document.createElement('p')
    p.innerHTML=`${count+1}.${items}` 
    selecteditems.appendChild(p)
    const price=target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    total=parseInt(total)+parseInt(price)
   const firsttoal=document.getElementById('ist-price').innerText=total
   const inputField=document.getElementById('coupon')
   const applybtn=document.getElementById('btn-apply')
   if(firsttoal>=200){
      applybtn.removeAttribute('disabled')
   }else{
      applybtn.setAttribute('disabled','true')
   }
 


   document.getElementById('d-price').innerText=total*20/100
   document.getElementById('f-price').innerText=total-total*20/100

   
 }
//  const applyButton = document.getElementById('btn-apply');
//  const inputField = document.getElementById('coupon');
//  const totalPriceElement = document.getElementById('f-price'); // Assuming this is where you display the total price
//  const discountPriceElement = document.getElementById('d-price'); // Assuming this is where you display the discount price
//  const initialPriceElement = document.getElementById('ist-price'); // Assuming this is where you display the initial price
 
//  inputField.addEventListener('input', function() {
//    const totalPrice = parseFloat(totalPriceElement.innerText);

//    if (inputField.value === 'SELL200' && totalPrice >= 200) {
//      applyButton.removeAttribute('disabled');
//    } else {
//      applyButton.setAttribute('disabled', 'true');
//    }
//  });

//  applyButton.addEventListener('click', function() {
//    const discountPrice = parseFloat((totalPriceElement.innerText * 0.2).toFixed(2)); // 20% discount
//    const initialPrice = parseFloat(totalPriceElement.innerText);

//    discountPriceElement.innerText = discountPrice;
//    initialPriceElement.innerText = initialPrice;

//    const finalPrice = (initialPrice - discountPrice).toFixed(2);
//    totalPriceElement.innerText = finalPrice;
//  });







  


 


