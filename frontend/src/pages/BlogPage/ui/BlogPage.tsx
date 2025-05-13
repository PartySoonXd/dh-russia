import { useGetArticles } from '@features/Article'
import { classNames } from '@shared/lib/classNames/classNames'
import { AppLink } from '@shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface BlogPageProps {
	className?: string
}

const BlogPage = ({ className }: BlogPageProps) => {
	const { t } = useTranslation()
	const { data } = useGetArticles()

	console.log(data)

	return (
		<div className={classNames('', {}, [className])}>
			<h1>BlogPage</h1>
			{data && data.map((article) => {
				return (
					<AppLink to={`/article/${article.slug}`}>
						{article.title}
					</AppLink>
				)
			})}
		</div>
	)
}

export default BlogPage
