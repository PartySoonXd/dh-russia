import { Article, ArticleDto } from './article.types'

export const articleMapper = (dto: ArticleDto): Article => {
	return {
		image: dto.image,
		slug: dto.slug,
		text: dto.text,
		title: dto.title,
	}
}
