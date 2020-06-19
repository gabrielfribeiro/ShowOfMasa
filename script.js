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

    apresentaNome();
}

function apresentaNome() {
    var nomeInserido = document.getElementById("nomeInserido");
    var nome = document.getElementById("nomeJogador");

    nomeInserido.textContent = nome.value;
}

var nivelDificuldade;

function modoJogo(nivel) {


    nivelDificuldade = nivel;

    var dfFacil = document.getElementById("dfFacil");
    var dfMedio = document.getElementById("dfMedio");
    var dfDificil = document.getElementById("dfDificil");
    var dfInsano = document.getElementById("dfInsano");

    switch (nivel) {
        case 1:
            dfMedio.classList.remove("dificuldadeSelecionada");
            dfDificil.classList.remove("dificuldadeSelecionada");
            dfInsano.classList.remove("dificuldadeSelecionada");

            dfFacil.classList.add("dificuldadeSelecionada");
            break;
        case 2:
            dfFacil.classList.remove("dificuldadeSelecionada");
            dfDificil.classList.remove("dificuldadeSelecionada");
            dfInsano.classList.remove("dificuldadeSelecionada");

            dfMedio.classList.add("dificuldadeSelecionada");
            break;
        case 3:
            dfFacil.classList.remove("dificuldadeSelecionada");
            dfMedio.classList.remove("dificuldadeSelecionada");
            dfInsano.classList.remove("dificuldadeSelecionada");

            dfDificil.classList.add("dificuldadeSelecionada");
            break;
        case 4:
            dfFacil.classList.remove("dificuldadeSelecionada");
            dfMedio.classList.remove("dificuldadeSelecionada");
            dfDificil.classList.remove("dificuldadeSelecionada");

            dfInsano.classList.add("dificuldadeSelecionada");
            break;
    }
}

function continuarJogar(idAtual, idFuturo) {

    if (nivelDificuldade) {
        mudarTela(idAtual, idFuturo);
    } else {
        alert('Escolha uma dificuldade!');
    }
}