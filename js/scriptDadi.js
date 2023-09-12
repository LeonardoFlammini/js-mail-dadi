let userValue;
let pcValue;
let messageDice;

const faceNumber = 6;
const btnLaunch = document.getElementById('launch-btn');
const userOut = document.getElementById('user-out');
const pcOut = document.getElementById('pc-out');
const msgOut = document.getElementById('out-message');


btnLaunch.addEventListener ('click', diceLaunch);

function diceLaunch () {
  userValue = Math.floor((Math.random() * faceNumber) + 1 );
  pcValue = Math.floor((Math.random() * faceNumber) + 1 );

  if (userValue === pcValue){
    messageDice = "Pareggio"
  }else if(userValue > pcValue){
    messageDice = " Vince l'utente "
  }else{
    messageDice = " Vince il PC "
  }
  
  userOut.innerHTML = userValue;
  pcOut.innerHTML = pcValue;
  msgOut.innerHTML = messageDice;

  console.log(userValue, pcValue);
}