import Gerencianet from 'gn-api-sdk-node';
import Credentials from '../../credentials';

const clientId = Credentials.client_id;
const clientSecret = Credentials.client_secret;

const options = {
  client_id: clientId,
  client_secret: clientSecret,
  sandbox: true,
};

class ProdutoCompraControlador {
  async store(req, res) {
    const { nome, cpf, telefone, nome_produto, valor } = req.body;

    console.log(req.body);

    const compra = {
      payment: {
        banking_billet: {
          expire_at: '2021-06-12',
          customer: {
            name: nome,
            cpf,
            phone_number: telefone,
          },
        },
      },

      items: [
        {
          name: nome_produto,
          value: valor,
          amount: 2,
        },
      ],
      shippings: [
        {
          name: 'Default Shipping Cost',
          value: 100,
        },
      ],
    };

    const gerencianet = new Gerencianet(options);

    gerencianet.oneStep([], compra).then(console.log).catch(console.log).done();

    const response = await gerencianet.oneStep([], compra);

    return res.json(response);
  }
}

export default new ProdutoCompraControlador();
