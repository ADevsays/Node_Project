// Importa el modelo de usuario

import { errors } from "../../const/errors";
import postUsers from "../../services/Users/postUsers";

//const User = require('../models/user');
const $ = query=> document.querySelector(query);

const showPassword = $('#show-password-checkbox');
const emailInput = $('#email-input');
const passwordInput = $('#password-input');
const formBtn = $('#form-btn');
const msjError = $('#mensajeError');

emailInput.addEventListener('input', () => {
    toggleButton();
});
  
passwordInput.addEventListener('input', () => {
    toggleButton();
});

function toggleButton() {
    if (emailInput.value && passwordInput.value) {
      formBtn.disabled = false;
    } else {
      formBtn.disabled = true;
    }
}

showPassword.addEventListener('click', () => {
    if (showPassword.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

formBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    msjError.textContent = ''; // Restablece el mensaje de error previo

    setTimeout(() => {
        formBtn.disabled = false;
        emailInput.value = '';
        passwordInput.value = '';
    }, 4000);

    const url = '/api/users/login'
    const response = await postUsers(url, {email, password});
    if(response.type == errors.RESPONSE_OK){
        msjError.textContent = 'Usuario no registrado';
        return;
    }
    if(response.type == errors.DONT_USER){
        msjError.textContent = 'Usuario no encontrado';
        return;
    }
    if(!response.state){
        window.location.href = '/planillas/';
        return;
    }
});
