import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <p className="text-sm font-bold text-brand-purple tracking-wider uppercase mb-2">404 Error</p>
      <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-slate-600 max-w-md mb-8 text-sm sm:text-base">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-radius-full text-sm font-medium bg-brand-purple text-white hover:bg-brand-purple/90 transition-all shadow-sm"
      >
        <LuArrowLeft className="w-4 h-4" />
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound

