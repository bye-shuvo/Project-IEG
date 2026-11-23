import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuGraduationCap } from 'react-icons/lu'
import heroStudentsImg from '@/assets/extracted/hero_students.png'
import brandLogosStrip from '@/assets/extracted/brand_logos_strip.png'

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-12 pb-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.12]">
              Connecting people. <br />
              <span className="text-brand-purple">Expanding possibilities.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              From finding the right program to opening a new academic pathway, our brands bring
              every part of the education journey closer together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#brands"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-radius-full text-sm font-medium bg-brand-purple text-white hover:bg-brand-purple/90 transition-all shadow-sm"
              >
                Explore our brands <LuArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-radius-full text-sm font-medium border border-slate-300 text-slate-800 hover:bg-slate-50 transition-all"
              >
                Partner with IEG <LuArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image with floating badge */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative max-w-[620px] w-full">
              <img
                src={heroStudentsImg}
                alt="Students collaborating"
                className="w-full h-auto object-contain"
                width={620}
                height={400}
              />

              {/* Floating pill badge */}
              <div className="absolute -bottom-4 left-6 sm:left-12 bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-radius-full px-5 py-2.5 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <LuGraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-800">Your next chapter.</p>
                  <p className="text-[11px] text-slate-500">A world of possibility.</p>
                </div>
                <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center ml-2 text-slate-600">
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-slate-100 text-center">
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-brand-purple tracking-tight">100M</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Student visitors per year</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-brand-purple tracking-tight">70k+</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Direct enrollment</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-brand-purple tracking-tight">5000</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Partner</p>
          </div>
        </div>

        {/* Brand logos strip */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
            SPECIALIST BRANDS. SHARED PURPOSE.
          </p>
          <div className="flex justify-center items-center py-4 overflow-x-auto">
            <img
              src={brandLogosStrip}
              alt="UniSeek, IAIC, StudyPick, AdmissionPortal, University Road logos"
              className="max-h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

