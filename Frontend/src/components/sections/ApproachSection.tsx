import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

export const ApproachSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-radius-xl p-8 sm:p-12 lg:p-16">
          {/* Top intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-200">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                A connected approach <br />
                to a world of <span className="text-brand-purple">education.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are International Education Group — a family of specialist education brands
                connecting students, institutions, and partners. We bring discovery, personal
                guidance, application technology, and academic pathways into one wider ecosystem.
              </p>
              <div>
                <a
                  href="#brands"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand-purple transition-colors"
                >
                  Get to know IEG <LuArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 Numbered points below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="flex items-start gap-4">
              <span className="text-3xl sm:text-4xl font-bold text-brand-purple leading-none">5</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Specialist brands.</p>
                <p className="text-sm text-slate-500">Complementary expertise.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl sm:text-4xl font-bold text-brand-purple leading-none">3</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Connected audiences.</p>
                <p className="text-sm text-slate-500">Students. Institutions. Partners.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl sm:text-4xl font-bold text-brand-purple leading-none">1</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Shared purpose.</p>
                <p className="text-sm text-slate-500">More possibility through education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

