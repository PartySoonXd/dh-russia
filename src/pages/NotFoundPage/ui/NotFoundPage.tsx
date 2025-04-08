import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './not-found-page.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls['not-found-page'], {}, [className])}>
      {t('page-not-found')}
    </div>
  )
}
