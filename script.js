const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Нажата кнопка ${button.id}`);
  });
});