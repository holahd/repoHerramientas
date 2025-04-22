# repoHerramientas
Este repositorio contiene una práctica de consumo de Web Services utilizando un frontend creado con Vite y un backend con Node.js (Express).

## Requisitos previos

- Node.js instalado
- NPM (gestor de paquetes de Node.js)

---

## Instrucciones para el Frontend (Vite)

1. Crear una carpeta `frontend` y dentro ejecutar:
   ```
   npm create vite@latest
   ```
   - Elegir plantilla **vanilla** y lenguaje **JavaScript**.

2. Instalar dependencias:
   ```
   cd frontend
   npm install
   ```

3. Limpiar plantilla:
   - Borrar `counter.js`
   - Limpiar `main.js`
   - Comentar líneas 11 y 12 de `index.html`
   - Agregar `<h1>Hola mundo !!!</h1>` y botón con id `"PingButton"`

4. Enlazar hoja de estilos `style.css` y personalizar usando `#app` y `.card`

5. Agregar lógica en `main.js` para manejar evento click del botón Ping

---

## Instrucciones para el Backend (Web Service)

1. Crear carpeta `backend` y configurar un servidor con Express.
2. Habilitar CORS:
   ```
   npm install cors
   ```
   - En `index.js`:
     ```js
     const cors = require('cors');
     app.use(cors());
     ```

3. Asegurar que el backend responda en ruta `http://localhost:3030/ping`

---

## Probar conexión

1. Iniciar el backend:
   ```
   node index.js
   ```

2. Iniciar frontend:
   ```
   npm run dev
   ```

3. Al presionar el botón "Ping", debe aparecer "Pong" como respuesta desde el servidor.

    