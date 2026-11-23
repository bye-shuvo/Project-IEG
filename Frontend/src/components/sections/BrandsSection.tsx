import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import logoIaic from '@/assets/extracted/logo_iaic.png'
import logoUniseek from '@/assets/extracted/logo_uniseek.png'
import logoStudypick from '@/assets/extracted/logo_studypick.png'
import logoAdmissionportal from '@/assets/extracted/logo_admissionportal.png'
import universityRoadShield from '@/assets/University Road Shield Logo 1.png'

export const BrandsSection: React.FC = () => {
  const brands = [
    {
      name: 'IAIC',
      tag: 'STUDENT GUIDANCE',
      headline: 'Global opportunity. Personal guidance.',
      logo: logoIaic,
      linkText: 'Explore IAIC',
      href: '#iaic',
    },
    {
      name: 'UniSeek',
      tag: 'EDUCATION DISCOVERY',
      headline: 'Find the possibilities that fit your future.',
      logo: logoUniseek,
      linkText: 'Explore UniSeek',
      href: '#uniseek',
    },
    {
      name: 'StudyPick',
      tag: 'EDUCATION MARKETPLACE',
      headline: 'Better connections. Shared opportunity.',
      logo: logoStudypick,
      linkText: 'Explore StudyPick',
      href: '#studypick',
    },
    {
      name: 'AdmissionPortal',
      tag: 'APPLICATION TECHNOLOGY',
      headline: 'A clearer path from interest to application.',
      logo: logoAdmissionportal,
      linkText: 'Explore AdmissionPortal',
      href: '#admissionportal',
    },
    {
      name: 'University Road',
      tag: 'ACADEMIC PATHWAYS',
      headline: 'Open a new route to international education.',
      logo: universityRoadShield,
      linkText: 'Explore University Road',
      href: '#universityroad',
    },
  ]

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="mb-12">
          <div className="w-8 h-1 bg-brand-purple mb-4"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Five brands. A world <br />
            of opportunity.
          </h2>
        </div>

        {/* 5 Cards horizontal grid with perfect responsive sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="bg-white border border-slate-200/90 rounded-radius-lg p-6 flex flex-col justify-between hover:border-brand-purple/40 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Brand logo with clean container */}
                <div className="h-12 flex items-center justify-start">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-h-9 max-w-[180px] w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Category tag */}
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                  {b.tag}
                </p>
                {/* Card headline */}
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">{b.headline}</h3>
              </div>

              {/* Explore link */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-purple group-hover:underline">
                <span>{b.linkText}</span>
                <div className="w-5 h-5 rounded-full border border-brand-purple/30 flex items-center justify-center">
                  <LuArrowUpRight className="w-3 h-3 text-brand-purple" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
