import { z } from 'zod'

export const TagSchema = z.object({
	id: z.number(),
	text: z.string(),
	slug: z.string(),
})

export const TagResponseSchema = z.object({
	data: z.array(TagSchema),
})
