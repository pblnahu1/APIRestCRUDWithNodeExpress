
import express from 'express' // importamos express
// import bodyParser from 'body-parser' // de express, para tomar el cuerpo de la solicitud POST entrante
import userRoutes from './routes/users.js' // rutas de usuarios

const app = express() // creo 'app' usando el objeto express
const PORT = 5000 // establezco en puerto 5000, cambiar si otra app lo está usando

// app.use(bodyParser.json()) // (middleware) especifico q usaré los datos en formato json
app.use(express.json())

app.use('/users', userRoutes) // (middleware) especifico la ruta y le paso los datos de usuarios formateados

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)) // uso el metodo listen en app para q la app escuche las solicitudes entrantes. 
// El método acepta dos cosas: el PUERTO, que es donde escucharíamos las solicitudes de nuestro lado cliente, y una función de devolución de llamada que se activará cuando se configure nuestro servidor

