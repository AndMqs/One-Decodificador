var textoEntrada = document.querySelector("#entrada");
var textoSaida = document.querySelector("#saida");

var input = document.querySelector("#entrada");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      alert("Digite um texto válido!");
      e.preventDefault();
  } 
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-z !.,]';
    if (char.match(pattern)) {
      return true;
  }
}

function criptografar() {

  var texto = textoEntrada.value;
  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes")
    .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
    document.getElementById('saida').innerHTML =  resultCripto 
}

function descriptografar(){

  var texto = textoEntrada.value;

  var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('saida').innerHTML =  resultDescripto 
}

function limpar(){
  const note = document.getElementsByClassName("txts")[0] 
  console.log("antes",note.value)
  note.value = "" 
  console.log("depois",note.value)
}

  var textoCop = document.getElementById('copiar').addEventListener('click', copiar);

  async function copiar(){
    let text = document.querySelector('#saida').value;
    await navigator.clipboard.writeText(text);
    alert("Texto copiado.");
  }


function share() {
    if (navigator.share !== undefined) {
      navigator.share({ title: "", text: "", url: "" });
    }
}

