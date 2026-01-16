import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ interactive = false, className = '', children, ...props }, ref) => {
    const baseClasses = 'bg-surface border border-border/50 rounded-[20px] shadow-sm transition-all duration-300'
    const interactiveClasses = interactive 
      ? 'hover:shadow-lg hover:border-accent/30 hover:bg-surface/80 cursor-pointer active:scale-[0.99]' 
      : ''
    
    return (
      <div
        ref={ref}
        className={`${baseClasses} ${interactiveClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
