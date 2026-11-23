import React, { useState, useEffect, useCallback } from 'react'
import type { InquiryRecord, InquiriesApiResponse, InquiriesPagination } from '@/types/connect.types'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { InquiryTable } from '@/components/admin/InquiryTable'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const STORAGE_KEY = 'ieg_admin_api_key'

const getStoredKey = (): string => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) || ''
  } catch {
    return ''
  }
}

const setStoredKey = (key: string): void => {
  try {
    if (key) {
      sessionStorage.setItem(STORAGE_KEY, key)
    } else {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  } catch {
    // Ignore storage quota/permission errors
  }
}

export const AdminPage: React.FC = () => {
  const [adminKey, setAdminKey] = useState<string>(getStoredKey)
  const [loginError, setLoginError] = useState<string>('')

  const [inquiries, setInquiries] = useState<InquiryRecord[]>([])
  const [pagination, setPagination] = useState<InquiriesPagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
  })

  const [page, setPage] = useState<number>(1)
  const [searchInput, setSearchInput] = useState<string>('')
  const [activeSearch, setActiveSearch] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Ensure noindex meta tag is present while mounted
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    const wasCreated = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'robots'
      document.head.appendChild(meta)
    }
    const previousContent = meta.content
    meta.content = 'noindex'

    return () => {
      if (wasCreated) {
        meta?.remove()
      } else {
        meta.content = previousContent
      }
    }
  }, [])

  const handleLogin = (key: string) => {
    setLoginError('')
    setStoredKey(key)
    setAdminKey(key)
    setPage(1)
  }

  const handleLogout = () => {
    setStoredKey('')
    setAdminKey('')
    setLoginError('')
    setInquiries([])
    setPage(1)
    setSearchInput('')
    setActiveSearch('')
    setExpandedId(null)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveSearch(searchInput.trim())
    setPage(1)
  }

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }, [])

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  // Fetch inquiries when key, page, activeSearch, or refreshTrigger changes
  useEffect(() => {
    if (!adminKey) return

    const controller = new AbortController()

    const fetchInquiries = async () => {
      setIsLoading(true)
      setErrorMessage('')

      const origin = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
      const url = new URL(`${origin}/api/v1/inquiry`, window.location.origin)
      url.searchParams.set('page', String(page))
      url.searchParams.set('limit', '20')
      if (activeSearch) {
        url.searchParams.set('search', activeSearch)
      }

      try {
        const res = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'x-admin-key': adminKey,
          },
          signal: controller.signal,
        })

        if (res.status === 401) {
          setStoredKey('')
          setAdminKey('')
          setLoginError('Invalid admin key')
          return
        }

        if (!res.ok) {
          const errData = await res.json().catch(() => null)
          throw new Error(errData?.message || 'Something went wrong. Please try again later.')
        }

        const json: InquiriesApiResponse = await res.json()
        if (json.success) {
          setInquiries(json.data || [])
          if (json.pagination) {
            setPagination(json.pagination)
          }
        } else {
          throw new Error(json.message || 'Something went wrong. Please try again later.')
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }
        setErrorMessage(
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again later.'
        )
      } finally {
        setIsLoading(false)
      }
    }

    void fetchInquiries()

    return () => {
      controller.abort()
    }
  }, [adminKey, page, activeSearch, refreshTrigger])

  if (!adminKey) {
    return <AdminLogin onLogin={handleLogin} error={loginError} />
  }

  return (
    <div className="min-h-screen bg-brand-bgLight flex flex-col text-slate-800">
      {/* Standalone Admin Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Inquiries
            </h1>
            <span
              aria-live="polite"
              className="text-xs px-2.5 py-0.5 rounded-radius-full bg-slate-100 text-slate-600 font-medium"
            >
              {pagination.total} {pagination.total === 1 ? 'record' : 'records'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              title="Refresh inquiries"
              aria-label="Refresh inquiries"
            >
              Refresh
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              title="Log out"
              aria-label="Log out"
            >
              Log out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Controls: Search & Total Status */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md w-full">
            <div className="flex-1">
              <Input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search name, email, org, topic..."
                aria-label="Search inquiries"
              />
            </div>
            <Button type="submit" variant="primary" size="md">
              Search
            </Button>
            {activeSearch && (
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => {
                  setSearchInput('')
                  setActiveSearch('')
                  setPage(1)
                }}
              >
                Clear
              </Button>
            )}
          </form>

          {/* Results Summary */}
          <div aria-live="polite" className="text-xs sm:text-sm text-slate-500">
            {activeSearch && (
              <span>
                Filtering by &quot;{activeSearch}&quot; ·{' '}
              </span>
            )}
            Page {pagination.page} of {pagination.totalPages}
          </div>
        </div>

        {/* State Display: Loading, Error, Empty, or Table */}
        {isLoading && (
          <div
            aria-live="polite"
            className="p-12 text-center bg-white border border-slate-200 rounded-radius-lg shadow-sm"
          >
            <div className="inline-block w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin mb-3" />
            <p className="text-sm text-slate-600">Loading inquiries...</p>
          </div>
        )}

        {!isLoading && errorMessage && (
          <div
            role="alert"
            className="p-6 bg-red-50 border border-red-200 rounded-radius-lg text-left"
          >
            <h2 className="text-sm font-semibold text-red-900 mb-1">Failed to load inquiries</h2>
            <p className="text-xs sm:text-sm text-red-700 mb-4">{errorMessage}</p>
            <Button type="button" variant="primary" size="sm" onClick={handleRefresh}>
              Retry
            </Button>
          </div>
        )}

        {!isLoading && !errorMessage && inquiries.length === 0 && (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-radius-lg shadow-sm text-slate-500">
            <p className="text-base font-medium text-slate-800 mb-1">
              {activeSearch ? `No results for '${activeSearch}'` : 'No inquiries yet'}
            </p>
            <p className="text-xs text-slate-500">
              {activeSearch
                ? 'Try adjusting your search query or clear the filter.'
                : 'Inquiries submitted through the Connect form will show up here.'}
            </p>
          </div>
        )}

        {!isLoading && !errorMessage && inquiries.length > 0 && (
          <InquiryTable
            inquiries={inquiries}
            expandedId={expandedId}
            onToggleExpand={handleToggleExpand}
          />
        )}

        {/* Pagination Bar */}
        {!isLoading && !errorMessage && inquiries.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-4">
            <div className="text-xs sm:text-sm text-slate-600">
              Page {pagination.page} of {pagination.totalPages} · {pagination.total} total
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={pagination.page <= 1}
              >
                Previous
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(p + 1, pagination.totalPages))}
                disabled={pagination.page >= pagination.totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default AdminPage
