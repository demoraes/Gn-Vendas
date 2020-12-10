import * as Yup from 'yup';
import Produto from '../models/Produto';

class ProductController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const where = {};

    const draw = 0;

    const total = await Produto.count({ where });

    const data = await Produto.findAll({
      where,
      attributes: ['id', 'nome', 'valor'],
    });

    return res.json({
      draw,
      recordsTotal: total,
      recordsFiltered: Number(page),
      data,
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      valor: Yup.string().required(),
    });

    // console.log(req.body);

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

  async delete(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);

    await Produto.destroy({
      where: {
        id,
      },
    });

    return res.json(produto);
  }
}

export default new ProductController();
