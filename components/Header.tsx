"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="relative w-10 h-10"> */}
              <Image 
                src="/grownee-small-logo.svg" 
                alt="Grownee Logo" 
                width={130} 
              height={28}
                className="object-contain"
                priority
              />
            {/* </div> */}
            
          </Link>

          {/* Desktop Navigation - Center (Floating Pill Style) */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center bg-black rounded-full px-1.5 py-1.5 gap-1">
              <Link 
                href="#products" 
                className="text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-all"
              >
                Products
              </Link>
              <Link 
                href="#learn" 
                className="text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-all"
              >
                Learn
              </Link>
              <Link 
                href="/about" 
                className="text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-all"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Join Beta - Right */}
          <div className="hidden md:block">
  <Link 
    href="#beta" 
    className="bg-[#F1F1F1] text-gray-900 text-[15px] font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all"
  >
    Join Beta
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white space-y-4 shadow-xl rounded-b-2xl px-2">
            <Link 
              href="#products" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-xl"
            >
              Products
            </Link>
            <Link 
              href="#learn" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-xl"
            >
              Learn
            </Link>
            <Link 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-xl"
            >
              About us
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Link 
                href="#beta" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-center bg-[#15B369] text-white rounded-full font-semibold"
              >
                Join Beta
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}