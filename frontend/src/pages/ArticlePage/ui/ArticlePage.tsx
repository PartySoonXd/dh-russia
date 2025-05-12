import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ArticlePageProps {
	className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			ArticlePage
		</div>
	)
}

export default ArticlePage
