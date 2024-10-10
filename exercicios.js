
//-----------------------------------
function soma(a, b) {
  return a + b;
} 
console.log(soma (6, 10));

//-----------------------------------
function multiplicacao(a, b) {
  return a * b;
}
console.log(multiplicacao(5, 2));

//-----------------------------------
function divisao(a, b) {
  return a / b;
}
console.log(divisao(10, 5));

//-----------------------------------
function subtracao(a, b) {
  return a - b;
}
console.log(subtracao(50, 60));

//-----------------------------------
function modulo(a, b) {
  return a % b;
}
console.log(modulo(30,15));

//-----------------------------------
function max(a, b) {
  if (a > b){
    return a;
  } else {
    return b;
  } 
}
console.log(max(10,20));

//-----------------------------------
function strConcat(a, b) {
  return a + " " + b;
}
console.log(strConcat("olá", "mundo."));

//-----------------------------------
function retornaNumero(numero) {
  if (numero > 10){
    return console.log("O número é maior que 10");
  } else if (numero == 10){
    return console.log("Igual à 10.");
  } else {
    return console.log("Menor que 10.");
  } 
} 
  console.log(retornaNumero(5));

//-----------------------------------
function ehPositivo(num) {
  if (num > 0){
    return true;
  } else{
    return false;
  }
}
console.log(ehPositivo(10));

//-----------------------------------
module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
