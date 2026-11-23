import React, { useId } from 'react'
import { cn } from '@/lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  isRequired?: boolean
  charCount?: number
  maxCharCount?: number
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, isRequired, charCount, maxCharCount = 2000, id, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id || generatedId
    const errorId = `${textareaId}-error`

    return (
      <div className="w-full text-left">
        <div className="flex items-center justify-between mb-space-2">
          {label && (
            <label htmlFor={textareaId} className="block text-sm font-medium text-slate-700">
              {label}
              {isRequired && <span className="text-brand-purple ml-0.5">*</span>}
            </label>
          )}
          {typeof charCount === 'number' && (
            <span className="text-xs text-slate-400">
              {charCount}/{maxCharCount}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-3.5 py-2.5 text-sm rounded-radius-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-y min-h-[110px]',
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

Textarea.displayName = 'Textarea'
