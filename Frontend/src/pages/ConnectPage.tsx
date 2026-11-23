import React from 'react'
import { LuArrowUpRight, LuPhone, LuMapPin, LuBuilding2 } from 'react-icons/lu'
import { FaQuoteLeft } from 'react-icons/fa'
import { ConnectForm } from '@/components/forms/ConnectForm'
import connectBuildingImg from '@/assets/extracted/connect_building.png'

export const ConnectPage: React.FC = () => {
  return (
    <div className="w-full bg-white pb-24">
      {/* Hero banner */}
      <section className="pt-12 pb-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                Your next possibility <br />
                <span className="text-brand-purple">starts here.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
                Tell us what you want to explore. We'll help you connect with the relevant part of
                the IEG family.
              </p>
            </div>

            {/* Right Building graphic inside organic blob */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="max-w-[580px] w-full">
                <img
                  src={connectBuildingImg}
                  alt="IEG Headquarters building"
                  className="w-full h-auto object-contain"
                  width={580}
                  height={380}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Connect Content: Details + Form */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-10 text-left">
            {/* Quote badge & heading */}
            <div className="space-y-3">
              <FaQuoteLeft className="w-6 h-6 text-brand-purple" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                A real conversation. <br />
                A relevant connection.
              </h2>
            </div>

            {/* Phone & WhatsApp */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-purple font-medium text-xs">
                <LuPhone className="w-3.5 h-3.5" />
                <span>Phone & WhatsApp</span>
              </div>
              <p className="text-lg font-semibold text-slate-900">+880 1844 490180</p>
              <div>
                <a
                  href="https://wa.me/8801844490180"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline"
                >
                  Chat with IEG on WhatsApp <LuArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bangladesh contact point */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-purple font-medium text-xs">
                <LuMapPin className="w-3.5 h-3.5" />
                <span>Bangladesh contact point</span>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed">
                <p>House 20, Road 13, Sector 07</p>
                <p>Uttara, Dhaka 1230</p>
                <p>Bangladesh</p>
              </div>
              <div className="pt-2 text-xs text-slate-500 leading-relaxed">
                <p>In-person student support through IAIC.</p>
                <p>Please contact us before visiting.</p>
              </div>
            </div>

            {/* Looking for a particular brand */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-brand-purple font-medium text-xs">
                <LuBuilding2 className="w-3.5 h-3.5" />
                <span>Looking for a particular brand?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                Explore each brand's profile to understand its role and find your next step.
              </p>
              <div className="pt-1">
                <a
                  href="/#brands"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline"
                >
                  Meet our brands <LuArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ConnectForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConnectPage

