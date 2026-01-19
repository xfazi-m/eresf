import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black pt-60 pb-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mb-48">
          <div>
            <h2 className="text-6xl font-black text-white italic tracking-tighter mb-12 uppercase leading-none">X_FAZI</h2>
            <p className="text-neutral-500 max-w-sm mb-16 text-sm leading-loose tracking-[0.1em] font-medium italic opacity-60">
              Defining the aesthetics of ambition. We architect digital luxury for those who settle for nothing less than perfection.
            </p>
            <div className="flex space-x-12">
              {[Github, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="text-neutral-700 hover:text-white transition-all transform hover:-translate-y-3">
                  <Icon className="w-8 h-8" strokeWidth={0.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-neutral-300 mb-12">Navigation</h4>
                <ul className="space-y-8 text-[11px] font-bold text-neutral-600">
                  <li><button onClick={() => handleScrollTo('home')} className="hover:text-white transition-all uppercase tracking-[0.3em]">START_PAGE</button></li>
                  <li><button onClick={() => handleScrollTo('projects')} className="hover:text-white transition-all uppercase tracking-[0.3em]">PORTFOLIO_AR</button></li>
                  <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-all uppercase tracking-[0.3em]">SERVICE_DEPT</button></li>
                  <li><button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-all uppercase tracking-[0.3em]">CONTACT_US</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-neutral-300 mb-12">Connect</h4>
                <ul className="space-y-8 text-[11px] font-bold text-neutral-600">
                  <li><a href="mailto:hello@xfazi.io" className="hover:text-white transition-all uppercase border-b border-neutral-900 pb-2 tracking-[0.2em]">hello@xfazi.io</a></li>
                  <li><span className="uppercase tracking-[0.4em] text-neutral-800">EU_OPERATIONS</span></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.8em] text-neutral-800">
          <p>© {new Date().getFullYear()} X_FAZI_STUDIO. ALL_PROTOCOLS_RESERVED.</p>
          <div className="mt-8 md:mt-0 italic opacity-30 group cursor-pointer">
             <span className="group-hover:text-white transition-colors tracking-widest">MINIMALISM IS EFFORTLESS.</span>
          </div>
        </div>
      </div>
      
      {/* Refined Footer background text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] text-[35vw] font-black italic uppercase tracking-tighter w-full text-center leading-none">
        FAZI
      </div>
    </footer>
  );
};

export default Footer;