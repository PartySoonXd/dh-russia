import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface BlogPageProps {
	className?: string
}

const BlogPage = ({ className }: BlogPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			BlogPage
		</div>
	)
}

export default BlogPage
