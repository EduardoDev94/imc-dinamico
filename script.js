function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', hadleButtonClick);
  
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
  
    inputWeight.addEventListener('input', hadleButtonClick);
    inputHeight.addEventListener('input', hadleButtonClick);
  
    hadleButtonClick();
  }

function calculateIMC (weight,height){
    return weight / (height * height)
}

function hadleButtonClick (){
    var inputWeight = document.querySelector ('#input-weight')
    var inputHeight = document.querySelector ('#input-height')
    var imcResult = document.querySelector('#imc-result')
    
    var weight = Number(inputWeight.value)
    var height = Number(inputHeight.value)
    
    var imc =calculateIMC (weight,height)
    var formattedIMC = imc.toFixed(2).replace('.',',')
    imcResult.textContent = formattedIMC
    
}

var buttonCalculateIMC = document.querySelector ('#button-calculate-imc')

buttonCalculateIMC.addEventListener('click', hadleButtonClick)

start()

