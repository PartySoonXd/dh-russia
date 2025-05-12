import { classNames } from '@shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ProjectsPageProps {
	className?: string
}

const ProjectsPage = ({ className }: ProjectsPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames('', {}, [className])}>
			ProjectsPage
		</div>
	)
}

export default ProjectsPage
