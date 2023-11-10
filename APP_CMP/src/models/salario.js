import { salarioSchema } from './Schems';
import transformSchema from '../helpers/transformSchema';
const mongoose = require('mongoose');

salarioSchema.set('toJSON',{
    //document es el Schema
    //returnObject es lo que estoy solicitando
    transform: (_document, returnObject)=> transformSchema(returnObject)
})

const Salario = mongoose.model('Salario', salarioSchema);
module.exports = Salario;
