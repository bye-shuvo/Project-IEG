import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import journeyDeskImg from '@/assets/extracted/journey_desk.png'

export const JourneySection: React.FC = () => {
  const steps = [
    {
      number: '01 | DISCOVER',
      title: "Explore what's next.",
      desc: 'Find and compare education options through UniSeek.',
    },
    {
      number: '02 | CONNECT',
      title: 'Get a clearer view',
      desc: 'Discuss your study goals and next steps with IAIC.',
    },
    {
      number: '03 | APPLY',
      title: 'Move with purpose',
      desc: 'Explore the application journey with AdmissionPortal.',
    },
    {
      number: '04 | PROGRESS',
      title: 'Open a new route',
      desc: 'Discover academic pathways through University Road.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Top Header + Desk image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              From a first idea to your <br />
              next chapter.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Every journey is different. Our brands offer distinct starting points, so students
              and partners can find the support that matches their goals.
            </p>
            <div className="pt-2">
              <a
                href="#solutions"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand-purple transition-colors"
              >
                Find your starting point <LuArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-radius-lg overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={journeyDeskImg}
                alt="Workspace with laptop"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4-step horizontal timeline with orange/amber connector line */}
        <div className="relative pt-6">
          <div className="hidden md:block absolute top-[30px] left-0 right-0 h-[2px] bg-orange-400"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div key={st.number} className="relative pt-6 space-y-2">
                {/* Node dot on the timeline */}
                <div className="hidden md:block absolute top-0 left-0 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-100"></div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {st.number}
                </p>
                <h3 className="text-base font-semibold text-slate-900">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

