import { classNames } from 'shared/lib/classNames/classNames'
import cls from './loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls['lds-dual-ring'], {}, [className])} />
  )
}
