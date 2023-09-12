const btnCheck = document.getElementById('check-btn');
const emailInput = document.getElementById('email-input');
const nickList = [
'Jed the Humanoid',
'Tie Wings',
'Phutura',
'Quasar',
'GunBlade',
'SubTerrae',
'Tektron',
'Transrobotics',
'Creon',
'Droid Lover',
'AusProbe',
'Promethean',
'Alienation',
'Plasmatica',
'ONEZERO',
'AeNiGma',
'leonardo-f'
]
const emailTail = '@gmail.com';
const emailList = [];
let emailFound = 0;
let message = '' ;
const emailOut =  document.getElementById('email-output');
const card = document.getElementById('card-show');

for (let i = 0; i < nickList.length; i++){
  emailList[i] = nickList[i] + emailTail;
}

console.log(emailList);

btnCheck.addEventListener ('click' , checkEmail);


function checkEmail() {
  let email = emailInput.value ;
  console.log(email);


  for(i = 0; i < emailList.length && !emailFound; i++){
    if(email === emailList[i]){
      emailFound = 1;
    }
  }

  card.classList.remove("d-none");

  if(emailFound){
    message = email + ' - trovata nell\'elenco';

  }else{
    message = email + ' - NON - trovata nell\'elenco';
  }

  emailOut.innerHTML = message;
}