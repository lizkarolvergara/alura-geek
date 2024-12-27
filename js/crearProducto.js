import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const limpiarBtn = formulario.querySelector("#limpiar");

if (formulario) {
    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        try {
            const nombre = document.querySelector("[data-nombre]").value.trim();
            const precio = document.querySelector("[data-precio]").value.trim();
            const imagen = document.querySelector("[data-imagen]").value.trim();

            if (!nombre || !precio || !imagen) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            await conexionAPI.enviarProducto(nombre, precio, imagen);

            alert("Producto creado con éxito.");
            formulario.reset();
        } catch (error) {
            console.error("Error al crear el producto", error);
            alert("No se pudo crear el producto");
        }
    });

    limpiarBtn.addEventListener("click", (evento) => {
        evento.preventDefault();
        formulario.reset();
    });
} else {
    console.error("El formulario no se encontró");
}
