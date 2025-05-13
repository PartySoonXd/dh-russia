import { Article } from '@entities/Article/api/article.types'
import { ArticleResponseSchema } from '@entities/Article/model/article.schemas'
import { $publicApi } from '@shared/api/api'

export const getArticles = async (): Promise<Article[]> => {
	const res = await $publicApi.get('/api/articles?populate=*')
	const parsed = ArticleResponseSchema.parse(res.data)

	return parsed.data
}
