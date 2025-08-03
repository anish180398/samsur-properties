'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/services/solar-installation', label: 'Solar Installation' },
    { href: '/services/banking', label: 'Banking Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20'
            : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
        style={{
          transform: scrolled ? 'translateZ(0)' : 'translateZ(0)',
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-blue-500 animate-gradient-x" />
        
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo Section with 3D Effects */}
            <Link href="/" className="flex items-center gap-4 group perspective-1000">
              <div className="relative transform-gpu group-hover:rotate-y-12 transition-transform duration-700">
                {/* Floating backdrop */}
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                
                {/* Logo container with depth */}
                <div className="relative  p-1   transform-gpu group-hover:scale-110 transition-all duration-500">
                  <Image
                    src={Logo}
                    alt="Samsur Properties"
                    width={65}
                    height={65}
                    className="relative z-10"
                  />
                
                </div>
              </div>
              
              {/* Text with 3D depth */}
              <div className="relative group-hover:translate-x-1 transition-transform duration-500">
                <div className="absolute inset-0 translate-x-1 translate-y-1">
                  <span className="text-2xl font-black text-slate-300/30 tracking-tight blur-sm">
                    Samsur Properties
                  </span>
                 
                </div>
                <div className="relative z-10">
                  <span className="text-2xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                    Samsur Properties
                  </span>
                 
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation with 3D Cards */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group perspective-1000"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Floating background */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm transform group-hover:scale-110" />
                  
                  {/* Main button with glass morphism */}
                  <div
                    className={`relative px-5 py-3 text-sm font-semibold transition-all duration-500 rounded-xl transform-gpu group-hover:translate-y-[-2px] group-hover:rotate-x-5 ${
                      pathname === item.href
                        ? 'bg-gradient-to-br from-blue-500/90 to-purple-500/90 text-white shadow-2xl shadow-blue-500/25 backdrop-blur-xl border border-white/20'
                        : 'bg-white/60 backdrop-blur-md text-slate-700 hover:bg-white/80 shadow-lg hover:shadow-xl border border-white/30 group-hover:border-white/50'
                    }`}
                  >
                    {/* Inner glow for active state */}
                    {pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                    )}
                    
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                      pathname === item.href 
                        ? 'w-8 h-0.5 bg-white/60' 
                        : 'w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-8'
                    } rounded-full`} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Enhanced CTA Button with 3D depth */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="relative group perspective-1000 transform-gpu hover:scale-105 transition-all duration-500"
              >
                {/* Floating glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-emerald-600/50 rounded-2xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse" />
                
                {/* Button with depth */}
                <div className="relative">
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl transform translate-y-1 translate-x-1 opacity-30" />
                  
                  
                </div>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transform-gpu hover:scale-110 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`absolute left-0 w-6 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transform transition-all duration-500 ${
                      i === 0 ? (isOpen ? 'top-3 rotate-45' : 'top-1') :
                      i === 1 ? (isOpen ? 'opacity-0 scale-0' : 'top-1/2 -translate-y-0.5') :
                      (isOpen ? 'top-3 -rotate-45' : 'bottom-1')
                    }`}
                    style={{
                      transformOrigin: 'center',
                      transitionDelay: isOpen ? `${i * 50}ms` : `${(2-i) * 50}ms`
                    }}
                  />
                ))}
              </div>
              {/* Button glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </button>
          </div>

          {/* Enhanced Mobile Menu with 3D effects */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-700 ${
              isOpen ? 'max-h-screen pb-8' : 'max-h-0'
            }`}
          >
            <div className="py-6 space-y-3 border-t border-white/20 backdrop-blur-xl">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transform-gpu transition-all duration-500 group ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative perspective-1000">
                    {/* Floating background */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                    
                    <div
                      className={`relative px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-500 transform-gpu group-hover:translate-x-2 group-hover:translate-y-[-2px] group-hover:rotate-x-2 ${
                        pathname === item.href
                          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-700 border-l-4 border-blue-500 shadow-xl backdrop-blur-xl'
                          : 'bg-white/40 backdrop-blur-md text-slate-700 hover:bg-white/60 shadow-lg hover:shadow-xl border border-white/30'
                      }`}
                    >
                      {/* Inner highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                      <span className="relative z-10">{item.label}</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Enhanced Mobile CTA */}
              <div className="pt-6 px-4">
                <Link
                  href="/contact"
                  className={`block transform-gpu transition-all duration-700 group ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${navItems.length * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative perspective-1000">
                    {/* Floating glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="relative">
                      {/* Shadow layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform translate-y-1 translate-x-1 opacity-20" />
                      
                     
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reflection */}
        <div className="absolute -bottom-8 left-4 right-4 h-8 bg-gradient-to-b from-white/10 to-transparent rounded-b-3xl blur-sm opacity-50" />
      </nav>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-x-5 {
          transform: rotateX(5deg);
        }
        
        .rotate-x-2 {
          transform: rotateX(2deg);
        }
        
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
