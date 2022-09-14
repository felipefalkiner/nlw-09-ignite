import express, { response } from 'express';
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/covert-minutes-to-hour-string';

const app = express();

app.use(express.json()) // para o express entender que estamos trabalhando com JSON
app.use(cors())

const prisma = new PrismaClient({
    // log: ['query']
});


// HTTP methods / API RESTful / HTTP Codes
// GET, POST, PUT, PATCH, DELETE

/** Parms
* Query: /ads?page=2&sort=title | filtros, paginação, etc | pensa em compartilhar a URL com alguém
* Route: /ads/5
* Body: {} | Enviar vários dados de uma vez
*/

app.get('/games',  async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    Ad: true
                }
            }
        }
    })

    return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body = request.body;

    // Validação -> lib zod (zod.dev)

    const ad = await prisma.ad.create({
        data: {
        gameId,
        name: body.name,
        yearsPlaying: body.yearsPlaying,
        discord: body.discord,
        weekDays: body.weekDays.join(','),
        hourStart: convertHourStringToMinutes(body.hourStart),
        hourEnd: convertHourStringToMinutes(body.hourEnd),
        useVoiceChannel: body.useVoiceChannel,
        }
    })

    return response.status(201).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            gameId: true,
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
        },
        where: {gameId: gameId}, // poderia passar apenas gameId pois ambos os params tem o mesmo nome
        orderBy: {
            createdAt: 'desc',
        } 
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: { 
            id: adId
        }
    })

    return response.json({discord: ad.discord})
})

app.listen(3333)