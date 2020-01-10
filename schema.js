import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Query{
        hola: String
    }
`);

export default schema;