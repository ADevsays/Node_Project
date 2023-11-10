const nuevaPlanilla = document.querySelector('#Planillas');
const contenidoPlanilla = document.querySelector('#section_2');
const btnPlanilla = document.querySelector('#btn_planilla');
const Categoria = document.querySelector('#Categoria');
const FechaIngreso = document.querySelector('#FechaIngreso');
const tipoMovimiento = document.querySelector('#Movimiento');
const dedicacionPropuesta = document.querySelector('#dedicacionProp');
const salarioPlanilla = document.getElementById('salarioPlanilla');
const newPlanilla = {}; // Declarar el objeto newPlanilla fuera de los eventos

document.addEventListener('DOMContentLoaded', () => {
  nuevaPlanilla.addEventListener('click', () => {
    var mostrarPlanilla = nuevaPlanilla.value;
    if (mostrarPlanilla === "Nueva_Planilla") {
      contenidoPlanilla.classList.remove('hidden');
      btnPlanilla.classList.remove('hidden');
    } else {
      contenidoPlanilla.classList.add('hidden');
      btnPlanilla.classList.add('hidden');
    }
  });

  const cedulaInput = document.getElementById('cedula-input');
  const btnBuscarCedula = document.getElementById('btnbuscarCedula');
  
  btnBuscarCedula.addEventListener('click', async () => {
    // Obtener la cédula ingresada por el usuario
    const cedula = cedulaInput.value;
    newPlanilla.cedula = cedula;

    // Realizar la búsqueda en la base de datos utilizando la cédula
    try {
      const response = await axios.get(`/api/personal?cedula=${cedula}`);
      const resultado = response.data;
      // Pegar el valor de nameFull en el input con el id fullName-input
      const nameFull = resultado.nameFull;
      const fullNameInput = document.getElementById('fullName-input');
      fullNameInput.value = nameFull;
      newPlanilla.nombreApellido = nameFull;
      const departamentoPlanilla = resultado.departamento;
      const departamentoPlanillaInput = document.getElementById('departamentoPlanilla');
      departamentoPlanillaInput.value = departamentoPlanilla;
      newPlanilla.departamento = departamentoPlanilla;
      const catedraPlanilla = resultado.catedra;
      const catedraPlanillaInput = document.getElementById('catedraPlanilla');
      catedraPlanillaInput.value = catedraPlanilla;
      newPlanilla.catedra = catedraPlanilla;
      const dedicacionActPlanilla = resultado.dedicacionAct;
      const dedicacionActPlanillaInput = document.getElementById('dedicacionAct');
      dedicacionActPlanillaInput.value = dedicacionActPlanilla;
      newPlanilla.dedicacionActual = dedicacionActPlanilla;
      const idacPlanilla = resultado.Idac;
      const idacPlanillaInput = document.getElementById('Idac');
      idacPlanillaInput.value = idacPlanilla;
      newPlanilla.Idac = idacPlanilla;
      const unidadPlanilla = resultado.unidadEjecutora;
      const unidadPlanillaInput = document.getElementById('unidadEjecutora');
      unidadPlanillaInput.value = unidadPlanilla;
      newPlanilla.unidadEjecutora = unidadPlanilla;
    } catch (error) {
      console.error(error);
    }
  });

  fetch(`/api/salarios/${encodeURIComponent("65412dc38f8fa3d269c29562")}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const monto = data.monto;
        salarioPlanilla.value = monto;
        newPlanilla.sueldo = monto;
      }
    })
    .catch(error => {
      console.error('Error al obtener el salario:', error);
    });

  Categoria.addEventListener('change', () => {
    const categoriaSelected = Categoria[Categoria.selectedIndex];
    const categoriaText = categoriaSelected.text;
    newPlanilla.Categoria = categoriaText;
  });

  FechaIngreso.addEventListener('input', e => {
    let fecha = FechaIngreso.value;
    newPlanilla.fecha = fecha;
  });

  tipoMovimiento.addEventListener('change', () => {
    const movimientoSelected = Categoria[Categoria.selectedIndex];
    const movimientoText = movimientoSelected.text;
    newPlanilla.tipoDeMovimiento = movimientoText;
  });

  dedicacionPropuesta.addEventListener('change', () => {
    const dedicacionPropSelected = Categoria[Categoria.selectedIndex];
    const dedicacionPropText = dedicacionPropSelected.text;
    newPlanilla.dedicacionPropuesta = dedicacionPropText;
  });

  // Obtener el elemento del input por su ID
  const numeroPlanillaInput = document.getElementById('numeroPlanilla');

  // Definir el valor inicial
  let numeroPlanilla = 67;

  // Agregar el valor al input
  numeroPlanillaInput.value = numeroPlanilla.toString();

  // Incrementar el valor en 1 en cada ejecución
  numeroPlanilla++;

  newPlanilla.numeroPlanilla = numeroPlanilla++;

  btnPlanilla.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/planillas', newPlanilla);
      console.log(response);
      location.reload(); // Recargar la página
    } catch (error) {
      console.error(error);
    }
  });
});