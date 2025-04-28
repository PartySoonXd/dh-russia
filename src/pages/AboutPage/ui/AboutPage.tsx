import { useTranslation } from 'react-i18next'
import { classNames } from '@shared/lib/classNames/classNames'

interface AboutPageProps {
	className?: string
}

const AboutPage = ({ className }: AboutPageProps) => {
	const { t } = useTranslation('about')

	return (
		<div className={classNames('', {}, [className])}>
			<h1>{t('about')}</h1>
		</div>
	)
}

export default AboutPage
