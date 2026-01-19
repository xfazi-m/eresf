import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'O MNIE', id: 'home' },
    { name: 'PROJEKTY', id: 'projects' },
    { name: 'USŁUGI', id: 'services' },
    { name: 'KONTAKT', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 px-6 md:px-12 ${scrolled ? 'py-4' : 'py-12'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12 transition-all duration-1000 rounded-full ${scrolled ? 'bg-black/40 backdrop-blur-2xl border border-white/10 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-transparent py-0'}`}>
        <button 
          onClick={() => handleScrollTo('home')} 
          className="text-xl md:text-2xl font-black tracking-widest text-white italic hover:opacity-50 transition-all"
        >
          X_FAZI
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-14">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-[9px] font-bold tracking-[0.5em] text-neutral-500 hover:text-white transition-all uppercase"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('contact')}
            className="bg-white text-black px-10 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:scale-110 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            COLLABORATE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-black z-[110] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-12 right-12 text-white"><X className="h-10 w-10"/></button>
        <div className="flex flex-col space-y-12 text-center">
          {links.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleScrollTo(link.id)} 
              className="text-4xl font-black tracking-tighter uppercase text-neutral-700 hover:text-white hover:italic transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;