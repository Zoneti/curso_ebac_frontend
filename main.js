const form = document.getElementById('f-comparador');
const valorA = document.getElementById('numA');
const valorB = document.getElementById('numB');
const containerMsgRetorno = document.querySelector('.msg-retorno');

let validNum = false;


function validaNumeros(nA, nB){
    return nB > nA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Valor do Campo B (${valorB.value}) é maior que o do Campo A (${valorA.value})`;
    const mensagemErro = `Valor do Campo B (${valorB.value}) não é maior que o do Campo A (${valorA.value})`;

    validNum = validaNumeros(valorA.value, valorB.value);

    if(validNum){
        containerMsgRetorno.classList.remove('error-message');
        containerMsgRetorno.innerHTML = mensagemSucesso;
        containerMsgRetorno.classList.add('success-message');
    } else {
        containerMsgRetorno.classList.remove('success-message');
        containerMsgRetorno.innerHTML = mensagemErro;
        containerMsgRetorno.classList.add('error-message');
    }
});

form.addEventListener('reset', function(e){
    containerMsgRetorno.classList.remove('error-message');
    containerMsgRetorno.classList.remove('success-message');
});