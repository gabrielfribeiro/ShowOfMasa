var nivelDificuldade;
var respostaEscolhida;

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
        alert("Nome incorreto ou não inserido!");
    }

    apresentaNome();
}

function apresentaNome() {
    var nomeInserido = document.getElementById("nomeInserido");
    var nome = document.getElementById("nomeJogador");

    nomeInserido.textContent = nome.value;
}

function modoJogo(nivel) {

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

    nivelDificuldade = nivel;
}

function apresentaDificuldade() {
    var boxDificuldadeEscolhida = document.getElementById("boxNivelDificuldade");

    switch (nivelDificuldade) {
        case 1:
            boxDificuldadeEscolhida.textContent = "MODO FÁCIL";
            break;
        case 2:
            boxDificuldadeEscolhida.textContent = "MODO MÉDIO";
            break;
        case 3:
            boxDificuldadeEscolhida.textContent = "MODO DIFÍCIL";
            break;
        case 4:
            boxDificuldadeEscolhida.textContent = "MODO INSANO";
            break;
    }
}

function continuarJogar(idAtual, idFuturo) {

    if (nivelDificuldade) {
        mudarTela(idAtual, idFuturo);
        apresentaDificuldade();
    } else {
        alert("Escolha uma dificuldade!");
    }
}

function terminarPartida(tipoFinalizacao) {

    if (tipoFinalizacao == 1) {
        if (confirm("Deseja realmente terminar a partida?")) {
            location.reload();
        }
    } else {
        location.reload();
    }
}

function setResposta(numRespostaEscolhida) {

    var inputOpcao1 = document.getElementById("opcaoResposta1");
    var inputOpcao2 = document.getElementById("opcaoResposta2");
    var inputOpcao3 = document.getElementById("opcaoResposta3");
    var inputOpcao4 = document.getElementById("opcaoResposta4");
    var inputOpcao5 = document.getElementById("opcaoResposta5");

    switch (numRespostaEscolhida) {
        case 1:
            inputOpcao2.classList.remove("repostaSelecionada");
            inputOpcao3.classList.remove("repostaSelecionada");
            inputOpcao4.classList.remove("repostaSelecionada");
            inputOpcao5.classList.remove("repostaSelecionada");

            inputOpcao1.classList.add("repostaSelecionada");
            break;
        case 2:
            inputOpcao1.classList.remove("repostaSelecionada");
            inputOpcao3.classList.remove("repostaSelecionada");
            inputOpcao4.classList.remove("repostaSelecionada");
            inputOpcao5.classList.remove("repostaSelecionada");


            inputOpcao2.classList.add("repostaSelecionada");
            break;
        case 3:
            inputOpcao1.classList.remove("repostaSelecionada");
            inputOpcao2.classList.remove("repostaSelecionada");
            inputOpcao4.classList.remove("repostaSelecionada");
            inputOpcao5.classList.remove("repostaSelecionada");

            inputOpcao3.classList.add("repostaSelecionada");
            break;
        case 4:
            inputOpcao1.classList.remove("repostaSelecionada");
            inputOpcao2.classList.remove("repostaSelecionada");
            inputOpcao3.classList.remove("repostaSelecionada");
            inputOpcao5.classList.remove("repostaSelecionada");

            inputOpcao4.classList.add("repostaSelecionada");
            break;
        case 5:
            inputOpcao1.classList.remove("repostaSelecionada");
            inputOpcao2.classList.remove("repostaSelecionada");
            inputOpcao3.classList.remove("repostaSelecionada");
            inputOpcao4.classList.remove("repostaSelecionada");

            inputOpcao5.classList.add("repostaSelecionada");
            break;
    }

    respostaEscolhida = numRespostaEscolhida;
}

function avancarPergunta() {
    if (!respostaEscolhida) {
        alert("Selecione uma opção de resposta!");
    } else if (respostaEscolhida == 4) {
        alert("Parabéns você escolheu a resposta CORRETA!\nObrigado por jogar, mais perguntas serão adicionadas em breve...\n\nVocê agora será redirecionado à página inicial.");
        terminarPartida(0);
    } else {
        alert("Mais sorte na próxima, você escolheu a resposta ERRADA!\nObrigado por jogar, mais perguntas serão adicionadas em breve...\n\nVocê agora será redirecionado à página inicial.");
        terminarPartida(0);
    }
}

function escolheAjuda() {
    alert("As opções de ajuda serão implementadas nas próximas versões!");
}