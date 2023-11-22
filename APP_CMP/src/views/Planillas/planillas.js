import allData from "../../const/allDataToSetUserFind";
import defaultURI from "../../const/deafultURI";
import { optionTemplateToChange } from "../../const/selectOptions";
import templateNumberBase from "../../const/templateNumberBase";
import getOptionsSelect from "../../helpers/getOptionSelect";
import getSalaries from "../../services/Salary/getSalaries";
import postNewTemplate from "../../services/Templates/postTemplate";
import { findUserID } from "../../services/Users/findUserID";

const nuevaPlanilla = document.querySelector('#Planillas');
const contenidoPlanilla = document.querySelector('#section_2');
const btnPlanilla = document.querySelector('#btn_planilla');
const Categoria = document.querySelector('#Categoria');
const FechaIngreso = document.querySelector('#FechaIngreso');
const tipoMovimiento = document.querySelector('#Movimiento');
const dedicacionPropuesta = document.querySelector('#dedicacionProp');
const salarioPlanilla = document.getElementById('salarioPlanilla');
const cedulaInput = document.getElementById('cedula-input');
const btnBuscarCedula = document.getElementById('btnbuscarCedula');
const numeroPlanillaInput = document.getElementById('numeroPlanilla');

const newPlanilla = {
  cedula: '',
  nombreApellido: '',
  departamento: '',
  catedra: '',
  dedicacionActual: '',
  Idac: '',
  unidadEjecutora: '',
  Categoria: '',
  sueldo: '',
  fecha: '',
  nuevaPlanilla: '',
  numeroPlanilla: '',
  tipoDeMovimiento: ''
};

const showContent=()=> {
  const mostrarPlanilla = nuevaPlanilla.value;
  if (mostrarPlanilla === optionTemplateToChange) {
    contenidoPlanilla.classList.remove('hidden');
    btnPlanilla.classList.remove('hidden');
  } else {
    contenidoPlanilla.classList.add('hidden');
    btnPlanilla.classList.add('hidden');
  }
};

const setUserFindData= async ()=> {
  const cedula = cedulaInput.value;
  newPlanilla.cedula = cedula;

  const resultado = await findUserID(cedula);

  allData.forEach((data)=>{
    const {templateProperty, elementId} = data;
    let keyToUse = templateProperty;
    const isDiferentKey = templateProperty == 'nameFull' || templateProperty == 'dedicacionAct';
    if(isDiferentKey) keyToUse = data.differentKey;
    const resultData = resultado[templateProperty];
    const input = document.getElementById(elementId);
    input.value = resultData;
    newPlanilla[keyToUse] = resultData;
  });

};

const setAmountFromSalaries = async () => {
  const amount = await getSalaries(defaultURI);
  salarioPlanilla.value = amount;
  newPlanilla.sueldo = amount;
};

const setTemplateNumber = () => {
  let numeroPlanilla = templateNumberBase;
  numeroPlanillaInput.value = numeroPlanilla.toString();
  numeroPlanilla++;
  newPlanilla.numeroPlanilla = numeroPlanilla++;
};

const setNewTemplate = async (e) => {
  e.preventDefault();
  const result = await postNewTemplate();
  if (result) {
    window.location.reload();
  }
};


document.addEventListener('DOMContentLoaded', () => {
  nuevaPlanilla.addEventListener('click', showContent);
  btnBuscarCedula.addEventListener('click', setUserFindData);
  setAmountFromSalaries();

  Categoria.addEventListener('change', (e) => {
    const option = getOptionsSelect(e);
    const categoriaText = option.textContent;
    newPlanilla.Categoria = categoriaText;
  });

  FechaIngreso.addEventListener('input', () => {
    const fecha = FechaIngreso.value;
    newPlanilla.fecha = fecha;
  });

  tipoMovimiento.addEventListener('change', (e) => {
    const option = getOptionsSelect(e);
    const movimientoText = option.textContent;
    newPlanilla.tipoDeMovimiento = movimientoText;
  });

  dedicacionPropuesta.addEventListener('change', (e) => {
    const option = getOptionsSelect(e);
    const dedicacionPropText = option.textContent;
    newPlanilla.dedicacionPropuesta = dedicacionPropText;
  });

  setTemplateNumber();

  btnPlanilla.addEventListener('click', setNewTemplate);
});