import { classNames } from '@shared/lib/classNames/classNames'
import cls from './footer.module.scss'
import { AppLink } from '@shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface FooterProps {
	className?: string
}

export const Footer = ({ className }: FooterProps) => {
	const { t } = useTranslation()

	return (
		<footer className={classNames(cls['footer'], {}, [className])}>
			<div className="container-lg">
				<nav className={cls.section}>
					<h3 className={classNames(cls.subtitle, {}, ['h2'])}>Меню</h3>
					<ul className={cls.links}>
						<li className={cls.link}>
							<AppLink to="/" className="p-sm">
								{t('home-link')}
							</AppLink>
						</li>
						<li className={cls.link}>
							<AppLink to="/blog" className="p-sm">
								{t('blog-link')}
							</AppLink>
						</li>
						<li className={cls.link}>
							<AppLink to="/educational-resources" className="p-sm">
								{t('educational-resources-link')}
							</AppLink>
						</li>
						<li className={cls.link}>
							<AppLink to="/projects" className="p-sm">
								{t('projects-link')}
							</AppLink>
						</li>
						<li className={cls.link}>
							<AppLink to="#" className="p-sm">
								{t('profile-link')}
							</AppLink>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}
