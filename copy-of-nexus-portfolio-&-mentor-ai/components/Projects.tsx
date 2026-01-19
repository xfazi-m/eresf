import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-40">
        <span className="text-[10px] font-bold tracking-[0.8em] text-neutral-500 uppercase mb-6 block">Curated Work</span>
        <h2 className="text-7xl md:text-[9vw] font-black text-white italic tracking-tighter uppercase leading-none">ARCHIVE</h2>
      </div>

      <div className="grid grid-cols-1 gap-60">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20 group relative`}
          >
            {/* Project Image Container */}
            <div className="w-full md:w-3/5 overflow-hidden rounded-lg-custom bg-neutral-900 relative aspect-[16/10] border border-white/5 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-40"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowUpRight className="w-10 h-10" />
                </div>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="w-full md:w-2/5 space-y-10">
              <div className="flex items-center space-x-8">
                 <span className="text-[10px] font-bold text-neutral-700 tracking-[0.5em]">PROJECT_0{idx + 1}</span>
                 <div className="h-[1px] flex-1 bg-neutral-900"></div>
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-tight group-hover:translate-x-4 transition-transform duration-700">{project.title}</h3>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed tracking-wide font-medium italic opacity-80">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold border border-white/10 rounded-full px-6 py-3 text-white/30 uppercase tracking-[0.2em] group-hover:text-white group-hover:border-white/40 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-8">
                <a href={project.link} className="inline-flex items-center space-x-3 text-[10px] font-black tracking-[0.4em] text-white border-b-2 border-white pb-3 hover:opacity-50 transition-opacity">
                  <span>EVALUATE CASE</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;