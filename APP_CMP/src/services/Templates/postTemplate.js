export default async function postNewTemplate(newTemplate) {
    const postTemplateUrl = '/api/planillas';
    try {
        const response = await axios.post(postTemplateUrl, newTemplate);
        if (!response || !response.ok) throw new Error('Ha habido un error');
        return response;
    } catch (error) {
        console.error(error);
    }
}