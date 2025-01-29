const form = document.querySelector('form')
const inputPeso = document.querySelector(".peso");
const inputAltura = document.querySelector(".altura");
const buttonCalcular = document.querySelector(".calcular")
const levelBegin = document.querySelector(".levelBegin");
const levelMedium = document.querySelector(".levelMedium ");
const levelAdvanced = document.querySelector(".levelAdvanced");
const results = document.querySelector(".results");
const metersCubic = 1000;

results.style.display = "none";

const helpUser = document.createElement("p");
helpUser.setAttribute("class", "helpuser");
helpUser.setAttribute("data-feedback", "help-feedback");
helpUser.textContent = "Favor inserir peso e altura!";

const clearInput = () => {
  inputPeso.value = ''
  inputAltura.value = ''

  form.focus()
}
const userHelpElement = () => {
  const existPararaph = document.querySelector('[data-feedback="help-feedback"]');

     if (existPararaph) {
    helpUser.remove()
  } 
  buttonCalcular.insertAdjacentElement("afterend", helpUser);

}

 const valueLevelBegin = {
   isLevel: 0.39,
   previusElement: levelBegin,
 };
 const valueLevelMedium = {
  isLevel: 0.48,
  previusElement: levelMedium
 }
  const valueLevelAdvanced = {
    isLevel: 0.50,
    previusElement: levelAdvanced,
  };

const calculateLevel = (levelUser) =>{
  const { isLevel, previusElement } = levelUser;
  const userPeso = inputPeso.value
  const userAltura = inputAltura.value
  const userInputValue = userPeso.length && userAltura.length;
  
  if(userInputValue){
    const valueLevel =
      Number(userPeso * userAltura) / isLevel / metersCubic;
      previusElement.textContent = `${valueLevel.toFixed(2)} Litros`;
      results.style.display = "block";  
      helpUser.remove();
      return
  }
  userHelpElement()
  buttonCalcular.insertAdjacentElement('afterend', helpUser);
}
const handleClick = () => {
  calculateLevel(valueLevelBegin);
  calculateLevel(valueLevelMedium);
  calculateLevel(valueLevelAdvanced);

  clearInput();
};
buttonCalcular.addEventListener("click", handleClick);


