// const html2canvas = require ('html2canvas');
console.log(html2canvas, 'html to canvas');

async function buscarPlanillas() {
  const searchTemplateUrl = '/api/planillas';
  try {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(searchTemplateUrl, requestOptions);
    if (response.ok) {
      const planillas = await response.json();
      return planillas;
    } 
    throw new Error('Error al buscar las planillas en la base de datos');
    
  } catch (error) {
    console.error(error);
  }
}

buscarPlanillas()
  .then(planillas => {
    console.log(planillas);
  })
  .catch(error => {
    console.error(error);
  });


const body = document.querySelector('#body');

function contentPDF() {
  
  const numeroPlanilla = "2000";
  const fecha = "2022-01-01";
  const departamento = "Departamento de Ejemplo";
  const nombreApellido = "John Doe";
  const catedra = "Cátedra de Ejemplo";
  const cedula = "123456789";
  const tipoDeMovimiento = "Movimiento de Ejemplo";
  const dedicacionActual = "Dedicación Actual de Ejemplo";
  const dedicacionPropuesta = "Dedicación Propuesta de Ejemplo";
  const sueldo = "1000";
  const unidadEjecutora = "Unidad Ejecutora de Ejemplo";
  const Categoria = "Categoría de Ejemplo";
  const Idac = "Idac de Ejemplo";

   body.innerHTML=
   `
      <header class="header">
        <div class="logoUCV">
          <img src="/IMG/Logo_UCV.png" alt="">
        </div>
        <div class="Titulo">
          <h1>
            UNIVERSIDAD CENTRAL DE VENEZUELA
          </h1>
          <p>
            Facultad de Humanidades y Educación
          </p>
        </div>
        <div class="Subtitulo">
          <h1>
            SOLICITUD DE MOVIMIENTO DE PERSONAL
          </h1>
        </div>
      </header>
      <div id="numeroPlanilla">
        <p>
          Número: ${numeroPlanilla}
        </p>
      </div>
      <section id="sectionPlanilla">
        <div id="tituloPlanilla">
          <h2>ESCUELA DE IDIOMAS MODERNOS </h2>
        </div>
        <div id="fechaPlanilla">
          <h2>Fecha: ${fecha}</h2>
          <p></p>
        </div>
        <div id="departamentoPlanilla">
          <h2>Departamento: ${departamento}</h2>
          <h2>Nombres y Apellidos: ${nombreApellido}</h2>
        </div>
        <div id="catedraPlanilla">
          <h2>Cátedra: ${catedra}</h2>
          <h2>Cédula: ${cedula}</h2>
        </div>
        <div id="movimientoPlanilla">
          <h2>
            Tipo de Movimiento
          </h2>
          <p>${tipoDeMovimiento}</p>
        </div>
        <div id="dedicacionActPlanilla">
          <h2>
            Dedicación Actual
          </h2>
          <p>${dedicacionActual}</p>
        </div>
        </div>
        <div id="dedicacionProPlanilla">
          <h2>
            Dedicación Propuesta
          </h2>
          <p>${dedicacionPropuesta}</p>
        </div>
        <div id="sueldoPlanilla">
          <h2>
            Sueldo
          </h2>
          <p>${sueldo}</p>
        </div>
        <div id="unidadEjecPlanilla">
          <h2>
            Unidad Ejecutora
          </h2>
          <p>${unidadEjecutora}</p>
        </div>
        <div id="lapsoPlanilla">
          <h2>
            lapso
          </h2>
        </div>
        <div id="categoriaPlanilla">
          <h2>
            Categoría
          </h2>
          <p>${Categoria}</p>
        </div>
        <div id="observacionesPlanilla">
          <h3>Justificación u Observaciones: </h3>
          <h3>Dirección: </h3>
          <div class="contactoIdac">
            <p>Teléfono: </p>
            <p>Idac: ${Idac}</p>
          </div>
          <div class="datosIngreso">
            <p>Ingreso: </p>
            <p>Tipo de Ingreso: </p>
            <p>Fecha de Ingreso: </p>
          </div>
        </div>
        <div id="anexosPlanilla">
          <h2>
            Anexos
          </h2>
        </div>
        <div id="firma1Planilla">
          <p>
            Firma del Director(a) o Coordinador(a)
          </p>
        </div>
        <div id="firma2Planilla">
          <p>
            Decano o Coordinador
          </p>
        </div>
        <div id="unidadEjecDatosPlanilla">
          <h3>Unidad ejecutora: ${unidadEjecutora}</h3>
          <h3>Código del programa: </h3>
          <h3>Código contable: </h3>
          <h3>Sueldo: </h3>
          <h3>Fecha Efectiva: </h3>
          <h3>Firma del Jefe de Presupuesto: </h3>
        </div>
        <div id="observacionPresupuestoPlanilla">
          <h3>
            Observación Departamento de Presupuesto
          </h3>
        </div>
      </section>
    `;
}

function generatePDF() {
    contentPDF()

    html2canvas(document.querySelector('#body')).then(canvas => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('p','mm');

      doc.addImage(imgData, 'PNG', 10, 10);
      doc.save('salida.pdf');
    });
}

generatePDF()