import * as Yup from 'yup';
import Produto from '../models/Produto';

class ProductController {
  async index(req, res) {
    const produtos = await Produto.findAll();

    return res.json(produtos);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      valor: Yup.string().required(),
    });

    console.log(req.body);

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou' });
    }

    const produtoExiste = await Produto.findOne({
      where: { nome: req.body.nome },
    });

    if (produtoExiste) {
      return res.status(400).json({ error: 'Produto já existe' });
    }

    const { nome, valor } = await Produto.create(req.body);

    return res.json({
      nome,
      valor,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      valor: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou' });
    }

    const { nome, valor } = req.body;

    const produto = await Produto.findOne(req.nome);

    if (nome !== produto.nome) {
      const produtoExiste = await Produto.findOne({
        where: { nome: req.body.nome },
      });

      if (produtoExiste) {
        return res.status(400).json({ error: 'Produto já existe' });
      }
    }

    await produto.update(req.body);

    // await Produto.findByPk(req.nome);

    return res.json({
      nome,
      valor,
    });
  }
}

export default new ProductController();
