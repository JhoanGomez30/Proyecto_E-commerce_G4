const mensajeAlerta = document.getElementById("error");

document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById("name");
    const telefono = document.getElementById("tel");
    const email = document.getElementById("email");
    const password = document.getElementById("password1");
    const confirmarPassword = document.getElementById("password2");

    // Event listener para el evento 'blur' en cada campo
    nombre.addEventListener('change', function() {
        validarNombre(nombre.value);
    });

    telefono.addEventListener('change', function() {
        validarTelefono(telefono.value);
    });

    email.addEventListener('change', function() {
        validarEmail(email.value);
    });

    password.addEventListener('change', function() {
        validarContraseñas(password.value, confirmarPassword.value);
    });

    confirmarPassword.addEventListener('change', function() {
        validarContraseñas(password.value, confirmarPassword.value);
    });
});

// Función para validar el nombre
function validarNombre(nombre) {
    if (tieneNumeros(nombre)) {
     mensajeAlerta.innerHTML="el nombre no debe contener numeros."
    }
}

// Función para validar el teléfono
function validarTelefono(telefono) {
    if (!esNumero(telefono) || telefono.length < 10) {
        alert('El teléfono debe ser numérico y tener al menos 10 caracteres.');
    }
}

// Función para validar el email
function validarEmail(email) {
    if (!validarFormatoEmail(email)) {
        alert('El email no tiene un formato válido.');
    }
}

// Función para validar el formato del email
function validarFormatoEmail(email) {
    // Expresión regular para validar un email
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Función para validar las contraseñas
function validarContraseñas(password, confirmarPassword) {
    if (password !== confirmarPassword) {
        alert('Las contraseñas no coinciden.');
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

