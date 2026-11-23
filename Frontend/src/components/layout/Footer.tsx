import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'
import iegLogo from '@/assets/Group 1.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bgLight text-slate-600 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand description */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" aria-label="IEG Home">
              <img src={iegLogo} alt="IEG Logo" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              A global integrated education service provider. Connecting people, institutions, and
              possibilities through a family of specialist brands.
            </p>
          </div>

          {/* DISCOVER */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-purple transition-colors">
                  About our group
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-purple transition-colors">
                  Our solutions
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-brand-purple transition-colors">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-brand-purple transition-colors">
                  Guides & perspectives
                </a>
              </li>
              <li>
                <a href="#presence" className="hover:text-brand-purple transition-colors">
                  Our presence
                </a>
              </li>
            </ul>
          </div>

          {/* OUR BRANDS */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Our Brands
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#iaic" className="hover:text-brand-purple transition-colors">
                  IAIC
                </a>
              </li>
              <li>
                <a href="#uniseek" className="hover:text-brand-purple transition-colors">
                  UniSeek
                </a>
              </li>
              <li>
                <a href="#admissionportal" className="hover:text-brand-purple transition-colors">
                  AdmissionPortal
                </a>
              </li>
              <li>
                <a href="#studypick" className="hover:text-brand-purple transition-colors">
                  StudyPick
                </a>
              </li>
              <li>
                <a href="#universityroad" className="hover:text-brand-purple transition-colors">
                  University Road
                </a>
              </li>
            </ul>
          </div>

          {/* START A CONVERSATION */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Start a Conversation
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-slate-700 font-medium">Uttara, Dhaka</p>
              <p className="text-slate-500">Bangladesh</p>
              <p className="text-slate-800 font-medium pt-1">+880 1844 490180</p>
              <div className="pt-2 space-y-2">
                <a
                  href="https://wa.me/8801844490180"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-brand-purple transition-colors"
                >
                  Connect on WhatsApp <LuArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <div>
                  <Link
                    to="/connect"
                    className="inline-flex items-center gap-1 text-slate-700 hover:text-brand-purple transition-colors"
                  >
                    Contact IEG <LuArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 International Education Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">
              Website terms
            </a>
            <a href="#accessibility" className="hover:text-slate-900 transition-colors">
              Accessibility
            </a>
          </div>
          <p className="text-slate-600 font-medium">One group. Shared possibility.</p>
        </div>
      </div>
    </footer>
  )
}

