import { z } from 'zod'

export const OrganizationSchema = z.object({
	id: z.number(),
	regDate: z.string(),
	name: z.string(),
	legalForm: z.string(),
})

export const OrganizationResponseSchema = z.object({
	data: z.array(OrganizationSchema),
})
