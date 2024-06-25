document.addEventListener('DOMContentLoaded', function() {
    const mensajeNombre = document.getElementById("error__nombre");
    const mensajeTelefono = document.getElementById("error__telefono");
    const mensajeEmail = document.getElementById("error__email");
    const mensajePassword = document.getElementById("error__password");
    const mensajeCompass = document.getElementById("error__confirmPassword");
    const formulario = document.getElementById("signupForm");
    const nombre = document.getElementById("name");
    const telefono = document.getElementById("tel");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Ocultar todos los mensajes de error e iconos al cargar la página
    ocultarTodosErrores();

    // Event listener para el envío del formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validación de que el formulario fue completado
        if (validateForm()) {
            const Users = JSON.parse(localStorage.getItem("users")) || [];
            const isUserRegistered = Users.find(user => user.email === email.value);
            if (isUserRegistered) {
                Swal.fire({
                    title: "Error",
                    text: "El usuario ya está registrado.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
                return;
            }

            Users.push({
                name: nombre.value,
                telefono: telefono.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value
            });

            localStorage.setItem('users', JSON.stringify(Users));

            // SweetAlert2 de éxito si el formulario es válido y usuario no está registrado
            Swal.fire({
                title: "Registro exitoso!",
                text: "Te has registrado exitosamente.",
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Limpiar campos del formulario después del registro exitoso
                    formulario.reset();
                    ocultarTodosErrores();
                    // Redireccionar al login
                    window.location.href = "inicioSesion.html";
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
    nombre.addEventListener('input', function() {
        validarNombre();
    });

    // Función para validar el teléfono
    telefono.addEventListener('input', function() {
        validarTelefono();
    });

    // Función para validar el email
    email.addEventListener('input', function() {
        validarEmail();
    });

    // Función para validar las contraseñas

    password.addEventListener('input', function() {

        validarContraseñas();
    });

    confirmPassword.addEventListener('input', function() {
        validarContraseñas();
    });

    // Función para validar el nombre
    function validarNombre() {
        if (tieneNumeros(nombre.value)) {
            mostrarError(mensajeNombre, "El nombre no debe contener números");
            console.log("mensaje error");
        } else {
            ocultarError(mensajeNombre);
        }
    }

    // Función para validar el teléfono
    function validarTelefono() {
        if (!esNumero(telefono.value) || telefono.value.length < 10) {
            mostrarError(mensajeTelefono, "El teléfono debe ser numérico y tener al menos 10 caracteres");
        } else {
            ocultarError(mensajeTelefono);
        }
    }

    // Función para validar el email
    function validarEmail() {
        if (!validarFormatoEmail(email.value)) {
            mostrarError(mensajeEmail, "El email no tiene un formato válido.");
        } else {
            ocultarError(mensajeEmail);
        }
    }

    // Función para validar las contraseñas
    function validarContraseñas() {
        if (password.value !== confirmPassword.value) {
            mostrarError(mensajeCompass, "Las contraseñas no coinciden");
        } else {
            ocultarError(mensajeCompass);
        }
    }

    // Función para mostrar errores e iconos
    function mostrarError(elemento, mensaje) {
        const iconoError = elemento.parentElement.querySelector('.icon__error');
        elemento.innerHTML = mensaje;
        elemento.style.display = 'block';
        iconoError.style.display = 'inline'; // Mostrar el icono
    }

    // Función para ocultar errores e iconos
    function ocultarError(elemento) {
        const iconoError = elemento.parentElement.querySelector('.icon__error');
        elemento.innerHTML = "";
        elemento.style.display = 'none';
        iconoError.style.display = 'none'; // Ocultar el icono
    }

    // Función para ocultar todos los errores e iconos al cargar la página
    function ocultarTodosErrores() {
        const errores = document.querySelectorAll('.anuncio__error p');
        const iconos = document.querySelectorAll('.icon__error');
        errores.forEach(error => {
            error.style.display = 'none';
        });
        iconos.forEach(icono => {
            icono.style.display = 'none';
        });
    }

    // Función para validar el formato del email
    function validarFormatoEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
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
        validarNombre();
        validarTelefono();
        validarEmail();
        validarContraseñas();
        // Validar que no haya ningún mensaje de error visible
        return document.querySelectorAll('.anuncio__error p[style="display: block;"]').length === 0;
    }
});
