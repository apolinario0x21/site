// app/page.tsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHackerrank, SiCodewars, SiTryhackme } from "react-icons/si";

export default function Home() {
  return (
    <section className="flex-grow flex flex-col items-center justify-center text-center px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6  bg-clip-text text-white">
          Marcelo Apolinário
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
        Back-End Developer & CTF Player
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Back-End Developer with a passion for cybersecurity and a focus on scalable solutions.
        </p>
        
        <div className="flex justify-center space-x-8 text-2xl">
          <a 
            href="https://linkedin.com/in/apolinario-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/apolinario0x21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://tryhackme.com/p/apolinario0x21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="TryHackMe"
          >
            <SiTryhackme />
          </a>
          <a 
            href="https://www.codewars.com/users/apolinario0x21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Codewars"
          >
            <SiCodewars />
          </a>
          <a 
            href="https://hackerrank.com/apolinario0x21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110 transform"
            aria-label="HackerRank"
          >
            <SiHackerrank />
          </a>
        </div>
      </div>
    </section>
  );
}