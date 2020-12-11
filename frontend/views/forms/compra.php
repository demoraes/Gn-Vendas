<div class="modal fade comprarProduto" tabindex="-1" role="dialog" id="comprarProduto">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Comprar Produto<i class="fas fa-users-cog" style="padding-left: 10px;"></i></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formulario_comprarProduto">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Produto</label>
                  <input type="text" class="form-control" name="nome_produto" id="nome_produto" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Valor</label>
                  <input type="text" class="form-control" name="valor" id="valor" required>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="bmd-label-floating">Nome Completo</label>
                  <input type="text" class="form-control" name="nome" id="nome" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">CPF</label>
                  <input type="text" class="form-control" name="cpf" id="cpf" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Telefone</label>
                  <input type="text" class="form-control" name="telefone" id="telefone" required>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success" id="" title="Comprar"><i class="fas fa-shopping-cart" style="font-size: 130%;"></i></button>
      </div>
      </form>
    </div>
  </div>
</div>