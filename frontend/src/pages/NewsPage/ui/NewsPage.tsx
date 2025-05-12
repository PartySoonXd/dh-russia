import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface NewsPageProps {
	className?: string
}

const NewsPage = ({ className }: NewsPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			NewsPage
		</div>
	)
}

export default NewsPage
