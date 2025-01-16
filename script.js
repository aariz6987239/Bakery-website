// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a simple confirmation message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form fields
    document.getElementById("contact-form").reset();
});