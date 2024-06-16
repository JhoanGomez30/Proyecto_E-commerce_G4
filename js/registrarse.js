document.addEventListener('DOMContentLoaded', function() {
    const mensajeAlerta = document.getElementById("error");
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("name");
    const telefono = document.getElementById("tel");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Event listener para el envío del formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validación de que el formulario fue completado
        if (validateForm()) {
            // SweetAlert2 de éxito si el formulario es válido
            Swal.fire({
                title: "Registro exitoso!",
                text: "Te has registrado exitosamente.",
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Limpiar campos del formulario después del registro exitoso
                    nombre.value = "";
                    telefono.value = "";
                    email.value = "";
                    password.value = "";
                    confirmPassword.value = "";
                    mensajeAlerta.innerHTML = "";
                }
            });
        } else {
            // SweetAlert2 de error si el formulario no es válido
            Swal.fire({
                title: "Error",
                text: "Por favor, verifica los campos del formulario.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });

    // Función para validar el nombre
    nombre.addEventListener('blur', function() {
        validarNombre(nombre.value);
    });

    // Función para validar el teléfono
    telefono.addEventListener('blur', function() {
        validarTelefono(telefono.value);
    });

    // Función para validar el email
    email.addEventListener('blur', function() {
        validarEmail(email.value);
    });

    // Función para validar las contraseñas
    password.addEventListener('blur', function() {
        validarContraseñas(password.value, confirmPassword.value);
    });

    confirmPassword.addEventListener('blur', function() {
        validarContraseñas(password.value, confirmPassword.value);
    });

    // Función para validar el nombre
    function validarNombre(nombre) {
        if (tieneNumeros(nombre)) {
            mensajeAlerta.innerHTML = "El nombre no debe contener números";
        } else {
            mensajeAlerta.innerHTML = ""; // Limpiar mensaje si es válido
        }
    }

    // Función para validar el teléfono
    function validarTelefono(telefono) {
        if (!esNumero(telefono) || telefono.length < 10) {
            mensajeAlerta.innerHTML = "El teléfono debe ser numérico y tener al menos 10 caracteres";
        } else {
            mensajeAlerta.innerHTML = ""; // Limpiar mensaje si es válido
        }
    }

    // Función para validar el email
    function validarEmail(email) {
        if (!validarFormatoEmail(email)) {
            mensajeAlerta.innerHTML = "El email no tiene un formato válido.";
        } else {
            mensajeAlerta.innerHTML = ""; // Limpiar mensaje si es válido
        }
    }

    // Función para validar el formato del email
    function validarFormatoEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Función para validar las contraseñas
    function validarContraseñas(password, confirmPassword) {
        if (password !== confirmPassword) {
            mensajeAlerta.innerHTML = "Las contraseñas no coinciden";
        } else {
            mensajeAlerta.innerHTML = ""; // Limpiar mensaje si coinciden
        }
    }

    // Función para verificar si un string contiene números
    function tieneNumeros(texto) {
        return /\d/.test(texto);
    }

    // Función para verificar si un string es numérico
    function esNumero(texto) {
        return /^\d+$/.test(texto);
    }

    // Función para verificar si el formulario es válido
    function validateForm() {
        validarNombre(nombre.value);
        validarTelefono(telefono.value);
        validarEmail(email.value);
        validarContraseñas(password.value, confirmPassword.value);
        return mensajeAlerta.innerHTML === "";
    }
});
