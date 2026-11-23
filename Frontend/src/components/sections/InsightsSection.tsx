import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import insightsGuideImg from '@/assets/extracted/insights_guide.png'
import insightsClassroomImg from '@/assets/extracted/insights_classroom.png'
import insightsSpiralImg from '@/assets/extracted/insights_spiral.png'

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="mb-10">
          <div className="w-8 h-1 bg-brand-purple mb-4"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            A broader perspective.
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Left Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-radius-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div>
              <div className="overflow-hidden">
                <img
                  src={insightsGuideImg}
                  alt="Students guidance"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  STUDENT GUIDE
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug group-hover:text-brand-purple transition-colors">
                  Your next chapter starts with the right questions.
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs text-slate-500">
              <span>4 Min Read</span>
              <div className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 group-hover:border-brand-purple group-hover:text-brand-purple transition-colors">
                <LuArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Two Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Right Card */}
            <div className="flex-1 bg-white border border-slate-200/90 rounded-radius-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-44 h-32 rounded-radius-md overflow-hidden shrink-0">
                  <img
                    src={insightsClassroomImg}
                    alt="Classroom education"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    INSTITUTION PERSPECTIVE
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug group-hover:text-brand-purple transition-colors">
                    A stronger student journey starts with connection.
                  </h3>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
                <span>4 Min Read</span>
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 group-hover:border-brand-purple group-hover:text-brand-purple transition-colors">
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="flex-1 bg-white border border-slate-200/90 rounded-radius-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-44 h-32 rounded-radius-md overflow-hidden shrink-0">
                  <img
                    src={insightsSpiralImg}
                    alt="Library staircase"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    THE IEG APPROACH
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug group-hover:text-brand-purple transition-colors">
                    Five specialist brands. One shared purpose.
                  </h3>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
                <span>3 Min Read</span>
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 group-hover:border-brand-purple group-hover:text-brand-purple transition-colors">
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
