import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface HomePageProps {
	className?: string
}

const HomePage = ({ className }: HomePageProps) => {
	const { t } = useTranslation('home')

	return (
		<div className={classNames('', {}, [className])}>
			{t('home')}
		</div>
	)
}

export default HomePage
