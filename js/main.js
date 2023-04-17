$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insire seu nome',
            cpf: 'Por favor, insira o seu CPF',
            cep: 'Por favor, insira o seu CEP',
            telefone: 'Por favor, insira o seu Telefone',
            email: 'Por favor, insira o seu E-mail'
        },
        submitHandler: function(form){
            $(form).submit();
        },
        invalidHandler: function (evento, validador) {
            let camposIncoretos = validador.numberOfInvalids();

            if(camposIncoretos){
                alert(`Existem ${camposIncoretos} campos incorretos`);
            }
        }
    });

})