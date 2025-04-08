import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    theme = ButtonTheme.CLEAR,
    className,
    children,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  )
}
