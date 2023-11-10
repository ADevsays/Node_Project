const Planilla = require ('../models/planilla');
const planillasRouter = require('express').Router();

planillasRouter.post('/', async (request,response) => {
  const {numeroPlanilla,fecha,departamento,nombreApellido,catedra,
        cedula,tipoDeMovimiento,dedicacionActual,dedicacionPropuesta,
        sueldo,unidadEjecutora,Categoria,Idac} = request.body;
  // Verificacion asignar valores predeterminados a los campos vacíos
  const campos = {
    numeroPlanilla: numeroPlanilla || '',
    fecha: fecha || '',
    departamento: departamento || '',
    nombreApellido: nombreApellido || '',
    catedra: catedra || '',
    cedula: cedula || '',
    tipoDeMovimiento: tipoDeMovimiento || '',
    dedicacionActual: dedicacionActual || '',
    dedicacionPropuesta: dedicacionPropuesta || '',
    sueldo: sueldo || '',
    unidadEjecutora: unidadEjecutora || '',
    Categoria: Categoria || '',
    Idac: Idac || '',
  };

  try {
    const newPlanilla = new Planilla(campos);
    const planilla = await newPlanilla.save();
    if(!planilla) throw new Error('La planilla no se guardó correctamente');
    console.log('Planilla guardada en MongoDB', newPlanilla);
    response.status(201).json({ message: 'Datos guardados en MongoDB' }); 
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Error al guardar los datos en MongoDB' });
  }
});

planillasRouter.get('/', async (request, response) => {
  try {
    const planillas = await Planilla.find();
    if(!planillas) throw new Error('La planilla no se encontró');
    if (!(planillas.length > 0)) {
      response.status(404).json({ error: 'No se encontraron planillas' });
      return;
    } 
    response.status(200).json(planillas);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al buscar las planillas en la base de datos' });
  }
});



module.exports = planillasRouter;