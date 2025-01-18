// JavaScript for Dynamic Cart System
const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseInt(item.getAttribute('data-price'));

    const existingItem = cart.find(cartItem => cartItem.name === itemName);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
  });
});

// Update Cart
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total;
}

// Checkout Button
document.getElementById('checkout').addEventListener('click', () => {
  alert('Checkout is not integrated yet!');
});