# Alura Geek - Challenge Front End G7 ONE

Este proyecto forma parte del programa **Front End G7 - ONE**, cuyo objetivo es proporcionar las bases necesarias para construir una carrera en desarrollo web. 

## Descripción del Proyecto

El objetivo de este proyecto es practicar de manera integral los conceptos aprendidos en los cursos de HTML, CSS y JavaScript. En esta aplicación se puede:

- **Agregar productos** mediante un formulario que permite ingresar el nombre, precio e imagen del producto.
- **Visualizar productos** en forma de tarjetas estilizadas con Bootstrap.
- **Eliminar productos** directamente desde cada tarjeta, lo que también actualizará los datos en la base de datos local (`db.json`).

## Características

1. **Agregar Productos:**
   - Completa los campos del formulario con el nombre, precio e imagen del producto.
   - Presiona el botón "Agregar" para guardar el producto.

2. **Listar Productos:**
   - Los productos se renderizan dinámicamente en tarjetas al cargar la página o al agregar un nuevo producto.

3. **Eliminar Productos:**
   - Cada tarjeta incluye un botón con un ícono trash. Al presionarlo, el producto se elimina de la lista y de la base de datos.

4. **Estilización Responsiva:**
   - Uso de Bootstrap para garantizar una experiencia visual atractiva en dispositivos de diferentes tamaños.

## Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- [JSON Server](https://github.com/typicode/json-server) para manejar la base de datos local.
- Extensión **Live Server** en tu editor de texto (recomendado VS Code).

## Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/lizkarolvergara/alura-geek

2. Navega al directorio del proyecto:
   ```bash
   cd alura-geek

3. Instala JSON Server:
   ```bash
   npm install -g json-server

4. Inicia el servidor:
   ```bash
   npx json-server --watch db.json --port 3001

5. Abre el proyecto en tu editor de texto y visualízalo en un navegador con **Live Server**.


## Tecnologías Utilizadas

- HTML: Estructura de la página.
- CSS: Estilización y diseño responsivo.
- Bootstrap: Framework para componentes visuales.
- JavaScript: Lógica de la aplicación.
- JSON Server: Simulación de un backend para operaciones CRUD.

## Autor

Desarrollado por **Liz Karol Vergara** como parte del programa **Alura LATAM 2024**.
