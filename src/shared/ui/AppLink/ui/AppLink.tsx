import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import cls from './app-link.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls['app-link'], {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  )
}
