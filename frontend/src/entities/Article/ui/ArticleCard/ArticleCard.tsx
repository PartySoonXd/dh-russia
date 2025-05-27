import { classNames } from '@shared/lib/classNames/classNames'
import cls from './article-card.module.scss'
import { AppLink } from '@shared/ui/AppLink/ui/AppLink'

interface ArticleCardProps {
	className?: string
	slug: string
	title: string
	text: string
}

export const ArticleCard = (props: ArticleCardProps) => {
	const {
		className,
		slug,
		title,
		text,
	} = props

	return (
		<div className={classNames(cls['article-card'], {}, [className])}>
			<AppLink to={`/article/${slug}`}>
				{title}
			</AppLink>
		</div>
	)
}
