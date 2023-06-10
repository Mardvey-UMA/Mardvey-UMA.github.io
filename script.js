const prices = document.querySelectorAll('.price');
prices.forEach(price => {
  price.textContent += ' (100 neocoins)';
});
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentNode;
    const itemName = item.querySelector('h2').textContent;
    alert(`Вы успешно купили "${itemName}"!`);
  });
});
