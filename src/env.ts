import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333), // corse tenta converte em número 
})

export const env = envSchema.parse(process.env) 