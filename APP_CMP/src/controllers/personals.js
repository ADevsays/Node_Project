const Personal = require('../models/personal');
const personalRouter = require('express').Router();

personalRouter.post('/', async (request, response) => {
  const { nameFull, cedula, departamento, catedra, Idac } = request.body;
  const keysArray = Object.keys(request.body);
  const checkForm = keysArray.some(element => !element);
  //console.log(nameFull,cedula,departamento,catedra,Idac);

  if (checkForm) {
    return response.status(400).json({ error: 'Campos vacíos' });
  }

  try {
    const newPersonal = new Personal({ nameFull, cedula, departamento, catedra, Idac });
    const user = await newPersonal.save();
    if (!user) throw new Error('La petición de guardar el user falló');
    //console.log('Datos guardados en MongoDB:', newUser);
    response.status(201).json({ message: 'Datos guardados en MongoDB' });

  } catch (error) {
    console.error(error)
  }
})

const getIfuserIDexists = async (response) => {
  try {
    const resultado = await Personal.findOne({ cedula: cedula });
    if (!resultado) throw new Error('La petición de guardar el user falló');
    response.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al obtener el resultado' });
  }
}

const getUserDontExists = async (response) => {
  try {
    const personal = await Personal.find();
    const personalReducido = personal.map((p) => ({
      nameFull: p.nameFull,
      cedula: p.cedula,
      departamento: p.departamento,
      Idac: p.Idac,
    }));
    response.status(200).json(personalReducido);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al obtener los datos del personal' });
  }
};

personalRouter.get('/', async (request, response, _next) => {
  const cedula = request.query.cedula;
  if (!cedula){
    getUserDontExists(response);
    return;
  } 
  getIfuserIDexists(response);
});

module.exports = personalRouter;