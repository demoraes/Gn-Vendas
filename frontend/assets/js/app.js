$(document).ready(function () {

    // adicionando mascaras nos inputs

    // $("#valor").mask("0000000000");
    // $('#nome').mask('SSSSSSSSSS');


    // No codigo abaixo são feitas as validações nos campos obrigatorios
    $("#formulario_addProduto").validate({
        debug: true,
        rules: {
            nome_produto: {
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            valor: {
                minlength: 3,
                maxlength: 10,
            },

        },
        messages: {
            nome_produto: "Somente letras",
            valor: "Somente numeros",
        }

    });
    /// Fim da validação dos formularios ///

    // No codigo abaixo são feitas as validações nos campos obrigatorios
    $("#formulario_comprarProduto").validate({
        debug: true,
        rules: {
            nome: {
                required: true,
                minlength: 3,
                maxlength: 10,
            },
            valor: {
                minlength: 3,
                maxlength: 10,
            },

        },
        messages: {
            nome: "Somente letras",
            valor: "Somente numeros",
        }

    });
    /// Fim da validação dos formularios ///

    // Inserção de dados no banco
    $('#formulario_addProduto').submit(async function (e) {
        e.preventDefault();
        //var formulario = $(this).serialize();
        var nome_produto = $("#nome_produto").val();
        var valor = $("#valor").val();

        const result = await $.ajax({
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json",
            data: JSON.stringify({ 'nome_produto': nome_produto, 'valor': valor }),
            url: "http://localhost:3333/produto",
            success: function (data) {
                var sucesso = data.nome_produto;
                if (sucesso) {
                    $(".addProduto").modal('hide');
                    alert('Produto cadastrado com sucesso');
                }
                $("#table_id_produto").DataTable().ajax.reload();  // insere o dado na tabela do frontend
            },
            error: function (request, status, error) {
                alert('Produto não cadastrado');
            },
        });

        return result;
    });

    $('#formulario_comprarProduto').submit(async function (e) {
        e.preventDefault();
        //var formulario = $(this).serialize();
        var nome_produto = String($("#nome_produto").val());
        var valor = Number($("#valor").val());
        var nome = String($("#nome").val());
        var cpf = String($("#cpf").val());
        var telefone = String($("#telefone").val());

        const result = await $.ajax({
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json",
            data: JSON.stringify({
                "nome": nome,
                "cpf": cpf,
                "telefone": telefone,
                "nome_produto": nome_produto,
                "valor": valor,
            }),
            url: "http://localhost:3333/compra",
            success: function (data) {
                var sucesso = data.nome;
                if (sucesso) {
                    $(".comprarProduto").modal('hide');
                    alert('Comprar realizada com sucesso');
                }
            },
            error: function (request, status, error) {
                alert('Comprar não realizada');
            },
        });

        return result;
    });

    /// Fim da inserção de dados no banco ///



    // lista produtos na tabela
    var table_id_produto = $('#table_id_produto').DataTable({
        ajax: {
            url: 'http://localhost:3333/produto',
            type: 'GET',
            contentType: "application/json",
            dataType: 'json',
            dataSrc: 'data',
        },
        columns: [
            { sortable: false, data: 'nome_produto' },
            { sortable: false, data: 'valor' },
            {
                data: null,
                sortable: false,
                render: function (data) {
                    var comprar = "<button value=\"comprar\" id=\"comprar\" data-toggle=\"modal\" data-target=\"#comprarProduto\" class=\"btn btn-outline-success icone\" value=\"" + data.id + "\" title=\"Comprar\"><i class=\"fas fa-shopping-cart\"></i></button>";
                    var excluir = "<button style=\"margin-left:10px;\" id=\"excluir\" class=\"btn btn-outline-danger icone\" value=\"" + data.id + "\" title=\"Excluir\"><i class=\"far fa-trash-alt\"></i></button>";
                    return comprar + excluir;
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


    $('#table_id_produto tbody').on('click', 'button', function () {
        var opt = $(this).attr("id");
        var obj = $('#table_id_produto').DataTable().row($(this).closest('tr')).data();

        if (opt == 'excluir') {
            $.ajax({
                type: "DELETE",
                datatype: 'JSON',
                url: `http://localhost:3333/produto/${obj.id}`,
                data: { id: obj.id },
                success: function (data) {
                    if (data.error) {
                        alert("Erro");
                    } else {
                        alert("Produto deletado");
                        table_id_produto.ajax.reload();
                    }
                }
            });
        }

        if (opt == 'comprar') {
            $("#formulario_comprarProduto #nome_produto").val(obj.nome_produto);
            $("#formulario_comprarProduto #valor").val(obj.valor);
        }
    });
});