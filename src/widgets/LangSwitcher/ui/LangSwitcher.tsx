import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/ui/Button'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const languageHandler = (): Promise<TFunction> => {
    return i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={languageHandler}
      type="button"
    >
      {t('language')}
    </Button>
  )
}
