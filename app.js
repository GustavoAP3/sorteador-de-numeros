
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if(de > ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert('A quantidade deve ser um número menor do que o intervalo dos números!');
        return;
    }
    
    let sorteados = [];
    let num;

    for(let i = 0; i < quantidade; i++){
        num = gerarNumeroAleatorio(de, ate);
        while(sorteados.includes(num)){
            num = gerarNumeroAleatorio(de, ate);
        }
        sorteados.push(num);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    // .textContent
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max){
    // return parseInt(Math.random() * (max * min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}