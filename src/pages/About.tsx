import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade-up", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[var(--color-bg-primary)] pt-32 pb-24 px-6 md:px-12 md:pl-20 flex flex-col justify-center text-[var(--color-accent-cream)]">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Left Side: Text */}
        <div className="md:col-span-5 pr-0 md:pr-12 h-fit flex flex-col justify-center">
          <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 about-fade-up">
            <span>ABOUT</span>
            <div className="h-[1px] flex-1 bg-gray-500/30"></div>
          </div>
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold uppercase tracking-normal text-[var(--color-accent-cream)] mb-10 about-fade-up leading-none">
            ABOUT
          </h1>
          <div className="text-[var(--color-accent-cream)]/70 font-sans font-light tracking-wide leading-relaxed space-y-8 text-lg about-fade-up">
            <p>
              Full-Stack Developer experienced in building scalable web applications using JavaScript, React, Node.js, and Express. Skilled in RESTful APIs, MongoDB, and responsive user interfaces.
            </p>
            <p>
              Experienced in full-stack development, building modern web applications, analytics, and responsive designs that bring complex ideas to life.
            </p>
            <p>
              Passionate about clean code, problem-solving, and collaboration, with a focus on delivering high-performance, user-centered applications.
            </p>
          </div>
        </div>

        {/* Right Side: Skills */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-20 pt-12 md:pt-0">
          
          {/* Frontend */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start about-fade-up">
            <div className="w-full lg:w-[40%] lg:-ml-16 flex-shrink-0">
              <h2 className="text-5xl md:text-6xl font-display font-black text-white/10 uppercase leading-[0.85] tracking-wide whitespace-nowrap">
                FRONTEND
              </h2>
            </div>
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-y-10 gap-x-6">
              <TechItem 
                icon={<div className="bg-[#f7df1e] text-black font-bold w-full h-full flex items-center justify-center text-[10px]">JS</div>} 
                name="JAVASCRIPT" 
              />
              <TechItem 
                icon={<svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full text-[#61dafb] fill-current"><circle cx="0" cy="0" r="2.05"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>} 
                name="REACT" 
              />
              <TechItem 
                icon={<div className="bg-[#1572B6] text-white font-bold w-full h-full flex items-center justify-center text-[9px] rounded-sm">CSS</div>} 
                name="CSS" 
              />
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-[#38bdf8] fill-current"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 3.601 12z"/></svg>} 
                name="TAILWIND CSS" 
              />
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start about-fade-up">
            <div className="w-full lg:w-[40%] lg:-ml-16 flex-shrink-0">
              <h2 className="text-5xl md:text-6xl font-display font-black text-white/10 uppercase leading-[0.85] tracking-wide whitespace-nowrap">
                BACKEND
              </h2>
            </div>
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-y-10 gap-x-6">
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-[#339933] fill-current"><path d="M11.874 0L1.75 5.867v11.731l10.124 5.867 10.125-5.867V5.867L11.874 0zm7.842 16.368l-7.842 4.542-7.84-4.542V7.29l7.84-4.54 7.842 4.54v9.078z"/><path d="M11.874 18.04l-5.632-3.262v-6.52l5.632-3.263 5.63 3.263v6.52l-5.63 3.262z"/></svg>} 
                name="NODE.JS" 
              />
              <TechItem 
                icon={<div className="bg-gray-800 border border-gray-600 text-white font-bold w-full h-full flex items-center justify-center text-[10px] rounded-sm">EX</div>} 
                name="EXPRESS" 
              />
              <TechItem 
                icon={<div className="bg-[#00599C] text-white font-bold w-full h-full flex items-center justify-center text-[9px] rounded-sm">C++</div>} 
                name="C++" 
              />
            </div>
          </div>

          {/* Database */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start about-fade-up">
            <div className="w-full lg:w-[40%] lg:-ml-16 flex-shrink-0">
              <h2 className="text-5xl md:text-6xl font-display font-black text-white/10 uppercase leading-[0.85] tracking-wide whitespace-nowrap">
                DATABASE
              </h2>
            </div>
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-y-10 gap-x-6">
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-[#47A248] fill-current"><path d="M11.513 18.674c.264.444.693 1.054 1.137 1.259.083-.418.14-1.229.136-1.782l-.008-6.196c.01-1.611 1.042-3.834 1.626-6.136C14.773 4.394 13.57 0 11.758 0c-1.883 0-3.056 4.382-2.735 5.76.602 2.25 1.581 4.508 1.615 6.183l.033 6.13-.01.523c.094.041.525.295.852.078M11.66 24V19.782h.38V24z"/></svg>} 
                name="MONGODB" 
              />
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start about-fade-up">
            <div className="w-full lg:w-[40%] lg:-ml-16 flex-shrink-0">
              <h2 className="text-5xl md:text-6xl font-display font-black text-white/10 uppercase leading-[0.85] tracking-wide whitespace-nowrap">
                TOOLS
              </h2>
            </div>
            <div className="w-full lg:w-[60%] grid grid-cols-2 gap-y-10 gap-x-6">
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-[#F05032] fill-current"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.888.441.516.515.658 1.258.438 1.9l2.738 2.739c.641-.218 1.383-.075 1.898.44.755.755.755 1.98 0 2.735-.755.755-1.98.755-2.735 0-.518-.518-.66-1.261-.439-1.905l-2.73-2.73v4.61c.204.2.35.452.417.729.155.642-.04 1.32-.516 1.796-.755.755-1.98.755-2.735 0-.755-.755-.755-1.98 0-2.735.476-.476 1.155-.672 1.797-.516.275.067.525.211.725.414V7.55c-.201-.205-.353-.457-.42-.738-.118-.492 0-1.01.321-1.428L4.85 2.624.45 7.025c-.603.603-.603 1.582 0 2.188l10.48 10.48c.603.604 1.582.604 2.188 0l10.428-10.43c.604-.603.604-1.582 0-2.188z"/></svg>} 
                name="GIT" 
              />
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>} 
                name="GITHUB" 
              />
              <TechItem 
                icon={<svg viewBox="0 0 24 24" className="w-full h-full text-[#2496ED] fill-current"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.951-.186h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0-2.416h2.118a.186.186 0 00.186-.186V6.588a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m-2.95 2.416h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0-2.416h2.119a.186.186 0 00.185-.186V6.588a.186.186 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0-2.415h2.119a.186.186 0 00.185-.185V4.173a.186.186 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.951 4.83h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-6.4 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H1.681a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m2.951 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M24 10.669c-.068-.521-.861-1.077-1.396-1.127a3.468 3.468 0 00-.038-2.613 3.659 3.659 0 00-2.685-1.921c-.443.013-.859.108-1.228.275a5.1 5.1 0 00-1.89-1.411c-.512-.224-1.066-.352-1.638-.372v1.516c.304.015.6.064.887.143a4.01 4.01 0 011.666 1.026c.465.48.818 1.06 1.036 1.69a6.223 6.223 0 01.162 3.238c-.08.528-.433.957-.91 1.139a2.533 2.533 0 01-1.745.03c-.563-.166-1.045-.55-1.341-1.053a4.137 4.137 0 01-.482-1.815V4.281c0-2.316-1.854-4.204-4.137-4.275A4.184 4.184 0 007.411 1.63 4.225 4.225 0 006.184 4.542v6.621H.221a.222.222 0 00-.22.222v2.457c0 2.946 2.378 5.344 5.3 5.344s5.3-2.398 5.3-5.344V10.22h6.184v.538A6.368 6.368 0 0024 10.669z"/></svg>} 
                name="DOCKER" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TechItem({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
         {icon}
      </div>
      <span className="text-sm font-bold tracking-widest text-[var(--color-accent-cream)]/70 uppercase font-sans">{name}</span>
    </div>
  );
}

