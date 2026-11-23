import React, { useId } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { cn } from '@/lib/cn'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  isRequired?: boolean
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, isRequired, options, id, ...props }, ref) => {
    const generatedId = useId()
    const selectId = id || generatedId
    const errorId = `${selectId}-error`

    return (
      <div className="w-full text-left">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-slate-700 mb-space-2">
            {label}
            {isRequired && <span className="text-brand-purple ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              'w-full appearance-none px-3.5 py-2.5 pr-10 text-sm rounded-radius-md border border-slate-200 bg-white text-slate-900 focus:outline-hidden focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors cursor-pointer',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
            <LuChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
