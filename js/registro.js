document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formRegistro").addEventListener("submit", function(event){

        //Evita que el formulario se envíe automaticamente
        event.preventDefault();

        //Validar los campos
        var nombre = document.getElementById("nombre").value.trim();
        var apellido = document.getElementById("apellido").value.trim();
        var password = document.getElementById("password").value.trim();
        var email = document.getElementById("email").value.trim();
        var dataValue = document.getElementById('dataFild');
        var paisValue = document.getElementById('pais');

        var isValid = true;

        if(nombre.length == 0){
            displayErrorMessage("nombreError", "Por favor ingrese un usuario.");
            document.getElementById("nombre").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("nombre").classList.remove('inValido');
            document.getElementById("nombre").classList.add('valido');
        }

        if(apellido.length == 0){
            displayErrorMessage("apellidoError", "Por favor ingrese su apellido.");
            document.getElementById("apellido").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("apellido").classList.remove('inValido');
            document.getElementById("apellido").classList.add('valido');
        }

        if(password.length<8){
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            document.getElementById("password").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("password").classList.remove('inValido');
            document.getElementById("password").classList.add('valido');
        }

        if (!validarEmail(email)) {
            displayErrorMessage("emailError", "Ingrese una dirección de correo electrónico válido");
            document.getElementById("email").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("email").classList.remove('inValido');
            document.getElementById("email").classList.add('valido');
        }

        if(dataValue == ""){
            displayErrorMessage("dataError", "Por favor, ingrese una fecha válida");
            document.getElementById("dataError").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("dataValue").classList.remove('inValido');
            document.getElementById("dataValue").classList.add('valido');
        }

        if(paisValue == ""){
            displayErrorMessage("paisError", "Debe seleccionar un país.");
            document.getElementById("paisValue").classList.add('inValido');
            isValid = false;
        }else{
            document.getElementById("paisError").classList.remove('inValido');
            document.getElementById("paisError").classList.add('valido');
        }

        if(isValid){
            alert("Formulario enviado con éxito")
        }
    })

});

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function validarEmail(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}
