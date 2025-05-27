# repoHerramientas
## Objetivo
Adquirir habilidades prácticas para configurar un entorno de desarrollo, crear y consumir APIs RESTful, y probar servicios web usando herramientas modernas.

## Herramientas necesarias

### NodeJS y npm
- Instalar versión LTS desde el sitio oficial.
- Verificar instalación: `node -v` y `npm -v`.
- Iniciar proyecto: `npm init`.
- Instalar paquetes: `npm install <paquete>`.

### Visual Studio Code
- Descargar desde el sitio oficial.
- Instalar extensiones:
  - Node.js Extension Pack
  - ESLint o Prettier

### Git
- Instalar desde el sitio oficial.
- Configurar usuario:
  ```
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu_correo@ejemplo.com"
  ```
- Comandos básicos:
  - `git init`, `git clone`, `git add`, `git commit`, `git push`
  - `git fetch`, `git pull`, `git branch`, `git merge`

### Postman
- Descargar desde la web oficial.
- Usar métodos HTTP: GET, POST, PUT, DELETE.

## Uso de Docker: Construcción y Ejecución de Contenedores

### Instalación de Docker

Para esta práctica, se siguió el **primer paso del tutorial oficial de DigitalOcean** sobre la instalación de Docker en Ubuntu 20.04:

 [How To Install and Use Docker on Ubuntu 20.04 (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

#### Paso 1: Actualizar los paquetes existentes

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Este paso garantiza que el sistema tenga las herramientas necesarias para agregar el repositorio oficial de Docker y para realizar instalaciones seguras.

---

### Comandos utilizados en la práctica

A continuación se detallan los comandos utilizados para construir y ejecutar contenedores en esta práctica:

#### 1. Crear el archivo `Dockerfile`

Dentro de la carpeta `backend` del proyecto, se creó un archivo llamado `Dockerfile` con el siguiente contenido:

```Dockerfile
FROM node:20.1-alpine3.18
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 3000
CMD ["node", "index.js"]
```

#### 2. Construir la imagen Docker

```bash
cd backend
sudo docker build -t node-hello .
```

Este comando construye una imagen Docker con el nombre `node-hello` a partir del `Dockerfile` creado.

#### 3. Ejecutar el contenedor

```bash
sudo docker run -d -p 3000:3000 --name hello --restart on-failure node-hello:latest
```

Este comando crea y ejecuta un contenedor llamado `hello`, mapeando el puerto 3000 del contenedor al puerto 3000 de la máquina host. Además, configura el contenedor para reiniciarse automáticamente en caso de falla.

---

### Verificación

Una vez ejecutado el contenedor, puedes acceder a la aplicación desde el navegador usando la IP pública de la instancia (si está configurado el Elastic IP o la regla de seguridad en AWS). Ya no es necesario ejecutar `node index.js` manualmente, ya que Docker maneja el proceso automáticamente.


