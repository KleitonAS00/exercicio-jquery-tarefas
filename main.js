$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $("#nomeTarefa").val();

        $(`<li>${novaTarefa}</li>`).appendTo("ul");

        $("#nomeTarefa").val("");

        $('ul li').click(function () {
            $(this).addClass('riscar btn');
        });

        /*const novaTarefa = $('#nomeTarefa').val();
        const novaLinha = $('<li></li>');
        $(`${novaTarefa}`).appendTo(novaLinha);
        $(`
            <button class="btn" type="button">${novaTarefa}</button>
            `).appendTo(novaLinha);
            $(novaLinha).appendTo('ul');
            $('#nomeTarefa').val('');*/
    });
})

