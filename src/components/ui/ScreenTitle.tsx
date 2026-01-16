import { HTMLAttributes } from 'react'

interface ScreenTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export const ScreenTitle = ({ title, subtitle, className = '', ...props }: ScreenTitleProps) => {
  return (
    <div className={`mb-6 ${className}`} {...props}>
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">{title}</h1>
      {subtitle && (
        <p className="text-base md:text-lg text-muted">{subtitle}</p>
      )}
    </div>
  )
}
