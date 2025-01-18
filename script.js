// Cart logic
let cart = [];

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.dataset.item;
    const price = parseInt(button.dataset.price, 10);
    cart.push({ item, price });
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((cartItem, index) => {
    const li = document.createElement('li');
    li.textContent = `${cartItem.item} - ₹${cartItem.price}`;
    cartItems.appendChild(li);
    total += cartItem.price;
  });

  cartTotal.textContent = total;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  window.location.href = `order.html?items=${JSON.stringify(cart)}`;
});