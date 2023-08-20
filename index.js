
  const applyButton = document.getElementById('btn-apply');
  const inputField = document.getElementById('coupon');

  inputField.addEventListener('input', function() {
    if (inputField.value === 'SELL200') {
      applyButton.removeAttribute('disabled');
    } else {
      applyButton.setAttribute('disabled', 'true');
    }
  });

  
  const gohomebutton = document.getElementById('go-home');

  gohomebutton.addEventListener('click', function() {
    window.open( href="index.html");
  });




// const applybutton=document.getElementById('btn-apply');
// const inputField=document.getElementById('coupon').addEventListener('click',function()

// {
   
  
//     if(inputField.value=== 'SELL200'){
//         applybutton.removeAttribute('disabled');

//     }else{
//         applybutton.setAttribute('disabled')

//     }
   

// })


let total=0

 function handleclick(target){
   const selecteditems=document.getElementById('selected-items')
    const items=target.childNodes[3].childNodes[3].innerText;
    const count=selecteditems.childElementCount;
    const p=document.createElement('p')
    p.innerHTML=`${count+1}.${items}` 
    selecteditems.appendChild(p)


    const price=target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    total=parseInt(total)+parseFloat(price)
   //  variable is optional here
   document.getElementById('ist-price').innerText=total
    
 }




  


 


