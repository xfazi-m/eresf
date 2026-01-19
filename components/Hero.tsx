import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 px-8 overflow-hidden">
      <div className="text-center relative z-20">
        <div className="overflow-hidden mb-12">
          <p className="text-[12px] font-bold tracking-[0.8em] text-neutral-500 uppercase animate-in slide-in-from-bottom-full duration-1000">
            Establishing Digital Standards
          </p>
        </div>
        
        <h1 className="text-[22vw] md:text-[20vw] leading-[0.75] font-black tracking-tighter text-white uppercase italic block overflow-hidden">
          <span className="inline-block animate-in slide-in-from-bottom-full duration-1000 delay-200">X_FAZI</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mt-20 mb-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">
          <p className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.4em] leading-loose animate-in fade-in duration-1000 delay-500 italic opacity-70">
            "Design is the silent architecture of ambition."
          </p>
        </div>

        <div className="mt-24 flex justify-center animate-bounce opacity-20 hover:opacity-100 transition-opacity">
           <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <ChevronDown className="w-8 h-8" />
           </button>
        </div>
      </div>

      {/* Improved Background Text Layering */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[40vw] font-black italic uppercase text-white/[0.015] leading-none transform translate-y-10">
          CORE
        </div>
      </div>
    </section>
  );
};

export default Hero;