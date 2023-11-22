export const findUserID= async (cedula)=>{
    const findUserUrl = `/api/personal?cedula=${cedula}`;
    try {
        const response = await axios.get(findUserUrl);
        if(!response || !response.ok)  throw new Error('Ha habido un error');
        const resultado = response.data;
        return resultado;
    } catch (error) {
        console.error(error);
    }
}