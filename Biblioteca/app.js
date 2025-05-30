const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let libros = [
  { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { id: 3, title: '1984', author: 'George Orwell' },
  { id: 4, title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
  { id: 5, title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
  { id: 6, title: 'Rayuela', author: 'Julio Cortázar' },
  { id: 7, title: 'La casa de los espíritus', author: 'Isabel Allende' },
  { id: 8, title: 'El túnel', author: 'Ernesto Sabato' },
  { id: 9, title: 'Ficciones', author: 'Jorge Luis Borges' },
  { id: 10, title: 'Pedro Páramo', author: 'Juan Rulfo' }
]

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Obtener todos los libros o filtrar por autor
app.get('/libros', (req, res) => {
  const { autor } = req.query
  if (autor) {
    const filtrados = libros.filter(libro => libro.author.toLowerCase() === autor.toLowerCase())
    return res.json(filtrados)
  }
  res.json(libros)
})

// Obtener un libro por ID
app.get('/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id))
  if (!libro) return res.status(404).send('Libro no encontrado')
  res.json(libro)
})

// Crear un nuevo libro
app.post('/libros', (req, res) => {
  const { title, author } = req.body
  if (!title || !author) {
    return res.status(400).json({ mensaje: 'Título y autor son requeridos' })
  }
  const libronuevo = {
    id: libros.length > 0 ? libros[libros.length - 1].id + 1 : 1,
    title,
    author
  }
  libros.push(libronuevo)
  res.status(201).json(libronuevo)
})

// Actualizar un libro por ID
app.put('/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id))
  if (!libro) return res.status(404).json({ mensaje: 'Libro no encontrado' })

  const { title, author } = req.body
  if (title) libro.title = title
  if (author) libro.author = author
  res.json(libro)
})

// Eliminar un libro por ID
app.delete('/libros/:id', (req, res) => {
  const index = libros.findIndex(l => l.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ mensaje: 'Libro no encontrado' })

  libros.splice(index, 1)
  res.status(204).send()
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
