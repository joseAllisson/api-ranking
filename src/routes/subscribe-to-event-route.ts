import { z } from "zod";
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
    app.post('/subscriptions', {
        schema: {
            summary: 'Subscribe to an event',
            tags: ['subscriptions'],
            body: z.object({
                name: z.string(),
                email: z.string(),
            }),
            reponse: {
                201: z.object({
                    name: z.string(),
                    email: z.string(),
                }),
            },
        },
    }, async (request, reply) => {
        const { name, email } = request.body

        // criação da inscrição no banco de dados  

        return reply.status(201).send({
            name,
            email,
        })
    })

};