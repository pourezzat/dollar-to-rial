const _dollarPrice = 32000;
const dollar = document.querySelectorAll('input')[0]
const rial = document.querySelectorAll('input')[1]

function changeToRial(){
  rial.value = dollar.value*_dollarPrice
}
function changeToDollar(){
  dollar.value = rial.value/_dollarPrice
}