import { personalSchema } from './Schems';
const mongoose = require('mongoose');
const personalRouter = require('../controllers/personals');
//Consiguracion de registro de nuevo personal en Schame

personalSchema.set('toJSON', {
    transform:(_document,returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    }
});

// Asignacion de nombre, registrar el modelo, datos que posee el modelo
const Personal = mongoose.model ('Personal',personalSchema);

module.exports = Personal;