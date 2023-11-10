export function mostrarSpinner() {
    const spinner = document.querySelector('#spinner');
    spinner.classList.remove('hidden');
    spinner.classList.add('flex');
}

export function ocultarSpinner() {
  const spinner = document.querySelector('#spinner');
  spinner.classList.remove('flex');
  spinner.classList.add('hidden');
}