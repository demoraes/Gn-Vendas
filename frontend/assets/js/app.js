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
    $('#formulario_addMil').submit(async function (e) {
        e.preventDefault();
        //var formulario = $(this).serialize();
        var nome = $("#nome").val();
        var valor = $("#valor").val();

        const result = await $.ajax({
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json",
            data: JSON.stringify({ 'nome': nome, 'valor': valor }),
            url: "http://localhost:3333/produto",
            success: function (data) {
                var sucesso = data.nome;
                if (sucesso) {
                    $(".addProduto").modal('hide');
                    alert('Produto cadastrado com sucesso');
                } else {
                    alert('Produto não cadastrado');
                }
                $("#table_id_mil").DataTable().ajax.reload();  // insere o dado na tabela do frontend
            },
            error: function (request, status, error) {
                alert(request.responseText);
            },
        });

        return result;
    });

    /// Fim da inserção de dados no banco ///




    // lista produtos na tabela
    var table_id_mil = $('#table_id_mil').DataTable({
        ajax: {
            url: 'http://localhost:3333/produto',
            type: 'GET',
            contentType: "application/json",
            dataType: 'json',
            dataSrc: 'data',
        },
        columns: [
            { sortable: false, data: 'nome' },
            { sortable: false, data: 'valor' },
            {
                data: null,
                sortable: false,
                render: function (data) {
                    var excluir = "<button style=\"margin-left:10px;\" id=\"excluir\" class=\"btn btn-outline-danger icone\" value=\"" + data.id + "\" title=\"Excluir\"><i class=\"far fa-trash-alt\"></i></button>";
                    var comprar = "<button value=\"comprar\" style=\"margin-left:10px;\" id=\"comprar\" class=\"btn btn-outline-success icone\" value=\"" + data.id + "\" title=\"Comprar\"><i class=\"fas fa-shopping-cart\"></i></button>";
                    return excluir + comprar;
                }
            }
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
        },
    });
    /* Neste scopo é feito UPDATE nas tabelas */




    $('#table_id_mil tbody').on('click', 'button', function () {
        var opt = $(this).attr("id");
        var obj = $('#table_id_mil').DataTable().row($(this).closest('tr')).data();

        if (opt == 'excluir') {
            $.ajax({
                type: "DELETE",
                datatype: 'html',
                url: `http://localhost:3333/produto/${obj.id}`,
                data: { id: obj.id },
                success: function (data) {
                    if (data.error) {
                        alert("Erro");
                    } else {
                        alert("Produto deletado");
                        table_id_mil.ajax.reload();
                    }
                }
            });
        }
    });

    // $('#formulario_editProduto').submit(async function (e) {
    //     e.preventDefault();
    //     var nome = $("#nome").val();
    //     var valor = $("#valor").val();

    //     const result = await $.ajax({
    //         type: "POST",
    //         dataType: 'JSON',
    //         contentType: "application/json",
    //         data: JSON.stringify({ 'nome': nome, 'valor': valor }),
    //         url: "http://localhost:3333/produto",
    //         success: function (data) {
    //             var sucesso = data.nome;
    //             if (sucesso) {
    //                 $(".editProduto").modal('hide');
    //                 alert('Produto cadastrado com sucesso');
    //             } else {
    //                 alert('Produto não cadastrado');
    //             }
    //             $("#table_id_mil").DataTable().ajax.reload();  // insere o dado na tabela do frontend
    //         },
    //         error: function (request, status, error) {
    //             alert(request.responseText);
    //         },
    //     });

    //     return result;
    // });
});