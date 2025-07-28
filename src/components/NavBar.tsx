// components/NavBar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/experiences", label: "Experiências" },
  { href: "/projects", label: "Projetos" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-gray-900/95 backdrop-blur-sm sticky top-0 px-6 py-4 flex justify-between items-center shadow-lg border-b border-gray-800 z-50">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          apolinario0x21
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-lg font-medium transition-colors hover:text-blue-400 ${
                pathname === link.href 
                  ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                  : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      {isOpen && (
        <>
          <div 
            onClick={closeMenu} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden" 
          />
          
          <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={closeMenu} 
                className={`text-2xl font-medium transition-colors hover:text-blue-400 ${
                  pathname === link.href ? 'text-blue-400' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </>
  );
}