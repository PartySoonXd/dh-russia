import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ProjectPageProps {
	className?: string
}

const ProjectPage = ({ className }: ProjectPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			ProjectPage
		</div>
	)
}

export default ProjectPage
