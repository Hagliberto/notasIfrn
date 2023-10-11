document.getElementById("botao-calcular").addEventListener("click", calcularResultado);
document.getElementById("botao-reset").addEventListener("click", reset);

function calcularResultado() {
    var notasAtividades = [];
    for (var i = 1; i <= 8; i++) {
        var nota = parseFloat(document.getElementById("nota-atividade-" + i).value);
        if (!isNaN(nota)) {
            notasAtividades.push(nota);
        }
    }
    
    var notaProvaFinal = parseFloat(document.getElementById("nota-prova-final").value);
    
    var notaFinal = 0;
    if (notasAtividades.length > 0 && !isNaN(notaProvaFinal)) {
        var mediaAtividades = notasAtividades.reduce(function(acc, curr) {
            return acc + curr;
        }, 0) / notasAtividades.length;
        
        notaFinal = 0.4 * mediaAtividades + 0.6 * notaProvaFinal;
    } else if (notasAtividades.length > 0) {
        notaFinal = notasAtividades.reduce(function(acc, curr) {
            return acc + curr;
        }, 0) / notasAtividades.length;
    } else if (!isNaN(notaProvaFinal)) {
        notaFinal = notaProvaFinal;
    }
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Nota Final: " + notaFinal.toFixed(2);
    
    if (notaFinal >= 6) {
        resultadoElement.className = "aprovado";
        resultadoElement.innerHTML += " - Aprovado";
    } else if (notaFinal >= 4) {
        resultadoElement.className = "recuperacao";
        resultadoElement.innerHTML += " - Recuperação";
    } else {
        resultadoElement.className = "reprovado";
        resultadoElement.innerHTML += " - Reprovado";
    }
}

function reset() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    resultadoElement.className = "";
}