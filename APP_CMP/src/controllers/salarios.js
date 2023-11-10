const Salario = require('../models/salario');
const salarioRouter = require('express').Router();

salarioRouter.get('/', async (request, response, next) => {
  try {
    const salarios = await Salario.find();
    if(!salarios) throw new Error('');
    response.json(salarios);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al obtener los salarios' });
  }
});

salarioRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;
  try {
    const salario = await Salario.findById(id);
    if (salario) {
      response.json(salario);
    } else {
      response.status(404).json({ error: 'No se encontró el salario con el ID especificado' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al obtener el salario' });
  }
});




module.exports = salarioRouter;