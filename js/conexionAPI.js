async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ nombre, precio, imagen }),
    });

    if (!conexion.ok) {
        throw new Error("Error al enviar el producto");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("Error al eliminar el producto");
    }
}

export const conexionAPI = { listarProductos, enviarProducto, eliminarProducto };
