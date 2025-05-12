import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface EventPageProps {
	className?: string
}

const EventPage = ({ className }: EventPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			EventPage
		</div>
	)
}

export default EventPage
