// Dynamically populate the form when "Buy Now" is clicked
function orderItem(itemName, itemPrice) {
    document.getElementById('item').value = itemName;
    document.getElementById('price').value = `₹${itemPrice}`;
    window.location.href = "#order";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded and ready!");
  });