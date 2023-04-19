/* ---------------------------------- nodos --------------------------------- */
// Capturamos todos los elementos que necesitamos
const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const inputPassword = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const inputRol = document.querySelector('#rol');
const rolError = document.querySelector('#rolError');
const inputTerminos = document.querySelector('#terminos');
const terminosError = document.querySelector('#terminosError');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	email: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'email');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'password');
		break;
		case "rol":
			if (inputRol.value == 0 || inputRol == "") {
                alert ("Debes seleccionar una opción")
                inputRol.focus()
            }
            else alert ("Selección exitosa")
                inputRol.focus();
		break;
}
}
const validarCampo = (expresion, input, id) => {
	if(expresion.test(input.value)){
		inputEmail(`$#{id}`).classList.remove('error');
		emailError(`$#{id}`).classList.add('error');
		inputPassword(`#${id}`).classList.remove('error');
		passwordError(`#${id}`).classList.add('error');
		campos[id] = true;
	} else {
        inputEmail(`$#{id}`).classList.add('error');
		emailError(`$#{id}`).classList.remove('error');
		inputPassword(`#${id}`).classList.add('error');
		passwordError(`#${id}`).classList.remove('error');
		campos[id] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.email && campos.password){
		formulario.reset();

		inputTerminos.classList.add('oktermino');
		setTimeout(() => {
			inputTerminos.classList.remove("oktermino");
		}, 5000);

	} else {
		terminosError.classList.add('errortermino');
	}
});