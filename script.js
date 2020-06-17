function mudarTela(idAtual, idFuturo, condicao){
    var telaAtual = document.getElementById(idAtual);
    var telaFuturo = document.getElementById(idFuturo);

    if(condicao == 1){
        telaAtual.style.display = 'none';
        telaFuturo.style.display = 'block';
    }else{
        telaAtual.style.display = 'block';
        telaFuturo.style.display = 'none';
    }
}
function modoJogo(nivel){
    switch(nivel){
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