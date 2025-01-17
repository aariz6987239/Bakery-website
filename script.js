function detectLocation() {
    alert("Detecting location...");
}

function orderNow(item, price) {
    const name = prompt("Enter your name:");
    const quantity = prompt(`Enter quantity of ${item}:`);
    if (name && quantity) {
        alert(`Order placed for ${quantity} ${item}(s) at ₹${price * quantity}.`);
    } else {
        alert("Order canceled.");
    }
}