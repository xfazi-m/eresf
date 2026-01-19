import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <h2 className="text-7xl md:text-[9vw] font-black text-white italic tracking-tighter mb-8 uppercase leading-none">OFFERING</h2>
          <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-[0.6em] font-medium italic opacity-60">Luxury through precision.</p>
        </div>
        <div className="text-right">
           <span className="text-[9px] font-bold text-neutral-700 uppercase tracking-widest italic">All-In-One Partner</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
          return (
            <div
              key={service.id}
              className="glass-panel p-16 rounded-lg-custom flex flex-col h-full group"
            >
              <div className="mb-16 text-white group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out opacity-60 group-hover:opacity-100">
                <IconComponent className="w-14 h-14 stroke-[0.5]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic group-hover:tracking-normal transition-all duration-700">{service.title}</h3>
              <p className="text-neutral-500 text-xs leading-loose mb-16 flex-1 font-medium italic opacity-70 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
              
              <div className="pt-12 border-t border-white/5 mt-auto flex justify-between items-end">
                 <div className="flex flex-col">
                    <span className="text-[8px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-2">Investment</span>
                    <span className="text-white font-black text-lg uppercase tracking-tighter">{service.priceRange}</span>
                 </div>
                 <div className="flex flex-col text-right">
                    <span className="text-[8px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-2">Availability</span>
                    <span className="text-neutral-400 font-bold text-[9px] uppercase tracking-[0.2em]">{service.estimatedTime}</span>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;