$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#nome-tarefa').val();
        const nTask = $(`<li style="display:none">${tarefa}</li>`);
        $(nTask).appendTo('ol');
        $(nTask).fadeIn(1000);
        $('#nome-tarefa').val('');
    })

    $('#lista-tarefas').on('click', 'li', function(e){
        
        var v_css = $(e.target).css('text-decoration');
        
        if( v_css == 'line-through solid rgb(0, 0, 0)'){
            $(e.target).css('text-decoration','none');
        }else{
            $(e.target).css('text-decoration','line-through');
        }
        
    })
})
