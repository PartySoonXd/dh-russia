import { z } from 'zod'

export const ArticleSchema = z.object({
	id: z.number(),
})
export const ArticleDtoSchema = z.object({
	id: z.number(),
})
export const ArticleResponseSchema = z.object({
	data: z.array(ArticleDtoSchema),
})
