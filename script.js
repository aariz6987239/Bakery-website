document.addEventListener('DOMContentLoaded', () => {
  // Detect location functionality
  window.detectLocation = function () {
    alert("Detect location functionality is not implemented yet.");
  };

  // Order Now functionality
  const orderNowButtons = document.querySelectorAll('.order-now-btn');

  orderNowButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const item = event.target.getAttribute('data-item');
      const price = event.target.getAttribute('data-price');

      // Redirect to payment page
      alert(`Ordering ${item} for ₹${price}. Proceeding to payment.`);
    });
  });
});