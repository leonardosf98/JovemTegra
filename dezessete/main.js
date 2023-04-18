let botao = document.querySelector("#botao__calcular");

botao.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let primeiroNumero = document.querySelector("#primeiro").value;
  let segundoNumero = document.querySelector("#segundo").value;

  let resultado = analisar(primeiroNumero, segundoNumero);

  function analisar(a, b) {
    if (a % b == 0 || b % a == 0) {
      return true;
    } else {
      return false;
    }
  }

  if (resultado == true) {
    resultado__paragrafo.textContent = "São múltiplos";
  } else {
    resultado__paragrafo.textContent = "Não são múltiplos";
  }
  console.log(resultado);
}
