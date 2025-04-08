import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/ui/Button'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import cls from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const collapseHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        onClick={collapseHandler}
        data-testid="sidebar-toggle"
      >
        {t('collapse')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.theme} />
        <LangSwitcher />
      </div>
    </aside>
  )
}
