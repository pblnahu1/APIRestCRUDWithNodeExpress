// defino endpoints para hacer operaciones comunes en la api

import express from 'express' // importamos express
import { v4 as uuidv4 } from 'uuid'; // importo el generador de id
const router = express.Router() // creo una instancia del enrutador y almaceno en 'router'

// mock database (bd simulada, almaceno en array de usuarios)
const users = [];

// tomando la lista de usuarios desde la mock database (bd simulada)
// configuro una ruta que responde a solicitudes HTTP GET
// `(req, res) => {}` callback function, se ejecuta cuando se hace una solicitud a la ruta GET
router.get('/', (req, res) => {
    res.send(users); // envío respuesta al cliente
})

// activo la ruta mediante una solicitud POST
router.post('/', (req, res) => {
    const user = req.body; // extraigo todos los datos y lo almaceno en la variable
    users.push({...user, id: uuidv4()}); // agrego a la matriz con su id unico
    res.send(`${first_name} has been added to the Database`); // envío la respuesta al cliente
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`${id} deleted successfully from database`);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
  
    const {first_name, last_name, email} = req.body;
  
    const user = users.find((user) => user.id === id)
  
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;
  
    res.send(`User with the ${id} has been updated`)
});

export default router