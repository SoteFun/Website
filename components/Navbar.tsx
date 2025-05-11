'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

const titleFont = localFont({
  src: "../app/fonts/FlowSans.woff2"
});

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // 向下滚动时隐藏导航栏
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // 向上滚动时显示导航栏
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ backgroundColor: '#FFEB69' }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-24">
          {/* 左侧 Logo */}
          <Link className={`${titleFont.className} text-[#3A341C] font-bold text-3xl`} href="/">
            FLOWECHO
          </Link>
          
          {/* 右侧导航项 */}
          <div className="flex space-x-12">
            {/* About 下拉菜单 */}
            <div className="relative group">
              <button 
                className="text-[#3A341C] font-medium text-lg py-2 hover:text-[#5A542C] transition-colors duration-300"
                onMouseEnter={() => setShowAboutDropdown(true)}
              >
                ABOUT
              </button>
              
              {/* 下拉菜单 */}
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-2xl shadow-lg bg-[#FFEB69] ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 origin-top-left ${
                  showAboutDropdown ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <div className="py-3">
                  <Link href="/our-team" className="block px-6 py-3 text-lg text-[#3A341C] hover:bg-[#FFE34D] transition-colors duration-200">
                    Our team
                  </Link>
                  <Link href="/about-us" className="block px-6 py-3 text-lg text-[#3A341C] hover:bg-[#FFE34D] transition-colors duration-200">
                    About us
                  </Link>
                  <Link href="/history" className="block px-6 py-3 text-lg text-[#3A341C] hover:bg-[#FFE34D] transition-colors duration-200">
                    History
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/library" className="text-[#3A341C] font-medium text-lg py-2 hover:text-[#5A542C] transition-colors duration-300">
              LIBRARY
            </Link>
            
            <Link href="/blog" className="text-[#3A341C] font-medium text-lg py-2 hover:text-[#5A542C] transition-colors duration-300">
              BLOG
            </Link>
            
            <Link href="/contact" className="text-[#3A341C] font-medium text-lg py-2 hover:text-[#5A542C] transition-colors duration-300">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;