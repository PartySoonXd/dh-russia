import { classNames } from '@shared/lib/classNames/classNames'
import { AppLink } from '@shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './header.module.scss'
import LogoWithText from '@shared/assets/images/logo-with-text.svg'

interface HeaderProps {
	className?: string
}

export const Header = ({ className }: HeaderProps) => {
	const { t } = useTranslation()

	return (
		<header className={classNames(cls.header, {}, [className])}>
			<div className="container-lg">
				<nav className={cls['header-nav']}>
					<div className={cls['header-nav-logo']}>
						<AppLink to="/">
							<LogoWithText />
						</AppLink>
					</div>
					<ul className={cls['header-nav-links']}>
						<li className={cls['header-nav-links-item']}>
							<AppLink to="/blog" className="h2">
								{t('blog-link')}
							</AppLink>
						</li>
						<li className={cls['header-nav-links-item']}>
							<AppLink to="/educational-resources" className="h2">
								{t('educational-resources-link')}
							</AppLink>
						</li>
						<li className={cls['header-nav-links-item']}>
							<AppLink to="/projects" className="h2">
								{t('projects-link')}
							</AppLink>
						</li>
						<li className={cls['header-nav-links-item']}>
							<AppLink to="#" className="h2">
								{t('profile-link')}
							</AppLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
