export const personalSchema = new mongoose.Schema({
    nameFull: String,
    cedula: String,
    departamento: String,
    catedra: String,
    Idac: String,  
});

export const planillaSchema = new mongoose.Schema({
    numeroPlanilla : String,
    fecha : String,
    departamento : String,
    nombreApellido : String,
    catedra : String,
    cedula : String,
    tipoDeMovimiento : String,
    dedicacionActual : String,
    dedicacionPropuesta : String,
    sueldo : String,
    unidadEjecutora : String,
    Categoria : String,
    Idac : String
});

export const salarioSchema = new mongoose.Schema({
    tipo:String,
    categoria:String,
    dedicacion:String,
    monto:String   
})

export const userSchema = new mongoose.Schema({
    name:String, 
    email: {
        type: String,
        unique: true,
        required: true},
    password: String,
    verified:{
        type: Boolean,
        default: false
    }
})
