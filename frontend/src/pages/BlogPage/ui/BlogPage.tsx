import { ArticleCard } from '@entities/Article'
import { useGetArticles } from '@features/Article'
import { classNames } from '@shared/lib/classNames/classNames'
import { TagFilters } from '@widgets/Filter'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface BlogPageProps {
	className?: string
}

const BlogPage = ({ className }: BlogPageProps) => {
	const { t } = useTranslation()
	const [query, setQuery] = useState<string[]>([])
	const { data } = useGetArticles(query)

	return (
		<div className={classNames('', {}, [className])}>
			<h1>BlogPage</h1>
			<TagFilters setQuery={setQuery} />
			{data && data.map((article) => {
				return (
					<ArticleCard
						slug={article.slug}
						text={article.text}
						title={article.title}
						key={article.id}
					/>
				)
			})}
		</div>
	)
}

export default BlogPage
