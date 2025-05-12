import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface PartnersPageProps {
	className?: string
}

const PartnersPage = ({ className }: PartnersPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			PartnersPage
		</div>
	)
}

export default PartnersPage
