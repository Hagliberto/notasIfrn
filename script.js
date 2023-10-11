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
    
    if (isNaN(notaProvaFinal)) {
        alert("Por favor, insira a nota da prova final.");
        return; // Interrompe a execução da função se a nota da prova final não for inserida
    }
    
    var notaFinal = 0;
    if (notasAtividades.length > 0) {
        var mediaAtividades = notasAtividades.reduce(function(acc, curr) {
            return acc + curr;
        }, 0) / notasAtividades.length;
        
        notaFinal = 0.4 * mediaAtividades + 0.6 * notaProvaFinal;
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