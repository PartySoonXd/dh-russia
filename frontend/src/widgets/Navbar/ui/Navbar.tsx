import { classNames } from '@shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './navbar.module.scss'
import { ThemeSwitcher } from '@widgets/ThemeSwitcher'
import { LangSwitcher } from '@widgets/LangSwitcher'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className="navbar-widgets">
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<div className={cls['navbar-links']}>
				<AppLink to="/" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
					Лого
				</AppLink>
				<AppLink to="/blog" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
					{t('blog-link')}
				</AppLink>
				<AppLink to="/educational-resources" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
					{t('educational-resources-link')}
				</AppLink>
				<AppLink to="/projects" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
					{t('projects-link')}
				</AppLink>
				<AppLink to="#" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
					{t('profile-link')}
				</AppLink>
			</div>
		</div>
	)
}
