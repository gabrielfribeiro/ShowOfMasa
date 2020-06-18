function mudarTela(idAtual, idFuturo){
    var telaAtual = document.getElementById(idAtual);
    var telaFuturo = document.getElementById(idFuturo);

    telaAtual.style.display = 'none';
    telaFuturo.style.display = 'block';
    
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