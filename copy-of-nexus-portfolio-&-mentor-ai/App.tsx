import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <CustomCursor />
      
      {/* Visual Environment */}
      <div className="stripe-container">
        <div className="vertical-stripe"></div>
        <div className="vertical-stripe opacity-50"></div>
        <div className="vertical-stripe opacity-30"></div>
        <div className="vertical-stripe opacity-50"></div>
        <div className="vertical-stripe"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow -top-1/4 -left-1/4 animate-slow-float"></div>
        <div className="glow top-1/2 -right-1/4 opacity-40"></div>
        <div className="glow -bottom-1/4 left-1/3 opacity-30"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="projects" className="reveal-section px-6 md:px-12 py-20">
           <Projects />
        </div>

        <div id="services" className="reveal-section px-6 md:px-12 py-20">
           <Services />
        </div>
        
        {/* Expanded Contact & Information Section */}
        <section id="contact" className="reveal-section py-40 px-6 md:px-12">
          <div className="glass-panel rounded-xl-custom p-16 md:p-32 text-center max-w-7xl mx-auto w-full relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.8em] text-neutral-500 uppercase mb-12 block">Inquiry & Collaboration</span>
              <h2 className="text-6xl md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-20">
                TRANSFORMING <br /> <span className="text-neutral-600">IDEAS INTO</span> ICONS.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32">
                <a
                  href="mailto:hello@xfazi.io"
                  className="bg-white text-black px-16 py-8 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all w-full sm:w-auto shadow-[0_30px_60px_rgba(255,255,255,0.1)]"
                >
                  START NOW
                </a>
                <button
                  onClick={() => document.getElementById('chat-trigger')?.click()}
                  className="border border-white/10 text-white px-16 py-8 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full sm:w-auto"
                >
                  TALK TO MENTOR
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center pt-20 border-t border-white/5">
                <div className="group">
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-4 group-hover:text-white transition-colors">Direct Mail</h4>
                  <p className="text-xl font-bold tracking-tight">hello@xfazi.io</p>
                </div>
                <div className="group">
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-4 group-hover:text-white transition-colors">Social Presence</h4>
                  <p className="text-xl font-bold tracking-tight">@xfazi.visuals</p>
                </div>
                <div className="group">
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-4 group-hover:text-white transition-colors">Studio HQ</h4>
                  <p className="text-xl font-bold tracking-tight">Warsaw, PL</p>
                </div>
              </div>
            </div>
            
            {/* Subtle background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black italic opacity-[0.01] pointer-events-none select-none">
              CONTACT
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;