const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Нажата кнопка ${button.id}`);
  });
});

let tg = window.Telegram.WebApp;
tg.expand();
let btn1 = document.getElementById("button1");
btn1.addEventListener("click", () => {
  let data = "hahahaha";
  tg.sendData(data);
});