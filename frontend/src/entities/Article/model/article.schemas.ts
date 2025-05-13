import { z } from 'zod'

export const ArticleSchema = z.object({
	image: z.object({}),
	text: z.string(),
	title: z.string(),
	slug: z.string(),
})
export const ArticleDtoSchema = z.object({
	image: z.object({}),
	text: z.string(),
	title: z.string(),
	slug: z.string(),
})
export const ArticleResponseSchema = z.object({
	data: z.array(ArticleDtoSchema),
})
