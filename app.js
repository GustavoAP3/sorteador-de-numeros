
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let num;

    for(let i = 0; i < quantidade; i++){
        num = gerarNumeroAleatorio(de, ate);
        while(sorteados.includes(num)){
            num = gerarNumeroAleatorio(de, ate);
        }
        sorteados.push(num);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    // .textContent
}

function gerarNumeroAleatorio(min, max){
    // return parseInt(Math.random() * (max * min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}