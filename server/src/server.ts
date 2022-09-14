import express, { response } from 'express';

const app = express();

// HTTP methods / API RESTful / HTTP Codes
// GET, POST, PUT, PATCH, DELETE

/** Parms
* Query: /ads?page=2&sort=title | filtros, paginação, etc | pensa em compartilhar a URL com alguém
* Route: /ads/5
* Body: {} | Enviar vários dados de uma vez
*/

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id;

    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'},
        { id: 3, name: 'Anúncio 3'},
        { id: 4, name: 'Anúncio 4'},
        { id: 5, name: 'Anúncio 5'}
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    // const adId = request.params.id;

    return response.json([])
})

app.listen(3333)