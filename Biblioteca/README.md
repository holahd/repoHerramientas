# Web Service Biblioteca - Node.js + Docker

## Descripción
Este proyecto es un Web Service que permite gestionar libros de una biblioteca. Ofrece un CRUD básico usando Node.js y Express, desplegado dentro de un contenedor Docker.

## Endpoints RESTful

### Obtener todos los libros
- `GET /libros`
- Devuelve todos los libros o se puede filtrar por autor con `?autor=nombre`.

### Obtener un libro por ID
- `GET /libros/:id`
- Devuelve un solo libro. Devuelve 404 si no existe.

### Crear un nuevo libro
- `POST /libros`
- Requiere JSON con `title` y `author`.
```json
{
  "title": "Nuevo Libro",
  "author": "Autor X"
}
```

### Actualizar un libro
- `PUT /libros/:id`
- Actualiza `title` y/o `author`. Devuelve 404 si el libro no existe.

### Eliminar un libro
- `DELETE /libros/:id`
- Elimina el libro. Devuelve 404 si no existe.

## Comandos Docker usados

```bash
# Construir imagen
docker build -t biblioteca .

# Ejecutar contenedor
docker run -d -p 3000:3000 --name biblioteca biblioteca
```
