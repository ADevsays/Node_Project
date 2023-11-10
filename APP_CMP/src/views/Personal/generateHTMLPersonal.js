export default function generarHTML(personal) {
    //console.log(personal)
    const containPersonal = document.querySelector('#containPersonal');
  
    personal.forEach((dato) => {
      const div = document.createElement('div');
      div.id = 'listadoPersonalOrden';
      div.className = 'grid grid-cols-6 justify-between min-w-full h-24 md:h-32 sm:w-auto mx-auto my-1.5 bg-indigo-300 rounded-md border border-blue-950/60 transition-all duration-[1500]';
  
      /////////////// ESCUELA /////////////////
      const divEscuela = document.createElement('div');
      divEscuela.id = 'list_escuela';
      divEscuela.className = 'hidden sm:block sm:col-span-1 justify-around text-center my-auto mx-1 sm:mx-3 md:mx-5 lg:mx-12 xl:mx-14';
      const h2Escuela = document.createElement('h2');
      h2Escuela.className = 'text-xs md:text-sm lg:text-base font-semibold uppercase';
      h2Escuela.textContent = 'EIM';
      divEscuela.appendChild(h2Escuela);
  
      /////////////// NOMBRE /////////////////
      const h2Nombre = document.createElement('h2');
      h2Nombre.className =
        'text-xs md:text-sm lg:text-base md:col-span-1 font-semibold uppercase flex items-center justify-center';
      h2Nombre.textContent = dato.nameFull;
      // Crear el div y agregar el h2Nombre
      const divNombre = document.createElement('div');
      divNombre.id = 'list_nombre';
      divNombre.className =
        'col-span-1 md:max-w-md justify-center text-center my-auto mx-1 sm:mx-3 md:mx-5 lg:mx-12 xl:mx-14 md:px-10';
      divNombre.appendChild(h2Nombre);
  
      /////////////// CEDULA ///////////////// 
      const divCedula = document.createElement('div');
      divCedula.id = 'list_cedula';
      divCedula.className = 'col-span-1 justify-around text-center my-auto mx-1 sm:mx-3 md:mx-5 lg:mx-12 xl:mx-14';
      const h2Cedula = document.createElement('h2');
      h2Cedula.className = 'text-xs md:text-sm lg:text-base font-semibold uppercase';
      h2Cedula.textContent = dato.cedula;
      divCedula.appendChild(h2Cedula);
      //console.log(dato.cedula);
  
      /////////////// DEPARTAMENTO /////////////////
      const divDepartamento = document.createElement('div');
      divDepartamento.id = 'list_departamento';
      divDepartamento.className = 'col-span-1 justify-around text-center my-auto mx-1 sm:mx-3 md:mx-5 lg:mx-12 xl:mx-14';
      const h2Departamento = document.createElement('h2');
      h2Departamento.className = 'text-xs md:text-sm lg:text-base font-semibold uppercase';
      h2Departamento.textContent = dato.departamento;
      divDepartamento.appendChild(h2Departamento);
      //console.log(dato.departamento)
  
      /////////////// IDAC /////////////////
      const divIdac = document.createElement('div');
      divIdac.id = 'list_idac';
      divIdac.className = 'col-span-1 justify-around text-center my-auto mx-1 sm:mx-3 md:mx-5 lg:mx-12 xl:mx-14';
      const h2Idac = document.createElement('h2');
      h2Idac.className = 'text-xs md:text-sm lg:text-base font-semibold uppercase';
      h2Idac.textContent = dato.Idac;
      divIdac.appendChild(h2Idac);
  
      ////////Botones de acción////////
      const divBotones = document.createElement('div');
      divBotones.className = 'col-span-1 my-auto mx-3 grid grid-cols-2 gap-1';
      const divEditar = document.createElement('div');
      ////////Boton de editar//////////
      divEditar.className = 'w-6 md:w-8 lg:w-9 m-1.5';
      divEditar.title = 'Editar';
      const buttonEditar = document.createElement('button');
      buttonEditar.id = 'btnEditarPersonal';
      buttonEditar.name = 'Editar';
      buttonEditar.className =
        'col-span-1 p-1 w-full bg-blue-700 text-white rounded-lg active:rounded-lg hover:bg-blue-950 hover:rounded-md mx-auto';
      const iEditar = document.createElement('i');
      iEditar.className = 'bx bx-edit text-sm md:text-base lg:text-xl text-center';
      buttonEditar.appendChild(iEditar);
      divEditar.appendChild(buttonEditar);
      ///////////Boton de editar//////////
      const divEliminar = document.createElement('div');
      divEliminar.className = 'w-6 md:w-8 lg:w-9 m-1.5';
      divEliminar.title = 'Eliminar';
      const buttonEliminar = document.createElement('button');
      buttonEliminar.id = 'btnEliminarPersonal';
      buttonEliminar.name = 'Eliminar';
      buttonEliminar.className =
        'col-span-1 p-1 w-full bg-red-600 text-white rounded-lg active:rounded-lg hover:bg-red-800 hover:rounded-md mx-auto';
      const iEliminar = document.createElement('i');
      iEliminar.className = 'bx bx-trash text-sm md:text-base lg:text-xl text-center';
      buttonEliminar.appendChild(iEliminar);
      divEliminar.appendChild(buttonEliminar);
  
      divBotones.appendChild(divEditar);
      divBotones.appendChild(divEliminar);
  
      div.appendChild(divEscuela);
      div.appendChild(divNombre);
      div.appendChild(divCedula);
      div.appendChild(divDepartamento);
      div.appendChild(divIdac);
      div.appendChild(divBotones);
  
      containPersonal.appendChild(div);
    });
  }