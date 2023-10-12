document
  .getElementById("botao-calcular-media")
  .addEventListener("click", calcularMedia);
document
  .getElementById("botao-calcular")
  .addEventListener("click", calcularResultado);
document.getElementById("botao-reset").addEventListener("click", reset);

document.addEventListener("DOMContentLoaded", function () {
  var notaInputs = document.getElementsByClassName("campo");
  for (var i = 0; i < notaInputs.length; i++) {
    notaInputs[i].addEventListener("click", function () {
      this.removeAttribute("placeholder");
    });
  }
});

function validarNota(nota, isNotaFinal) {
  if (isNotaFinal) {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
  } else {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
  }
}

function calcularMedia() {
  var notasAtividades = [];
  var notasValidas = false;

  for (var i = 1; i <= 8; i++) {
    var campoNota = document.getElementById("nota-atividade-" + i);
    var nota = parseFloat(campoNota.value.replace(",", "."));

    if (validarNota(nota, false)) {
      campoNota.classList.remove("campo-invalido");
      notasAtividades.push(nota);
      notasValidas = true;
    } else {
      campoNota.classList.add("campo-invalido");
    }
  }

  if (!notasValidas) {
    alert("Por favor, insira pelo menos uma nota válida entre 0 e 10.");
    return;
  }

  var mediaAtividades =
    notasAtividades.reduce(function (acc, curr) {
      return acc + curr;
    }, 0) / notasAtividades.length;

  if (mediaAtividades < 0 || mediaAtividades > 10) {
    alert(
      "A média das atividades está fora do intervalo válido (0-10). Por favor, verifique as notas das atividades."
    );
    return;
  }

  var porcentagemMedia = mediaAtividades * 0.4;

  var resultadoElement = document.getElementById("parcial");
  resultadoElement.innerHTML = "Nota Parcial: " + porcentagemMedia.toFixed(2);

  // Exibir as informações no resultado-box
  document.getElementById("media-atividades").textContent =
    mediaAtividades.toFixed(2);

  // Calcular e exibir a quantidade de atividades realizadas
  var quantidadeDeAtividadesRealizadas = notasAtividades.length;
  document.getElementById("atividades-realizadas").textContent =
    quantidadeDeAtividadesRealizadas;

  // Calcular e exibir a nota necessária na prova final para ser aprovado
  var notaProvaFinalNecessaria = (6 - porcentagemMedia) / 0.6;
  if (notaProvaFinalNecessaria < 0) {
    notaProvaFinalNecessaria = 0;
  }

  document.getElementById("nota-prova-final-necessaria").textContent =
    notaProvaFinalNecessaria.toFixed(2);

  // Limitar a nota da prova final a 10
  var campoNotaProvaFinal = document.getElementById("nota-prova-final");
  campoNotaProvaFinal.value = Math.min(10, campoNotaProvaFinal.value);
}

function calcularResultado() {
  var notasAtividades = [];
  var notasValidas = false;

  for (var i = 1; i <= 8; i++) {
    var campoNota = document.getElementById("nota-atividade-" + i);
    var nota = parseFloat(campoNota.value.replace(",", "."));

    if (validarNota(nota, false)) {
      campoNota.classList.remove("campo-invalido");
      notasAtividades.push(nota);
      notasValidas = true;
    } else {
      campoNota.classList.add("campo-invalido");
    }
  }

  var campoNotaProvaFinal = document.getElementById("nota-prova-final");
  var notaProvaFinal = parseFloat(campoNotaProvaFinal.value.replace(",", "."));

  if (validarNota(notaProvaFinal, true)) {
    campoNotaProvaFinal.classList.remove("campo-invalido");
    notasValidas = true;
  } else {
    campoNotaProvaFinal.classList.add("campo-invalido");
  }

  if (!notasValidas) {
    alert("Por favor, insira pelo menos uma nota válida entre 0 e 10.");
    return;
  }

  // Limitar a nota da prova final a 10
  campoNotaProvaFinal.value = Math.min(10, campoNotaProvaFinal.value);

  if (isNaN(notaProvaFinal)) {
    alert("Por favor, insira a nota da prova final.");
    return;
  }

  var notaFinal = 0;
  if (notasAtividades.length > 0) {
    var mediaAtividades =
      notasAtividades.reduce(function (acc, curr) {
        return acc + curr;
      }, 0) / notasAtividades.length;

    notaFinal = 0.4 * mediaAtividades + 0.6 * notaProvaFinal;
  }

  var resultadoElement = document.getElementById("final");

  if (isNaN(notaFinal)) {
    resultadoElement.innerHTML = "Sua nota é: NaN";
  } else {
    var notaFinalResultado = mediaAtividades * 0.4 + notaProvaFinal * 0.6;
    var notaFinalArredondada = Math.round(notaFinalResultado * 100) / 100;

    resultadoElement.innerHTML = "Sua nota é: " + notaFinalArredondada;

    if (notaFinalArredondada >= 6) {
      resultadoElement.className = "aprovado";
      resultadoElement.innerText += "\nParabéns pela Aprovação!";
    } else if (notaFinalArredondada >= 4 && notaFinalArredondada < 6) {
      resultadoElement.className = "recuperacao";
      resultadoElement.innerHTML += "<br>" + "Recuperação";
    } else {
      resultadoElement.className = "reprovado";
      resultadoElement.innerHTML += "<br>" + "Reprovado";
    }
  }
}


function reset() {
  var inputs = document.getElementsByTagName("input");
  var notasAtividadesVazias = true;
  var notaProvaFinalVazia = true;

  for (var i = 0; i < inputs.length; i++) {
    var campo = inputs[i];
    campo.value = "";
    campo.classList.remove("campo-invalido");

    if (campo.id.includes("nota-atividade-")) {
      var nota = parseFloat(campo.value.replace(",", "."));
      if (!isNaN(nota)) {
        notasAtividadesVazias = false;
      }
    } else if (campo.id === "nota-prova-final") {
      var notaProvaFinal = parseFloat(campo.value.replace(",", "."));
      if (!isNaN(notaProvaFinal)) {
        notaProvaFinalVazia = false;
      }
    }
  }

  if (notasAtividadesVazias && notaProvaFinalVazia) {
    alert(
      "Caso queira recalcular, insira pelo menos uma nota válida entre 0 e 10."
    );
  }

  var elementsToClear = [
    "media-atividades",
    "parcial",
    "nota-prova-final-necessaria",
    "final",
    "atividades-realizadas", // Limpar a quantidade de atividades realizadas
  ];

  elementsToClear.forEach(function (elementId) {
    var resultadoElement = document.getElementById(elementId);
    resultadoElement.innerHTML = "";
    resultadoElement.className = "";
  });
}
