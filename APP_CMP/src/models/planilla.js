import { planillaSchema } from './Schems';
const mongoose = require('mongoose');
// Registro nueva planilla

planillaSchema.set('toJSON', {
    transform:(_document,returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    } 
});

//Nombre para el modelo de datos
const Planilla = mongoose.model ('Planillas',planillaSchema);

module.exports = Planilla;