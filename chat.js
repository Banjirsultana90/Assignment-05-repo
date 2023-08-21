
  const applyButton = document.getElementById('btn-apply');
  const inputField = document.getElementById('coupon');
  const totalPriceElement = document.getElementById('f-price'); // Assuming this is where you display the total price
  const discountPriceElement = document.getElementById('d-price'); // Assuming this is where you display the discount price
  const initialPriceElement = document.getElementById('ist-price'); // Assuming this is where you display the initial price
  
  inputField.addEventListener('input', function() {
    const totalPrice = parseFloat(totalPriceElement.innerText);

    if (inputField.value === 'SELL200' && totalPrice >= 200) {
      applyButton.removeAttribute('disabled');
    } else {
      applyButton.setAttribute('disabled', 'true');
    }
  });

  applyButton.addEventListener('click', function() {
    const discountPrice = parseFloat((totalPriceElement.innerText * 0.2).toFixed(2)); // 20% discount
    const initialPrice = parseFloat(totalPriceElement.innerText);

    discountPriceElement.innerText = discountPrice;
    initialPriceElement.innerText = initialPrice;

    const finalPrice = (initialPrice - discountPrice).toFixed(2);
    totalPriceElement.innerText = finalPrice;
  });

