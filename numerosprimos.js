

function GetNumber() {
 
var GetText = document.getElementById("numero");
var c = parseInt(GetText.value);
var j = 2;
var numerosPrimos = [];  
for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

for (var prop in numerosPrimos)
{
    document.write("<br>"+ "Numero primo : "+numerosPrimos[prop]+"</br>");
}

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
}


document.addEventListener("keyup",KeyCaputre);
function KeyCaputre(evento){    
console.log(evento);
if ( evento.keyCode ==  13){
    return GetNumber();
}
}

