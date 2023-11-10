const modal_1 = document.querySelector('#modal_1');


export const crearNotificacion = (isError) => {
    modal_1.className = 'flex fixed flex-col rounded-lg';

    if (isError){


        modal_1.innerHTML = `
        <img src="/IMG/check-rojo.svg" alt="check" class="w-80">
        <span class="flex justify-center text-xl pb-4 font-semibold text-red-800">Debe llenar todos los campos</span>
        `

    }else{

        modal_1.innerHTML = `
            <img src="/IMG/check-verde.svg" alt="check" class="w-80">
            <span class="flex justify-center text-xl pb-4 font-semibold text-green-900">¡Registro exitoso!</span>
        `

    }

    setTimeout(() => {
        modal_1.innerHTML = ''; // Vaciar
    }, 4000);
};




