  <div class="container">
    <div class="row">
      <button class="button" type="button" data-toggle="modal" data-target="#militares">
        <div class="ssb-icon"><i class="fas fa-shopping-cart" aria-hidden="true"></i></div>
        <h2 class="ssb-title">Produtos</h2>
      </button>

      <?php require_once("list_tables/listaProdutos.php"); ?>
      <?php require_once("forms/addProduto.php"); ?>
      <?php require_once("forms/compra.php"); ?>
    </div>
  </div>