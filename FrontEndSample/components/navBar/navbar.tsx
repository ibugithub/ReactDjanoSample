'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProfileModal } from '../accounts/profileModal';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              React+Django
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/generate-tokens" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Dashboard
            </Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Leaderboard
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              About
            </Link>
            {/* Login Button */}
            <ProfileModal/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/generate-tokens" className="block text-gray-300 hover:text-blue-400 px-3 py-2">
              Dashboard
            </Link>
            <Link href="/leaderboard" className="block text-gray-300 hover:text-blue-400 px-3 py-2">
              Leaderboard
            </Link>
            <Link href="/earn-tokens" className="block text-gray-300 hover:text-blue-400 px-3 py-2">
              Earn Tokens
            </Link>
            <div className="pt-4 border-t border-gray-700">
              <ProfileModal />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
