import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface PolicyPageProps {
	className?: string
}

const PolicyPage = ({ className }: PolicyPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			PolicyPage
		</div>
	)
}

export default PolicyPage
