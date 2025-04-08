import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button/ui/Button'

import DarkIcon from 'shared/assets/icons/dark-theme-icon.svg'
import LightIcon from 'shared/assets/icons/light-theme-icon.svg'
import cls from './theme-switcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls['theme-switcher'], {}, [className])}
      onClick={toogleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon fill="#ffffff" /> : <DarkIcon fill="#2f2f2f" />}
    </Button>
  )
}
