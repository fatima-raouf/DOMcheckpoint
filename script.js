const items = document.querySelectorAll('.item');
const quantityInputs = document.querySelectorAll('.quantity input');
const deleteButtons = document.querySelectorAll('.delete');
const likeButtons = document.querySelectorAll('.like');
const totalElement = document.querySelector('.total span');

let totalPrice = 30;

quantityInputs.forEach(input => {
  input.addEventListener('change', e => {
    const itemPrice = parseFloat(e.target.parentElement.parentElement.querySelector('.price').innerText.slice(1));
    const newQuantity = parseInt(e.target.value);
    const newSubtotal = itemPrice * newQuantity;
    totalPrice += newSubtotal - (itemPrice * parseInt(e.target.dataset.lastValue));
    totalElement.innerText = totalPrice.toFixed(2);
    e.target.dataset.lastValue = newQuantity;
  });
});

deleteButtons.forEach(button => {
  button.addEventListener('click', e => {
    const item = e.target.parentElement;
    const itemPrice = parseFloat(item.querySelector('.price').innerText.slice(1));
    const itemQuantity = parseInt(item.querySelector('.quantity input').value);
    const itemSubtotal = itemPrice * itemQuantity;
    item.remove();
    totalPrice -= itemSubtotal;
    totalElement.innerText = totalPrice.toFixed(2);
  });
});

likeButtons.forEach(button => {
  button.addEventListener('click', e => {
    const icon = e.target;
    icon.classList.toggle('liked');
  });
});

function toggleLike(button) {
  const heart = button.nextElementSibling;

  if (button.classList.contains('liked')) {
    button.classList.remove('liked');
    heart.classList.remove('red');
  } else {
    button.classList.add('liked');
    heart.classList.add('red');
  }
}
