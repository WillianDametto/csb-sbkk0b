function revelarResposta() {
  var resposta = document.querySelector("#revelar");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var trocar = document.querySelector("#cardContainer");
  trocar.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  cardDiv.innerHTML = `
    <div class="card-pergunta centralizar">
      <h1 class="card-titulo">${proximaPergunta.title}?</h1>
    </div>

    <div id="revelar" class="card-resposta blur">
      <p>
        ${proximaPergunta.description}
      </p>
    </div>
  `;
  trocar.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInformacao);
