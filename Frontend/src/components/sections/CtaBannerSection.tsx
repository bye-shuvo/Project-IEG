import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'

export const CtaBannerSection: React.FC = () => {
  return (
    <section id="partner" className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-[#0e1e38] text-white px-8 sm:px-16 py-12 sm:py-16">
          {/* Decorative concentric arcs on the right */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-80 sm:w-96 overflow-hidden opacity-30 flex items-center justify-end">
            <svg viewBox="0 0 300 300" className="w-[450px] h-[450px] translate-x-24 text-slate-400" fill="none">
              <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="12" />
              <circle cx="150" cy="150" r="110" stroke="currentColor" strokeWidth="12" />
              <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="12" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Let's move education forward.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Whether you're finding your path or helping others find theirs, there's a place for you
              in our education ecosystem.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-radius-full text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
              >
                Partner with IEG <LuArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/connect"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-slate-200 transition-colors py-2"
              >
                Speak with our team <LuArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

