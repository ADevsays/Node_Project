import { maxViewport } from "../const/maxViewport";
import getViewportWidth from "../helpers/getViewportWidth";

const navegacionAdmin = document.querySelector('#sidebar');
const arrowActive = document.querySelector('.arrow');
const section = document.querySelector('#section');
const sectionText = section.querySelector('.text-indigo-950');
const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      modeSwitch = body.querySelector('.mode'),
      modetext = body.querySelector('.mode-text');
    
toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close');
  });

arrowActive.addEventListener('click', () => {
    if (getViewportWidth(maxViewport)) {
      section.classList.toggle('flex');
      section.classList.toggle('hidden');
    }
});
    
modeSwitch.addEventListener('click',()=>{
  body.classList.toggle('dark');
  
  const arrow = document.querySelector('.arrow');
  arrow.classList.add('text-white');
    
  const logo = document.querySelector('.logo');
  const btnGenerar = document.getElementById('btn_planilla');
    
  if (logo.classList.contains('bg-indigo-800')  && (body.classList.contains('dark'))) {
    logo.classList.remove('bg-indigo-800');
    logo.classList.add('bg-indigo-900');
    modetext.textContent = "Modo Claro";
     
  } else {
    logo.classList.remove('bg-indigo-900');
    logo.classList.add('bg-indigo-800');
    modetext.textContent = "Modo Oscuro";

  }

  //////// Modo oscuro para el CONTENIDO ////////
  sectionText.forEach((textElement) => {
    textElement.classList.toggle('text-white');
  });
  
  if (logo.classList.contains('bg-indigo-800') && body.classList.contains('dark')) {
    logo.classList.remove('bg-indigo-800');
    logo.classList.add('bg-indigo-900');
    modetext.innerHTML = "Modo Claro";
    btnGenerar.classList.remove('text-indigo-950'); 
    btnGenerar.classList.add('text-white');
  } else {
    logo.classList.remove('bg-indigo-900');
    logo.classList.add('bg-indigo-800');
    modetext.innerHTML = "Modo Oscuro";
    btnGenerar.classList.remove('text-white'); 
    btnGenerar.classList.add('text-indigo-950');
  }
});



      



