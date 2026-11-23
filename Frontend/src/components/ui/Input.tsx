import React, { useId } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  isRequired?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, isRequired, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const errorId = `${inputId}-error`

    return (
      <div className="w-full text-left">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-space-2">
            {label}
            {isRequired && <span className="text-brand-purple ml-0.5">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-3.5 py-2.5 text-sm rounded-radius-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
