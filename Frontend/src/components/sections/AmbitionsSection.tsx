import React, { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import ambitionsLibraryImg from '@/assets/extracted/ambitions_library.png'

export const AmbitionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'institutions' | 'students' | 'partners'>('institutions')

  const tabOptions = [
    { id: 'institutions', label: 'For institutions' },
    { id: 'students', label: 'For students' },
    { id: 'partners', label: 'For education partners' },
  ] as const

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Title */}
        <div className="mb-10">
          <div className="w-8 h-1 bg-brand-purple mb-4"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Different ambitions. <br />
            The right connections.
          </h2>
        </div>

        {/* Audience filter tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-radius-full text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-purple text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left image with overlay pill */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-radius-lg overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={ambitionsLibraryImg}
                alt="Students discussing in library"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay pill */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-radius-full px-5 py-2.5 shadow-md flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-800">
                  Meaningful partnerships. Shared ambition.
                </span>
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-700">
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right text points */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Reach the right students. <br />
              Build meaningful connections.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bring your institution closer to prospective learners through program discovery,
              student guidance, application technology, and academic pathways.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-brand-purple">01</span>
                <p className="text-sm text-slate-700 font-medium">
                  Make your programs easier to discover
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-brand-purple">02</span>
                <p className="text-sm text-slate-700 font-medium">
                  Connect student interest with personal guidance
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-brand-purple">03</span>
                <p className="text-sm text-slate-700 font-medium">
                  Explore a focused or group-wide partnership
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#partner"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand-purple transition-colors"
              >
                Explore institution partnership <LuArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

