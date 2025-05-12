import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface EducationalResourcesPageProps {
	className?: string
}

const EducationalResourcesPage = ({ className }: EducationalResourcesPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			EducationalResourcesPage
		</div>
	)
}

export default EducationalResourcesPage
