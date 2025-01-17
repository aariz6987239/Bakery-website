function detectLocation() {
    alert("Location detection feature coming soon!");
  }
  
  function orderItem(itemName, price) {
    const userName = prompt("Enter your name:");
    const userEmail = prompt("Enter your email:");
    const quantity = prompt(`Enter quantity for ${itemName}:`);
    
    if (userName && userEmail && quantity) {
      alert(`Order placed successfully!\n\nItem: ${itemName}\nQuantity: ${quantity}\nTotal: ₹${price * quantity}\n\nThank you for ordering with Bakery Delight!`);
      // In a real implementation, send order data to a server here
    } else {
      alert("Order cancelled. Please provide all details.");
    }
  }