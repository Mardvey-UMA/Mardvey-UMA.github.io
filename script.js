/*
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Нажата кнопка ${button.id}`);
  });
});
*/
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"
let item = "";

let btn1 = document.getElementById("button1");
btn1.addEventListener("click", function(){
  if (tg.MainButton.isVisible){
    tg.MainButton.hide();
  }
  else{
    tg.MainButton.setText("Вы выбрали задачу 1");
    item = "1";
    MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`

usercard.appendChild(p);