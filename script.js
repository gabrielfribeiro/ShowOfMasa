function mudarTela(idAtual, idFuturo) {

    var telaAtual = document.getElementById(idAtual);
    var telaFutura = document.getElementById(idFuturo);

    telaAtual.style.display = 'none';
    telaFutura.style.display = 'block';
}

function continuarDificuldade(idAtual, idFuturo) {
    var nome = document.getElementById("nomeJogador");

    if (nome.value != "") {
        mudarTela(idAtual, idFuturo);
    } else {
        alert("Nome incorreto ou nao inserido!");
    }
}

function modoJogo(nivel) {
    switch (nivel) {
        case 1:
            alert('Modo facil');
            break;
        case 2:
            alert('Modo medio');
            break;
        case 3:
            alert('Modo dificil');
            break;
        case 4:
            alert('Modo insano');
            break;
    }
}