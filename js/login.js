document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event){

        //Evita que el formulario se envíe automaticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        //Validar los campos
        var username = document.getElementById("username").value.trim();
        var passwordLogin = document.getElementById("passwordLogin").value.trim();
        var isValid = true;

        if(username === ""){
            displayErrorMessage("usernameError", "Por favor ingrese un usuario.");
            isValid = false;
        }else{
            document.getElementById("username").classList.remove('inValido');
            document.getElementById("username").classList.add('valido');
        }

        if(passwordLogin.length<8){
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }else{
            document.getElementById("passwordLogin").classList.remove('inValido');
            document.getElementById("passwordLogin").classList.add('valido');
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

function resetErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.innerText = "";
    })}