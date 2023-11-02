

document.addEventListener("DOMContentLoaded", function () {
    // Agrega evento click al botón de enviar
    const enviarButton = document.querySelector('button[type="button"]');
    enviarButton.addEventListener('click', validarFormulario);

    // Agrega un manejador de eventos al select para el evento 'change'
    const tipoSeguroSelect = document.getElementById("tipoSeguro");
    tipoSeguroSelect.addEventListener('change', actualizarValorSeguro);
});

// Actualiza el valor del seguro en base al tipo de seguro seleccionado

function actualizarValorSeguro() {
    const tipoSeguro = document.getElementById("tipoSeguro").value;
    const valorSeguro = document.getElementById("valorSeguro");

    const tiposSeguro = {
        "basico": "$500",
        "intermedio": "$1000",
        "premium": "$1500"
    };

    valorSeguro.textContent = tiposSeguro[tipoSeguro];
}

// Valida el formulario y muestra una SweetAlert de error si no es válido

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let tipoSeguro = document.getElementById("tipoSeguro").value;

    let dniPattern = /^[0-9]{8}$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (nombre === "") {
        Swal.fire("Error", "Por favor, ingresa tu nombre.", "error");
        return false;
    }
    if (apellido === "") {
        Swal.fire("Error", "Por favor, ingresa tu apellido.", "error");
        return false;
    }
    if (!dni.match(dniPattern)) {
        Swal.fire("Error", "Por favor, ingresa un DNI válido de 8 dígitos numéricos.", "error");
        return false;
    }
    if (!email.match(emailPattern)) {
        Swal.fire("Error", "Por favor, ingresa una dirección de correo electrónico válida.", "error");
        return false;
    }
    if (telefono === "" || isNaN(telefono)) {
        Swal.fire("Error", "Por favor, ingresa un número de teléfono válido.", "error");
        return false;
    }
    if (tipoSeguro === "") {
        Swal.fire("Error", "Por favor, selecciona un tipo de seguro.", "error");
        return false;
    }

    // Si la validación es exitosa, muestra una SweetAlert de éxito

    Swal.fire("Éxito", "Solicitud enviada con éxito", "success");

    return true;
}

// Muestra un SweetAlert en las secciones del Nav no terminadas con un mensaje.

function mostrarMensajeEnProceso(mensaje) {
    Swal.fire({
        icon: 'info',
        title: 'En proceso',
        text: `La sección "${mensaje}" está en desarrollo. Pronto estará disponible.`,
    });
}

// Agrega un manejador de eventos al botón de inicio y productos para mostrar un mensaje de que están en proceso

document.addEventListener('DOMContentLoaded', function () {
    const inicioLink = document.getElementById('inicio-link');
    const productosLink = document.getElementById('productos-link');

    if (inicioLink) {
        inicioLink.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarMensajeEnProceso('Inicio');
        });
    }

    if (productosLink) {
        productosLink.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarMensajeEnProceso('Productos');
        });
    }
});
