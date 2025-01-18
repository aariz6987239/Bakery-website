function redirectToOrder(item) {
  const upiID = "9060409921@ptaxis";
  const prices = {
      "Cupcakes": 50,
      "Cookies": 30,
      "Bread Loaves": 40,
      "Pies": 80,
      "Special Chocolate Cake": 150
  };

  const amount = prices[item];
  const upiLink = `upi://pay?pa=${upiID}&pn=BakeryDelight&am=${amount}&cu=INR`;

  window.location.href = upiLink;
}