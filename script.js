// Form Validation: Ensure a payment method is selected
document.querySelector('form').addEventListener('submit', function (event) {
  const upiProof = document.getElementById('upi-proof').files.length > 0;
  const bankProof = document.getElementById('bank-proof').files.length > 0;
  const codChecked = document.querySelector('input[name="cod"]:checked') !== null;

  if (!upiProof && !bankProof && !codChecked) {
    event.preventDefault();
    alert('Please select a payment method!');
  }
});