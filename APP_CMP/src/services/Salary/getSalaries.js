export default async function getSalaries(id){
    const codeURI = encodeURIComponent(id);
    const salariesUrl = `/api/salarios/${codeURI}`;
    try {
        const response = await fetch(salariesUrl);
        if(!response) throw new Error('Ha habido un error');
        const data = await response.json();
        if (data.error) throw new Error('Error en data');
        return data;
    } catch (error) {
        console.error(error);
    }
}