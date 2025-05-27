import { z } from 'zod'

export const ArticleSchema = z.object({
	id: z.number(),
	text: z.string(),
	title: z.string(),
	slug: z.string(),
})

export const ArticleDtoSchema = z.object({
	id: z.number(),
	text: z.string(),
	title: z.string(),
	slug: z.string(),
})

export const ArticleResponseSchema = z.object({
	data: z.array(ArticleDtoSchema),
})
