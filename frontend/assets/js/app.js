$(document).ready(function () {

    // adicionando mascaras nos inputs

    $("#idt").mask("0000000000-0");
    $("#telefone").mask("(99) 9999-9999");
    $("#celular").mask("(99) 9999-9999");


    // No codigo abaixo são feitas as validações nos campos obrigatorios
    $("#formulario_addMil").validate({
        debug: true,
        highlight: function (element) {
            $(element).css('border-color', '#ff0000');
        },
        errorPlacement: function (error, element) {
            return false;
        },
    });
    /// Fim da validação dos formularios ///



    // Inserção de dados no banco
    $('#formulario_addMil').submit(function (e) {
        e.preventDefault();
        var formulario = $(this).serialize();
       


        $.ajax({
            type: "POST",
            dataType: 'JSON',
            data: JSON.stringify(formulario),
            url: "http://localhost:3333/produto",
            success: function (data) {
                var sucesso = data.sucesso;
                if (sucesso) {
                    $(".addMil").modal('hide');
                    alert('Militar cadastrado com sucesso');
                } else {
                    alert('Militar não cadastrado');
                }
                $("#table_id_mil").DataTable().ajax.reload();  // insere o dado na tabela do frontend
            },
            error: function (request, status, error) {
                alert(request.responseText);
            },
        });
    });

    /// Fim da inserção de dados no banco ///




    // lista militares na tabela de militares
    var tableMil = $('#table_id_mil').DataTable({
        ajax: {
            url: 'http://localhost:3333/produto',
            type: 'GET',
            dataType: 'json',
            dataSrc: 'data',
        },
        columns: [
            { sortable: false, data: 'id' },
            { sortable: false, data: 'nome' },
            { sortable: false, data: 'valor' },
            { sortable: false, data: 'createdAt' },
            { sortable: false, data: 'updatedAt' },
        ],
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            buttons: {
                colvis: 'Ocultar Colunas'
            }
        },
    });
    /* Neste scopo é feito UPDATE nas tabelas */
});