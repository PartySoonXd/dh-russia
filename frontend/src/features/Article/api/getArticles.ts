import type { Article } from '@entities/Article'
import { ArticleResponseSchema } from '@entities/Article'
import { $publicApi } from '@shared/api/api'

export const getArticles = async (query: string[]): Promise<Article[]> => {
	const res = await $publicApi.get('/api/articles', {
		params: {
			populate: {
				tags: {
					fields: ['text'],
				},
			},
			filters: {
				tags: {
					slug: {
						$in: query,
					},
				},
			},
			fields: ['text', 'slug', 'title'],
		},
	})

	const parsed = ArticleResponseSchema.parse(res.data)

	return parsed.data
}
