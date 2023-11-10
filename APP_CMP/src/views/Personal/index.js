import { opcionesCatedra } from "../../const/OptionsCatedra";
import { ocultarSpinner, mostrarSpinner } from "../../helpers/changeSpinner";
import { mostrarMsjError, mostrarMsjSuccess, ocultarMsjError, ocultarMsjSuccess } from "../../helpers/changeMsg";
import getOptionsSelect from "../../helpers/getOptionSelect";
import generarHTML from "./generateHTMLPersonal";

const agregarPersonal = document.querySelector('#agregarPersonal');
const modal = document.querySelector('#modalAgregar');
//inputs para registrar personal EIM
const formAgregarPersona = document.querySelector('#formAgregarPersona')
const namePersonal = document.querySelector('#namePersonal');
const cedulaPersonal = document.querySelector('#cedulaPersonal');
const idacPersonal = document.querySelector('#idacPersonal');
const departamentoPersonal = document.querySelector('#departamentoPersonal');
const catedraPersonal = document.querySelector('#catedraPersonal');
const cerrarModal = document.querySelector('#closeModal');
const newPersonal = {};

agregarPersonal.addEventListener('click', () => {
  modal.showModal();
});

cerrarModal.addEventListener('click', () => {
  modal.close();
});

namePersonal.addEventListener('input', e => {
  const nombreValor = namePersonal.value;
  newPersonal.nameFull = nombreValor;
});

cedulaPersonal.addEventListener('input', e => {
  let cedulaValor = cedulaPersonal.value;
  cedulaValor = cedulaValor.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean números
  cedulaPersonal.value = cedulaValor; // Actualiza el valor del campo solo con los números
  newPersonal.cedula = cedulaValor;
});

function actualizarOpcionesCatedra() {
  const departamentoSeleccionado = departamentoPersonal.value;
  const opciones = opcionesCatedra[departamentoSeleccionado] || [];
  //limpieza de las opciones actuales del segundo select
  catedraPersonal.innerHTML = '';
  //agregado de las nuevas opciones al segundo select
  opciones.forEach((opcion) => {
    const option = document.createElement('option');
    option.value = opcion.value;
    option.text = opcion.text;
    catedraPersonal.appendChild(option);
  })
}

actualizarOpcionesCatedra();

departamentoPersonal.addEventListener('change', (e) => {
  const option = getOptionsSelect(e);
  newPersonal.departamento = option.textContent;
  actualizarOpcionesCatedra();
});

catedraPersonal.addEventListener('change', (e) => {
  const option = getOptionsSelect(e);
  newPersonal.catedra = option.textContent;
});

idacPersonal.addEventListener('input', e => {
  let idacValor = idacPersonal.value;
  idacValor = idacValor.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean números
  idacPersonal.value = idacValor; // Actualiza el valor del campo solo con los números
  newPersonal.idac = idacValor;
});

formAgregarPersona.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newPersonalData = {
      nameFull: namePersonal.value,
      cedula: cedulaPersonal.value,
      departamento: newPersonal.departamento,
      catedra: newPersonal.catedra,
      Idac: idacPersonal.value
    }
    formAgregarPersona.reset();
    mostrarSpinner();
    const response = await axios.post('/api/personal', newPersonalData); 
    ocultarSpinner();
    if(!response) {
      mostrarMsjError();
      ocultarMsjError();
      throw new Error();
    }
    mostrarMsjSuccess();
    ocultarMsjSuccess();
  } catch (error) {
    console.error(error);
    formAgregarPersona.reset();
    await new Promise(resolve => setTimeout(resolve, 1000));
    ocultarSpinner();
    mostrarMsjError();
    ocultarMsjError();
  }

})


// Función para obtener los datos del personal desde tu API
async function obtenerPersonal() {
  try {
    mostrarSpinner();
    const response = await axios.get('/api/personal');
    const personal = response.data;
    if(!personal) {
      mostrarMsjError();
      ocultarMsjError();
      throw new Error();
    }
    generarHTML(personal);
    ocultarSpinner();
  } catch (error) {
    console.error(error);
  }
}

obtenerPersonal();


function filtrarPorCedula() {
  // Obtengo el valor del input de búsqueda
  const cedulaRequerida = buscarCedulaInput.value.trim().toLowerCase();
  // Buscar entre los elementos de la lista
  const todosElementos = document.querySelectorAll('#containPersonal > div');
  // Recorrido de elementos que se van a mostrar/ocultar dependiendo de la cédula buscada
  todosElementos.forEach((elemento) => {
    const cedula = elemento.querySelector('#list_cedula > h2').textContent.toLowerCase();
    if (cedula.includes(cedulaRequerida)) {
      elemento.classList.remove('hidden');
      elemento.classList.add('opacity-100', 'scale-100');
    } else {
      elemento.classList.add('hidden');
      elemento.classList.remove('opacity-100', 'scale-100');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buscarCedulaInput = document.querySelector('#buscarCedula');
  buscarCedulaInput.addEventListener('input', () => {
    const valorIngresado = buscarCedulaInput.value;
    const soloNumeros = valorIngresado.replace(/\D/g, '');
    buscarCedulaInput.value = soloNumeros;
    filtrarPorCedula();
  });
});
