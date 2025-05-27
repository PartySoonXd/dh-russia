import { Article, ArticleDto } from './article.types'

export const articleMapper = (dto: ArticleDto): Article => {
	return {
		id: dto.id,
		slug: dto.slug,
		text: dto.text,
		title: dto.title,
	}
}
