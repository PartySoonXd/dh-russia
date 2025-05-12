import { Article, ArticleDto } from './article.types'

export const articleMapper = (dto: ArticleDto): Article => {
	return {
		id: dto.id,
	}
}
