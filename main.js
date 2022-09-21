$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nomeTarefa').val();
        const novaLinha = $('<li></li>');
        $(`${novaTarefa}`).appendTo(novaLinha);
        $(`
            <li><button class="btn" type="button">${novaTarefa}</button></li>
            `).appendTo(novaLinha);
            $(novaLinha).appendTo('ul');
            $('#nomeTarefa').val('');

            $('ul li button').click(function () {
                $(this).addClass('riscar btn');
            });    
    });
})

