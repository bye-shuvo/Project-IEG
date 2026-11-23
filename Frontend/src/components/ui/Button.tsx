import React from 'react'
import { cn } from '@/lib/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-radius-full'

    const variants = {
      primary: 'bg-brand-purple text-white hover:bg-brand-purple/90 active:bg-brand-purple/95',
      secondary: 'bg-brand-bgLight text-brand-dark hover:bg-slate-200 active:bg-slate-300',
      outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100',
      ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200',
      dark: 'bg-brand-dark text-white hover:bg-brand-darkSecondary active:bg-black',
    }

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
