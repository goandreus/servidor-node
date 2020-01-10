import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req, res)=> {
    res.send('Listo')
});

//resolver
const root = {cliente: () => {
    return {
        "id": 12122212,
        "nombre": "andres",
        "apellido": "chavez",
        "empresa": "everis"
    }
}};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true

}));

app.listen(8000, () => console.log('Servidor funcionando'));