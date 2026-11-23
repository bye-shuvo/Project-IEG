import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuArrowUpRight, LuMenu, LuX } from 'react-icons/lu'
import iegLogo from '@/assets/Group 1.svg'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Our brands', href: '/#brands' },
    { label: 'About IEG', href: '/#about' },
    { label: 'Insights', href: '/#insights' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top micro bar */}
      <div className="bg-[#0e1726] text-slate-300 text-xs py-2 px-6 sm:px-12 flex justify-between items-center tracking-wider">
        <span className="font-medium tracking-wide">GLOBAL EDUCATION, CONNECTED.</span>
        <div className="flex items-center gap-4">
          <a
            href="#students"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            For students <LuArrowUpRight className="w-3 h-3" />
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="#partners"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            For institutions & partners <LuArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-[1440px] mx-auto px-6 sm:px-12 py-4 flex items-center justify-between border-b border-slate-100">
        <Link to="/" className="flex items-center gap-2" aria-label="IEG Home">
          <img src={iegLogo} alt="IEG Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-brand-purple transition-colors relative py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/connect"
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-radius-full text-sm font-medium transition-all ${
              location.pathname === '/connect'
                ? 'bg-brand-purple text-white ring-2 ring-brand-purple/20 shadow-sm'
                : 'bg-brand-purple text-white hover:bg-brand-purple/90'
            }`}
          >
            Let's connect
            <LuArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-brand-purple focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-brand-purple py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Link
              to="/connect"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-radius-full text-sm font-medium bg-brand-purple text-white"
            >
              Let's connect
              <LuArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
