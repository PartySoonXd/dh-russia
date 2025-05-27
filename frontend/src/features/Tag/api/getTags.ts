import type { Tag } from '@entities/Tag'
import { TagResponseSchema } from '@entities/Tag'
import { $publicApi } from '@shared/api/api'

export const getTags = async (): Promise<Tag[]> => {
	const res = await $publicApi.get('/api/tags', {
		params: {
			fields: ['slug', 'text'],
		},
	})

	const parsed = TagResponseSchema.parse(res.data)

	return parsed.data
}
