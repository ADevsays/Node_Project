import { errors } from "../../const/errors";
export default async function postUsers(url, objectData){
    const error = {
        type: '',
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectData)
        });
        if (!response.ok) {
            error.type = errors.RESPONSE_OK;
            return error;
        }
        return response;
    } catch (error) {
        console.log('Error al realizar la solicitud:', error);
        error.type = errors.DONT_USER;
        return error;
    }
}