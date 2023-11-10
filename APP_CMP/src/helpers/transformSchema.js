export default function transformSchema(returnObject){
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
    delete returnObject.password;
}