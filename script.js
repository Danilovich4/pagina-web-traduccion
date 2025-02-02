document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();

        let errores = [];

        if (nombre === "") {
            errores.push("El campo Nombre es obligatorio.");
        }

        if (email === "" || !email.includes("@")) {
            errores.push("El campo Email es obligatorio y debe ser válido.");
        }

        if (mensaje === "") {
            errores.push("El campo Mensaje no puede estar vacío.");
        }

        if (errores.length > 0) {
            alert(errores.join("\n")); // Muestra los errores en una alerta
        } else {
            alert("Formulario enviado correctamente.");
            form.submit(); // Solo enviamos si no hay errores
        }
    });
});