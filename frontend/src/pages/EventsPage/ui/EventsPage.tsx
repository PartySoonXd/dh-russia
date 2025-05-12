import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface EventsPageProps {
	className?: string
}

const EventsPage = ({ className }: EventsPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			EventsPage
		</div>
	)
}

export default EventsPage
