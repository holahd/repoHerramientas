# repoHerramientas
# Frontend con Vite

Este frontend fue creado utilizando **Vite** con plantilla **vanilla JavaScript**, y se conecta con un backend a través de un botón de prueba. A continuación se documentan los pasos realizados para su configuración y personalización.

---

## Requisitos

- Node.js instalado
- Acceso a terminal o consola

---

## Creación del proyecto

1. Crear el proyecto con Vite:

   ```bash
   npm create vite@latest
   ```

   - Nombre del proyecto: `hello` (o el nombre que elijas)
   - Framework: `vanilla`
   - Lenguaje: `JavaScript`

2. Instalar dependencias:

   ```bash
   cd hello
   npm install
   ```

3. Iniciar servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Acceder a la URL local que aparece en la terminal para visualizar la plantilla.

---

## Limpieza de la plantilla

1. Eliminar el archivo `counter.js`.

2. Borrar todo el contenido de `main.js`.

3. Editar el archivo `index.html`:

   - Comentar las líneas relacionadas con los logos.
   - Dentro del `<body>`, agregar un título de prueba:

     ```html
     <h1>Hola mundo !!!</h1>
     ```

---

## Personalización del frontend

1. Vincular el archivo `style.css` desde `index.html`.

2. Utilizar un `div` con `id="app"` y la clase `card` para estructurar el contenido:

   ```html
   <div id="app" class="card">
     <!-- contenido -->
   </div>
   ```

3. Agregar un botón y un párrafo para mostrar el mensaje:

   ```html
   <button id="pingButton">Ping</button>
   <p id="message"></p>
   ```

---

## Interacción con JavaScript (cliente)

1. Agregar en `main.js` una función para mostrar "Pong" al hacer clic:

   ```javascript
   document.getElementById("pingButton").addEventListener("click", () => {
     document.getElementById("message").innerHTML = "Pong";
   });
   ```

---

## Conexión con el backend

1. Asegurarse de que el backend tenga habilitado CORS.

2. Activar el script en `index.html`:

   ```html
   <script type="module" src="/main.js"></script>
   ```

3. Crear una función en `main.js` para consumir el servicio web:

   ```javascript
   async function getPingFromWebService() {
     const response = await fetch("http://localhost:3030/ping");
     const data = await response.json();
     document.getElementById("message").innerHTML = data.message;
   }

   document.getElementById("pingButton").addEventListener("click", getPingFromWebService);
   ```

---


    