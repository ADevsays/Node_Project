
export function mostrarMsjSuccess() {
    const msjSuccess = document.querySelector('#msjSuccess');
    msjSuccess.classList.remove('hidden');
    msjSuccess.classList.add('flex');
}

export function ocultarMsjSuccess() {
    const msjSuccess = document.querySelector('#msjSuccess');
    msjSuccess.classList.remove('flex');
    msjSuccess.classList.add('hidden');
}

export function mostrarMsjError() {
    const msjSuccess = document.querySelector('#msjError');
    msjSuccess.classList.remove('hidden');
    msjSuccess.classList.add('flex');
}

export function ocultarMsjError() {
    setTimeout(() => {
        const msjSuccess = document.querySelector('#msjError');
        msjSuccess.classList.remove('flex');
        msjSuccess.classList.add('hidden');            
    }, 2000);
}