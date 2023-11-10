import { userSchema } from './Schems';
import transformSchema from '../helpers/transformSchema';
//1 Conectar a mongodb, crear la dependencia
const mongoose = require('mongoose');

//3 configurar la respuesta del usuario en el schema
userSchema.set('toJSON',{
    //document es el Schema
    //returnObject es lo que estoy solicitando
    transform: (_document, returnObject)=> transformSchema(returnObject)
})

//4 dar un nombre, registrar el modelo de datos
const User = mongoose.model('User', userSchema);
module.exports = User;