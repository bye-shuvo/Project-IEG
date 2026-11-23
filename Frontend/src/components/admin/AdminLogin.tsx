import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface AdminLoginProps {
  onLogin: (key: string) => void
  error?: string
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, error }) => {
  const [key, setKey] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = key.trim()
    if (trimmed) {
      onLogin(trimmed)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-bgLight">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-radius-lg p-6 sm:p-8 shadow-sm">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">Admin Access</h1>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Enter your admin key to view and manage inquiries.
        </p>

        {error && (
          <div
            role="alert"
            className="mb-4 p-3 rounded-radius-md bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <Input
            label="Admin Key"
            isRequired
            type="password"
            autoComplete="current-password"
            placeholder="Enter admin secret key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />

          <Button type="submit" variant="primary" className="w-full" disabled={!key.trim()}>
            Continue
          </Button>
        </form>
      </div>
    </div>
  )
}

