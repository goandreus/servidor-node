import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req, res)=> {
    res.send('Listo')
});

class Cliente{
    constructor (id, {
        nombre,apellido,empresa,email
    }){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email= email;
    }
}

const clienteDB = {};

//resolver
const root = {
    cliente: () => {
    return {
        "id": 12122212,
        "nombre": "andres",
        "apellido": "chavez",
        "empresa": "everis",
        "email": "correo@correo.com"
    }
},
    crearCliente : ({input}) =>{
        const id = require('crypto').randomBytes(10).toString('hex');
        clienteDB[id] = input;
        return new Cliente(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true

}));

app.listen(8000, () => console.log('Servidor funcionando'));