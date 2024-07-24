
const increaseButtons = document.querySelectorAll('.fa-plus-circle');
const decreaseButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');


function updateTotal() {
  const totalElement = document.querySelector('.total');
  let totalPrice = 0;

 
  document.querySelectorAll('.card').forEach(card => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
    const quantity = parseInt(card.querySelector('.quantity').textContent.trim());
    totalPrice += unitPrice * quantity;
  });

  totalElement.textContent = `${totalPrice} $`;
}

function handleIncrease(event) {
  const quantitySpan = event.target.nextElementSibling;
  let quantity = parseInt(quantitySpan.textContent.trim());
  quantitySpan.textContent = quantity + 1;
  updateTotal();
}


function handleDecrease(event) {
  const quantitySpan = event.target.previousElementSibling;
  let quantity = parseInt(quantitySpan.textContent.trim());
  if (quantity > 0) {
    quantitySpan.textContent = quantity - 1;
    updateTotal();
  }
}


function handleDelete(event) {
  const card = event.target.closest('.card');
  card.remove();
  updateTotal();
}


increaseButtons.forEach(button => {
  button.addEventListener('click', handleIncrease);
});
decreaseButtons.forEach(button => {
  button.addEventListener('click', handleDecrease);
});


deleteButtons.forEach(button => {
  button.addEventListener('click', handleDelete);
});

document.addEventListener('DOMContentLoaded', updateTotal);
