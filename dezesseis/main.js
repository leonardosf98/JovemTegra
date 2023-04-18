let botao = document.querySelector("#botao__calcular");

botao.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let primeiraMedida = document.querySelector("#medida__um").value;
  let segundaMedida = document.querySelector("#medida__dois").value;
  let terceiraMedida = document.querySelector("#medida__tres").value;

  let arr = [primeiraMedida, segundaMedida, terceiraMedida];

  let sortedArr = arr.sort(organizar);

  function organizar(a, b) {
    return b - a;
  }

  resultado.textContent = `MAIOR DISTÂNCIA: ${sortedArr[0]}`;
}
