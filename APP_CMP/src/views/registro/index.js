//console.log('Estoy aqui')
import { crearNotificacion } from '/components/notificaciones.js';

const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input')
const matchInput = document.querySelector('#match-input');
const btnRegistro = document.querySelector('#form-btn');
const showPassword = document.querySelector('#show-password-checkbox');
const showPassword2 = document.querySelector('#show-password-checkbox-2');

//console.log(axios);

//const axios = require('axios/dist/node/axios.cjs'); // node
//console.log(axios);

//validamos
//validamos con regex = regular express

const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const passwordVal = /^(?=.*\d{1,})(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;
const nameval = /^[a-zA-Z]+( [a-zA-Z]+)?$/;

let valname = false;
let valemail = false;
let valpass = false;
let valmatch = false;

//validaciones para email
nameInput.addEventListener('input', e=>{
    //console.log(e.target.value)
    valname = nameval.test(e.target.value);

    validar(nameInput,valname);
    //console.log(valname)
})

//validaciones para email
emailInput.addEventListener('input', e=>{
    //console.log(e.target.value)
    valemail = emailVal.test(e.target.value);
    //console.log(valemail);

    validar(emailInput,valemail)

})

//validaciones para el password
passwordInput.addEventListener('input', e=>{
    //console.log(e.target.value);
    valpass = passwordVal.test(e.target.value);
    validar(passwordInput, valpass);
    validar(matchInput, valmatch);
})

//validaciones para confirmar password
matchInput.addEventListener('input', e=>{
    //console.log(e.target.value)

    valmatch = e.target.value === passwordInput.value;
    validar(matchInput, valmatch);
    validar(passwordInput, valpass);
})

const validar = (input,val) =>{
    //console.log(validar)
    btnRegistro.disabled = valname && valemail && valpass && valmatch ? false : true;

    if (val){
        //console.log('es verdadera');
        input.classList.remove('focus:outline-blue-700','outline-4','focus');
        input.classList.remove('focus:outline-red-700','outline-4','focus');
        input.classList.add('focus:outline-green-500','outline-4','focus');

    }else if(input.value === ''){
        input.classList.remove('focus:outline-green-500','outline-4','focus');
        input.classList.remove('focus:outline-red-700','outline-4','focus');
        input.classList.add('focus:outline-blue-700','outline-4','focus');

    }else{
        input.classList.remove('focus:outline-blue-500','outline-4','focus');
        input.classList.remove('focus:outline-green-700','outline-4','focus');
        input.classList.add('focus:outline-red-700','outline-4','focus');

    }
}

showPassword.addEventListener('click', () => {
    if (showPassword.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

showPassword2.addEventListener('click', () => {
    if (showPassword2.checked) {
        matchInput.type = 'text';
    } else {
        matchInput.type = 'password';
    }
});

formulario.addEventListener('submit', async e=>{
    e.preventDefault();

    try {
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }
    
        // Validar el password con el regex
        const passwordRegex = /^(?=.*\d{1,})(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;
        if (!passwordRegex.test(newUser.password)) {
            const corregirClave = document.getElementById("CorregirClave");
            corregirClave.classList.remove("hidden");
            corregirClave.classList.add("flex");
            setTimeout(() => {
                corregirClave.classList.remove("flex");
                corregirClave.classList.add("hidden");
            }, 3000); // Duración de 3 segundos
            formulario.reset();
            return;
        }

        crearNotificacion(false);
    
        const response = await axios.post('/api/users',newUser);
        formulario.reset();
        //console.log(response);
    } catch (error) {
        console.error(error);
        crearNotificacion(true);
        formulario.reset();
    }
    
})