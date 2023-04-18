let botao = document.querySelector("#botao__calcular");

botao.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let inputLargura = document.querySelector("#largura__terreno").value;
  let inputComprimento = document.querySelector("#comprimento__terreno").value;
  let inputValor = document.querySelector("#valor__terreno").value;

  let larguraFixed = parseFloat(inputLargura).toFixed(1);
  let comprimentoFixed = parseFloat(inputComprimento).toFixed(1);
  let valorFixed = parseFloat(inputValor).toFixed(2);

  let resultadoArea = (larguraFixed * comprimentoFixed).toFixed(1);

  let resultadoPreco = (valorFixed * resultadoArea).toFixed(2);

  resultado__area.textContent = `Área do Terreno: ${resultadoArea}m²`;
  resultado__preco.textContent = `Preço do Terreno: R$${resultadoPreco} `;
}