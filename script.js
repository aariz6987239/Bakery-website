document.addEventListener("DOMContentLoaded", () => {
    // Handle "Order Now" buttons
    const orderButtons = document.querySelectorAll(".order-now");
    orderButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const itemName = button.dataset.item || "Special Offer";
        alert(`Order placed for: ${itemName}`);
      });
    });
  
    // Dynamically update special offer
    const specialOffer = {
      title: "Special Chocolate Cake",
      description: "A delightful chocolate cake available only today!",
      image: "images/special-chocolate-cake.png",
    };
  
    document.getElementById("offer-title").textContent = specialOffer.title;
    document.getElementById("offer-description").textContent = specialOffer.description;
    document.getElementById("offer-image").src = specialOffer.image;
  });