function mudarTela(idAtual, idFuturo) {

    var telaAtual = document.getElementById(idAtual);
    var telaFutura = document.getElementById(idFuturo);

    telaAtual.style.display = 'none';
    telaFutura.style.display = 'block';
}

function continuarDificuldade(idAtual, idFuturo) {
    var nome = document.getElementById("nomeJogador");

    // var padrao = /[^a-zà-ú]/gi;

    // var valida_nome = nome.matches(padrao);

    console.log(nome.value);

    if (nome.value != "") {
        mudarTela(idAtual, idFuturo);
    } else {
        alert("Nome incorreto ou nao inserido!");
    }
}