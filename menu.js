function ligarMicroondas(prato, tempo) {
    if (prato == 'Pipoca') {
        verificarTempo(10, tempo);
    } else if (prato == 'Macarrão') {
        verificarTempo(8, tempo);
    } else if (prato == 'Carne') {
        verificarTempo(15, tempo);
    } else if (prato == 'Feijão') {
        verificarTempo(12, tempo);
    } else if (prato == 'Brigadeiro') {
        verificarTempo(8, tempo);
    } else {
        console.log('Prato inexistente');
    }
}

function verificarTempo(tempo_padrao, tempo_definido) {
    if (tempo_definido > tempo_padrao * 3) {
        console.log('kabumm');
    } else if (tempo_definido > tempo_padrao * 2) {
        console.log('A comida queimou');
    } else if (tempo_definido < tempo_padrao) {
        console.log('Tempo insuficiente');
    } else {
        console.log('Prato pronto');
    }
}

ligarMicroondas("Feijão", 12)
