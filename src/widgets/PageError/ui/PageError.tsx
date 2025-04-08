import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './page-error.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadHandler = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls['page-error'], {}, [className])}>
      <h1>{t('something-went-wrong')}</h1>
      <Button
        onClick={reloadHandler}
        theme={ButtonTheme.PRIMARY}
        className={cls['reload-button']}
      >
        {t('reload-page')}
      </Button>
    </div>
  )
}
