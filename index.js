
const gohomebutton = document.getElementById('go-home');

  gohomebutton.addEventListener('click', function() {
    window.open( href="index.html");
  })



    let total=0
    let discount=0
    
 function handleclick(target){
   const selecteditems=document.getElementById('selected-items')
    const items=target.childNodes[3].childNodes[3].innerText;
    const count=selecteditems.childElementCount;
    const p=document.createElement('p')
    p.innerHTML=`${count+1}.${items}` 
    selecteditems.appendChild(p)
    const price=target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    total=parseInt(total)+parseInt(price)
   const firsttotal=document.getElementById('ist-price').innerText=total
   const final=document.getElementById('f-price').innerText=total

   const btnApply=document.getElementById('btn-apply')
   btnApply.disabled = total < 200;
   btnApply.addEventListener('click', discountApply);
  
   
  
   upDiscount();
   
 }

 function discountApply() {
  const couponInput = document.getElementById('coupon');
  const ccode = couponInput.value;
  if (ccode === 'SELL200') {
    discount = Math.floor(total * 0.2); 
    upDiscount();
  }
}

function upDiscount() {
  const discountDisplay = document.getElementById('d-price');
  discountDisplay.innerText = discount;

  const finalTotalDisplay = document.getElementById('f-price');
  finalTotalDisplay.innerText = total - discount;
}




 
  

  
  






