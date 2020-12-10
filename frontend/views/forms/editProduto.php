<div class="modal fade" id="editMil" tabindex="-1" role="dialog" aria-labelledby="editMil" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TituloModalCentralizado">Editar dados</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formulario_editMil" class="editMil">
          <div class="card-body">
            <div class="row">
              <input type="hidden" name="id" id="id">
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Companhia</label>
                  <select name="grupo_id_mil_edit" id="grupo_id_mil_edit" class="form-control selectpicker" required="">
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label class="bmd-label-floating">Seção</label>
                  <select name="secoes_id_mil_edit" id="secoes_id_mil_edit" class="form-control selectpicker" required="">
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Função</label>
                  <input type="text" class="form-control" name="funcao_edit" id="funcao_edit">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="bmd-label-floating">Nome Completo</label>
                  <input type="text" class="form-control" name="nome_edit" id="nome_edit" required>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Nome de Guerra</label>
                  <input type="text" class="form-control" name="nome_guerra_edit" id="nome_guerra_edit" required>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Identidade Militar</label>
                  <input type="text" class="form-control" name="idt_edit" id="idt_edit">
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label class="bmd-label-floating">PG</label>
                  <select name="pg_edit" id="pg_edit" class="form-control selectpicker" required="">
                    <option selected>- Selecione -</option>
                    <option value="Cel">Cel</option>
                    <option value="TC">TC</option>
                    <option value="Maj">Maj</option>
                    <option value="Cap">Cap</option>
                    <option value="1 Ten">1° Ten</option>
                    <option value="2º Ten">2° Ten</option>
                    <option value="St">St</option>
                    <option value="1º Sgt">1º Sgt</option>
                    <option value="2° Sgt">2° Sgt</option>
                    <option value="3° Sgt">3º Sgt</option>
                    <option value="Cb">Cb</option>
                    <option value="Sd Ep">Sd Ep</option>
                    <option value="Sd Ev">Sd Ev</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label class="bmd-label-floating">Rua</label>
                  <input type="text" class="form-control" name="rua_edit" id="rua_edit">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="bmd-label-floating">Bairro</label>
                  <input type="text" class="form-control" name="bairro_edit" id="bairro_edit">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Nº</label>
                  <input type="text" class="form-control" name="numero_edit" id="numero_edit">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="bmd-label-floating">Email</label>
                  <input type="email" class="form-control" name="email_edit" id="email_edit">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Celular</label>
                  <input type="text" class="form-control" name="celular_edit" id="celular_edit" required>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="bmd-label-floating">Telefone</label>
                  <input type="text" class="form-control" name="telefone_edit" id="telefone_edit">
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success" id=""><i class="far fa-save" style="font-size: 130%;"></i></button>
      </div>
      </form>
    </div>
  </div>
</div>