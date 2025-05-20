const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const libros = [
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



app.get('/libros',(req, res) => {
    res.json(libros)
})

app.get('/libros/:id', (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id))
    if (!libro) return res.status(404).send('Libro no encontrado')
    res.json(libro)
})

app.post('/libros', (req, res) => {

const libronuevo = {

    id: libros.length + 1,
    title: req.body.title,
    author: req.body.author
}
    libros.push(libronuevo)
    res.status(201).json(libronuevo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})