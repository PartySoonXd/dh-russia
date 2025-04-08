import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls['navbar-links']}>
        <AppLink to="/" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
          {t('Home')}
        </AppLink>
        <AppLink to="/about" className={cls['navbar-links-item']} theme={AppLinkTheme.INVERTED}>
          {t('About')}
        </AppLink>
      </div>
    </div>
  )
}
