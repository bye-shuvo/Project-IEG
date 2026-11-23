import React from 'react'
import type { InquiryRecord } from '@/types/connect.types'

interface InquiryTableProps {
  inquiries: InquiryRecord[]
  expandedId: string | null
  onToggleExpand: (id: string) => void
}

const formatDate = (isoString: string): string => {
  try {
    const d = new Date(isoString)
    if (isNaN(d.getTime())) return isoString
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(d)
  } catch {
    return isoString
  }
}

export const InquiryTable: React.FC<InquiryTableProps> = ({
  inquiries,
  expandedId,
  onToggleExpand,
}) => {
  return (
    <div>
      {/* Desktop & Tablet Table (md and up) */}
      <div className="hidden md:block overflow-x-auto bg-white border border-slate-200 rounded-radius-lg shadow-sm">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-medium">
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Email</th>
              <th scope="col" className="px-4 py-3">Organization</th>
              <th scope="col" className="px-4 py-3">Interested in</th>
              <th scope="col" className="px-4 py-3">Goals</th>
              <th scope="col" className="px-4 py-3 whitespace-nowrap">Submitted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inquiries.map((inquiry) => {
              const isExpanded = expandedId === inquiry._id
              return (
                <tr
                  key={inquiry._id}
                  onClick={() => onToggleExpand(inquiry._id)}
                  aria-expanded={isExpanded}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onToggleExpand(inquiry._id)
                    }
                  }}
                  className="cursor-pointer hover:bg-slate-50/80 transition-colors focus-visible:outline-hidden focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset"
                >
                  <td className="px-4 py-3.5 font-medium text-slate-900 align-top">
                    {inquiry.name}
                  </td>
                  <td className="px-4 py-3.5 text-slate-600 align-top">
                    <a
                      href={`mailto:${inquiry.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-brand-purple underline hover:text-brand-purple/80 transition-colors"
                    >
                      {inquiry.email}
                    </a>
                  </td>
                  <td className="px-4 py-3.5 text-slate-600 align-top">
                    {inquiry.organization || '-'}
                  </td>
                  <td className="px-4 py-3.5 text-slate-700 align-top">
                    <span className="inline-block px-2.5 py-0.5 text-xs rounded-radius-full bg-slate-100 text-slate-700">
                      {inquiry.interestedIn}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-700 max-w-md align-top">
                    <p
                      className={
                        isExpanded
                          ? 'whitespace-pre-wrap break-words text-slate-900'
                          : 'line-clamp-2 break-words text-slate-600'
                      }
                    >
                      {inquiry.goals}
                    </p>
                    <span className="text-xs text-brand-purple mt-1 inline-block">
                      {isExpanded ? 'Click row to collapse' : 'Click row to expand'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap text-xs align-top">
                    {formatDate(inquiry.createdAt)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards (below md) */}
      <div className="block md:hidden space-y-3">
        {inquiries.map((inquiry) => {
          const isExpanded = expandedId === inquiry._id
          return (
            <div
              key={inquiry._id}
              onClick={() => onToggleExpand(inquiry._id)}
              aria-expanded={isExpanded}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onToggleExpand(inquiry._id)
                }
              }}
              className="bg-white border border-slate-200 rounded-radius-md p-4 text-left shadow-sm cursor-pointer hover:border-slate-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-purple transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-slate-900 text-sm">{inquiry.name}</h3>
                <span className="text-xs text-slate-400 shrink-0">
                  {formatDate(inquiry.createdAt)}
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-1.5 mb-3">
                <div>
                  <span className="text-slate-400 font-medium">Email: </span>
                  <a
                    href={`mailto:${inquiry.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-brand-purple underline hover:text-brand-purple/80"
                  >
                    {inquiry.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">Organization: </span>
                  <span>{inquiry.organization || '-'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">Interested in: </span>
                  <span className="inline-block mt-0.5 px-2 py-0.5 rounded-radius-full bg-slate-100 text-slate-700">
                    {inquiry.interestedIn}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-2">
                <p className="text-xs font-medium text-slate-500 mb-1">Goals:</p>
                <p
                  className={
                    isExpanded
                      ? 'whitespace-pre-wrap break-words text-xs text-slate-900'
                      : 'line-clamp-2 break-words text-xs text-slate-600'
                  }
                >
                  {inquiry.goals}
                </p>
                <span className="text-[11px] text-brand-purple mt-1 inline-block">
                  {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

