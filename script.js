// Associando eventos de clique aos botões no momento do carregamento da página
document
  .getElementById("botao-calcular-media")
  .addEventListener("click", calcularMedia);
document
  .getElementById("botao-calcular")
  .addEventListener("click", calcularResultado);
document.getElementById("botao-reset").addEventListener("click", reset);

// Quando o DOM é carregado, atribui um evento de clique para os campos de nota
document.addEventListener("DOMContentLoaded", function () {
  var notaInputs = document.getElementsByClassName("campo");
  for (var i = 0; i < notaInputs.length; i++) {
    notaInputs[i].addEventListener("click", function () {
      this.removeAttribute("placeholder");
    });
  }
});

// Função para validar a nota
function validarNota(nota, isNotaFinal) {
  if (isNotaFinal) {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
  } else {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
  }
}

// Função para calcular a média das atividades
function calcularMedia() {
  // Inicializa um array para armazenar as notas das atividades
  var notasAtividades = [];
  // Inicializa uma variável para rastrear se as notas são válidas
  var notasValidas = false;

  // Loop para coletar as notas das atividades
  for (var i = 1; i <= 8; i++) {
    var campoNota = document.getElementById("nota-atividade-" + i);
    var nota = parseFloat(campoNota.value.replace(",", "."));

    // Verifica se a nota é válida chamando a função validarNota
    if (validarNota(nota, false)) {
      campoNota.classList.remove("campo-invalido");
      notasAtividades.push(nota);
      notasValidas = true;
    } else {
      campoNota.classList.add("campo-invalido");
    }
  }

  // Se nenhuma nota válida for inserida, exibe um alerta
  if (!notasValidas) {
    alert("Por favor, insira pelo menos uma nota válida entre 0 e 10.");
    return;
  }

  // Calcula a média das atividades
  var mediaAtividades =
    notasAtividades.reduce(function (acc, curr) {
      return acc + curr;
    }, 0) / notasAtividades.length;

  // Verifica se a média está dentro do intervalo válido (0-10)
  if (mediaAtividades < 0 || mediaAtividades > 10) {
    alert(
      "A média das atividades está fora do intervalo válido (0-10). Por favor, verifique as notas das atividades."
    );
    return;
  }

  // Calcula a porcentagem da média
  var porcentagemMedia = mediaAtividades * 0.4;

  // Atualiza o elemento no DOM com a nota parcial
  var resultadoElement = document.getElementById("parcial");
  resultadoElement.innerHTML = "" + porcentagemMedia.toFixed(2);

  // Exibe as informações no resultado-box
  document.getElementById("media-atividades").textContent =
    mediaAtividades.toFixed(2);

  // Calcula e exibe a quantidade de atividades realizadas
  var quantidadeDeAtividadesRealizadas = notasAtividades.length;
  document.getElementById("atividades-realizadas").textContent =
    quantidadeDeAtividadesRealizadas;

  // Calcula e exibe a nota necessária na prova final para ser aprovado
  var notaProvaFinalNecessaria = (6 - porcentagemMedia) / 0.6;
  if (notaProvaFinalNecessaria < 0) {
    notaProvaFinalNecessaria = 0;
  }

  document.getElementById("nota-prova-final-necessaria").textContent =
    notaProvaFinalNecessaria.toFixed(2);

  // Limita a nota da prova final a 10
  var campoNotaProvaFinal = document.getElementById("nota-prova-final");
  campoNotaProvaFinal.value = Math.min(10, campoNotaProvaFinal.value);
}

// Função para calcular o resultado final
function calcularResultado() {
  // Inicializa um array para armazenar as notas das atividades
  var notasAtividades = [];
  // Inicializa uma variável para rastrear se as notas são válidas
  var notasValidas = false;

  // Loop para coletar as notas das atividades
  for (var i = 1; i <= 8; i++) {
    var campoNota = document.getElementById("nota-atividade-" + i);
    var nota = parseFloat(campoNota.value.replace(",", "."));

    // Verifica se a nota é válida chamando a função validarNota
    if (validarNota(nota, false)) {
      campoNota.classList.remove("campo-invalido");
      notasAtividades.push(nota);
      notasValidas = true;
    } else {
      campoNota.classList.add("campo-invalido");
    }
  }

  // Obtém a nota da prova final
  var campoNotaProvaFinal = document.getElementById("nota-prova-final");
  var notaProvaFinal = parseFloat(campoNotaProvaFinal.value.replace(",", "."));

  // Verifica se a nota da prova final é válida
  if (validarNota(notaProvaFinal, true)) {
    campoNotaProvaFinal.classList.remove("campo-invalido");
    notasValidas = true;
  } else {
    campoNotaProvaFinal.classList.add("campo-invalido");
  }

  // Se nenhuma nota válida for inserida, exibe um alerta
  if (!notasValidas) {
    alert("Por favor, insira pelo menos uma nota válida entre 0 e 10.");
    return;
  }

  // Limita a nota da prova final a 10
  campoNotaProvaFinal.value = Math.min(10, campoNotaProvaFinal.value);

  // Verifica se a nota da prova final foi inserida
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
    // Atualiza o elemento no DOM com a nota final
    resultadoElement.innerHTML = "Sua nota é: " + notaFinalArredondada;

    // Verifica a condição da nota final e atribui uma classe CSS correspondente
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
// Função para redefinir os campos e resultados
function reset() {
  // Obtém todos os campos de entrada no documento
  var inputs = document.getElementsByTagName("input");
  var notasAtividadesVazias = true;
  var notaProvaFinalVazia = true;

  // Loop para redefinir os valores dos campos e limpar as classes de erro
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

  // Exibe um alerta se nenhum valor for inserido para recálculo
  if (notasAtividadesVazias && notaProvaFinalVazia) {
    alert(
      "Caso queira recalcular, insira pelo menos uma nota válida entre 0 e 10."
    );
  }

  // Elementos a serem limpos
  var elementsToClear = [
    "media-atividades",
    "parcial",
    "nota-prova-final-necessaria",
    "final",
    "atividades-realizadas", // Limpar a quantidade de atividades realizadas
  ];

  // Loop para limpar os elementos no DOM
  elementsToClear.forEach(function (elementId) {
    var resultadoElement = document.getElementById(elementId);
    resultadoElement.innerHTML = "";
    resultadoElement.className = "";
  });
}

