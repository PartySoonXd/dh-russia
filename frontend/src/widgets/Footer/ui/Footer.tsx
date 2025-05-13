import { classNames } from '@shared/lib/classNames/classNames'
import cls from './footer.module.scss'
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface FooterProps {
	className?: string
}

export const Footer = ({ className }: FooterProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls['footer'], {}, [className])}>
			<AppLink to="/about" theme={AppLinkTheme.INVERTED}>
				{t('about-link')}
			</AppLink>
			<AppLink to="/policy" theme={AppLinkTheme.INVERTED}>
				{t('policy-link')}
			</AppLink>
		</div>
	)
}
