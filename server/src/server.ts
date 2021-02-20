import express, { response } from 'express';

const app = express();

const users = [
    'Pedro',
    'Diego',
    'Rafael',
    'João',
    'Robson',
    'Cleiton'
]

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    return response.json(users);

});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: "Pedro",
        email: "pedro@gmail.com"
    };

    return response.json(user);
});

app.listen(3333);