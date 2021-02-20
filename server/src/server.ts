import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Pedro');

    response.json([
        'Pedro',
        'Diego',
        'Rafael',
        'João'
    ]);

});

app.listen(3333);