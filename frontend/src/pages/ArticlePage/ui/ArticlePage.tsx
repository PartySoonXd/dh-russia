import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

interface ArticlePageProps {
	className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
	const { t } = useTranslation()
	const params = useParams()
	console.log(params)

	return (
		<div className={classNames('', {}, [className])}>
			ArticlePage
		</div>
	)
}

export default ArticlePage
