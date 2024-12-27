import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]"); //selecciona la lista del dom para mostrar los productos

function crearCard(producto) {
    const elemento = document.createElement("li");
    elemento.className = "producto-item";
    elemento.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <p class="card-text mb-2 ibm-plex-mono-regular">${producto.nombre}</p> 
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title mb-0 press-start-2p-regular font-small">S/ ${producto.precio}</h5>
                    <button class="btn p-0 eliminar-producto" style="background: none; border: none;" data-id="${producto.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    // botón de eliminar dentro del card
    const btnEliminar = elemento.querySelector(".eliminar-producto");
    btnEliminar.addEventListener("click", async () => {
        try {
            const productoId = producto.id;
            await conexionAPI.eliminarProducto(productoId); // llama a la api
            elemento.remove(); // lo elimina
        } catch (error) {
            console.error("Error al eliminar producto", error);
        }
    });

    return elemento;
}

async function listarProductos() {
    try {
        const productos = await conexionAPI.listarProductos(); // llama a la api para obtener los productos

        productos.forEach((producto) => {
            const nuevaCard = crearCard(producto);
            lista.appendChild(nuevaCard); // agrega una nueva card
        });
    } catch (error) {
        console.error("Error al ingresar producto", error);
    }
}


listarProductos();
