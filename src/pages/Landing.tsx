import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { MoveRight, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import About from "./About";
import Achievements from "../components/Achievements";
import ProjectDetailOverlay from "../components/ProjectDetailOverlay";
import { projectsData, Project } from "../data/projectsData";

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  
  const endRef = useRef<HTMLDivElement>(null);
  const socialNavRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openProject = (id: number | string) => {
    const proj = projectsData.find(p => p.id === id);
    if (proj) {
      setSelectedProject(proj);
      setIsOverlayOpen(true);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Intro Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-text-line", {
        yPercent: 100,
        opacity: 0,
        rotateZ: 5,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=1")
      .from(tagsRef.current?.children || [], {
        opacity: 0,
        y: 10,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.8");

      // Hero Scroll Animation (Parallax)
      gsap.to(nameRef.current, {
        y: 150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
      
      // Typography section reveal
      gsap.from(".typography-text", {
        yPercent: 120,
        opacity: 0,
        rotateZ: 3,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".typography-section",
          start: "top 80%",
        }
      });
      
      // Featured works text reveal
      gsap.from(".featured-text-char", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".featured-works-section",
          start: "top 85%",
        }
      });

      // End section reveal
      gsap.from(".end-text", {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: endRef.current,
          start: "top 80%",
        }
      });

      // Social nav reveal
      gsap.to(socialNavRef.current, {
        opacity: 1,
        x: 0,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%", // appear after hero begins to leave
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-[var(--color-bg-primary)]">
      {/* Fixed Social Nav */}
      <div ref={socialNavRef} className="fixed right-6 bottom-1/2 translate-y-1/2 z-50 flex flex-col gap-4 opacity-0 translate-x-12 pointer-events-none">
        <a href="https://github.com/Vedantt56" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-black/50 backdrop-blur-sm">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/vedant-vaibhav-b9b48b35b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-black/50 backdrop-blur-sm">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vedantvaibhav28@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-black/50 backdrop-blur-sm">
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundSize: '250px 250px' }}></div>
        
        <div className="max-w-[1920px] mx-auto w-full z-10 flex flex-col gap-6">
          <h1 ref={nameRef} className="flex flex-col text-7xl md:text-[11rem] lg:text-[14rem] leading-[0.85] font-display font-bold tracking-normal uppercase text-[var(--color-accent-cream)]">
            <div className="overflow-hidden pb-4"><span className="hero-text-line block">VEDANT</span></div>
            <div className="overflow-hidden pb-4"><span className="hero-text-line block pl-[8vw] md:pl-[12vw] text-[var(--color-accent-orange)]">PORTFOLIO</span></div>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4">
            <p ref={subtitleRef} className="text-xl md:text-3xl max-w-xl font-sans font-light tracking-wide text-[var(--color-accent-cream)]">
              Creative Developer / CS Engineer / Building immersive digital experiences
            </p>
            <div ref={tagsRef} className="flex flex-wrap gap-4 text-sm md:text-base font-medium font-sans text-[var(--color-accent-gray)] uppercase tracking-widest">
              <span>Frontend</span>
              <span>•</span>
              <span>AI</span>
              <span>•</span>
              <span>Cloud</span>
              <span>•</span>
              <span>Motion Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="typography-section relative w-full py-32 md:py-48 px-6 md:px-12 bg-[var(--color-bg-tertiary)] z-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-[1920px] mx-auto w-full text-center flex flex-col items-center relative">
          
          <div className="absolute top-0 left-0 md:left-24 text-left hidden md:block">
            <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase mb-1">Purposeful</p>
            <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase">Design</p>
          </div>

          <div className="overflow-hidden flex items-end">
            <h2 className="typography-text text-[var(--color-accent-cream)] text-[12vw] leading-[0.8] font-display font-bold tracking-normal uppercase m-0">
              BUILDING
            </h2>
            <div className="hidden xl:block text-left relative ml-8 mb-3">
              <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Impact</p>
              <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Driven</p>
            </div>
          </div>
          <div className="overflow-hidden flex items-start">
            <h2 className="typography-text text-[var(--color-accent-cream)] text-[15vw] leading-[0.8] font-display font-bold tracking-normal uppercase m-0">
              WEBSITES
            </h2>
            <div className="hidden lg:block text-left relative ml-8 mt-5">
              <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Digital</p>
              <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Craftsmanship</p>
            </div>
          </div>
          <div className="overflow-hidden flex items-start">
             <div className="hidden md:block text-left relative mt-4 mr-8">
                <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Elevating</p>
                <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Aesthetics</p>
             </div>
             <h2 className="typography-text text-[var(--color-accent-cream)] text-[12vw] leading-[0.8] font-display font-bold tracking-normal uppercase m-0">
                WITH MEANING
             </h2>
             <div className="hidden xl:block text-left relative ml-8 mt-5">
                <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">User</p>
                <p className="typography-text text-[var(--color-accent-cream)] font-sans font-bold text-sm tracking-widest uppercase leading-tight">Centric</p>
             </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Marquee Section */}
      <section className="w-full bg-[var(--color-bg-primary)] overflow-hidden py-8 md:py-16 text-white/5 uppercase font-sans font-black italic whitespace-nowrap flex flex-col gap-4 select-none pointer-events-none">
        
        {/* Row 1: Left to Right */}
        <div className="flex w-max animate-marquee-right text-[2.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.8] tracking-tighter">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
               <span className="px-4 md:px-8">LARAVEL</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">PHP</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">MYSQL</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">REACT</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">NEXT.JS</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-max animate-marquee-left text-[2.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.8] tracking-tighter ml-[-15vw]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
               <span className="px-4 md:px-8">TYPESCRIPT</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">JAVASCRIPT</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">NODE.JS</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">EXPRESS</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">MONGODB</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">DOCKER</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
               <span className="px-4 md:px-8">GIT</span><span className="text-[0.4em] mb-4 text-white/20 px-2">&#9679;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Section (Replaces 3D Gallery) */}
      <section className="featured-works-section bg-[var(--color-accent-cream)] text-[var(--color-bg-primary)] pt-24 pb-32 z-20 relative">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
           <div className="w-full overflow-hidden flex justify-between tracking-tighter">
              <h1 className="text-[13vw] md:text-[14vw] leading-[0.8] font-display font-bold uppercase w-full flex justify-between">
                {"FEATURED WORKS".split('').map((char, i) => (
                  <span key={i} className="featured-text-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </h1>
           </div>
           
           <div className="w-full border-t border-[var(--color-bg-primary)] mt-8 mb-16"></div>

           <div className="flex flex-col gap-6 w-full">
              <div 
                onClick={() => openProject(1)} 
                className="block group relative w-full h-[50vh] md:h-[80vh] overflow-hidden cursor-pointer bg-[var(--color-bg-tertiary)]"
              >
                 <img src="/caltrack-cover.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Calorie Tracker" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500" />
                 
                 {/* Floating project details link profile */}
                 <div className="absolute bottom-8 left-8 text-[var(--color-accent-cream)] z-10 select-none drop-shadow-lg">
                    <p className="font-sans font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-80">PROJECT / 01</p>
                    <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-normal transition-colors group-hover:text-[var(--color-accent-orange)]">CALORIE TRACKER</h3>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-black uppercase mt-2 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] px-3 py-1 rounded-full shadow-lg">
                       <span>VIEW PROJECT</span> &bull; <span>CLICK CARD</span>
                    </span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                 <div 
                   onClick={() => openProject("flow")} 
                   className="block group relative w-full h-[50vh] md:h-[60vh] overflow-hidden cursor-pointer bg-[var(--color-bg-tertiary)]"
                 >
                    <img src="/zeneth-cover.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="ZenETH" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500" />
                    
                    <div className="absolute bottom-8 left-8 text-[var(--color-accent-cream)] z-10 select-none drop-shadow-lg">
                        <p className="font-sans font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-80">PROJECT / 02</p>
                        <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-normal transition-colors group-hover:text-[var(--color-accent-orange)]">ZENETH</h3>
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-black uppercase mt-2 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] px-3 py-1 rounded-full shadow-lg">
                           <span>VIEW PROJECT</span> &bull; <span>CLICK CARD</span>
                        </span>
                    </div>
                 </div>

                 <div 
                   onClick={() => openProject("community")} 
                   className="block group relative w-full h-[50vh] md:h-[60vh] overflow-hidden cursor-pointer bg-[var(--color-bg-secondary)]"
                 >
                    <img src="/civicsync-cover.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Civic Sync" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500" />
                    
                    <div className="absolute bottom-8 left-8 text-[var(--color-accent-cream)] z-10 select-none drop-shadow-lg">
                        <p className="font-sans font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-80">PROJECT / 03</p>
                        <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-normal transition-colors group-hover:text-[var(--color-accent-orange)]">CIVIC SYNC</h3>
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-black uppercase mt-2 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] px-3 py-1 rounded-full shadow-lg">
                           <span>VIEW PROJECT</span> &bull; <span>CLICK CARD</span>
                        </span>
                    </div>
                  </div>
              </div>
           </div>

           <div className="mt-24 flex justify-center">
              <Link to="/work" className="group relative inline-flex items-center gap-4 text-[var(--color-bg-primary)] overflow-hidden border border-[var(--color-bg-primary)] rounded-full px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-display font-bold uppercase tracking-widest hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-accent-cream)] transition-colors duration-500">
                 <span>View All Works</span>
                 <span className="w-2 h-2 rounded-full bg-[var(--color-accent-orange)] group-hover:scale-150 transition-transform duration-500"></span>
              </Link>
           </div>
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />

      {/* Ending Section */}
      <section ref={endRef} className="relative min-h-[80vh] w-full flex items-stretch bg-[var(--color-bg-primary)] z-20 text-[var(--color-accent-cream)] border-t border-white/5">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column */}
          <div className="p-12 md:p-24 flex flex-col justify-between border-r border-white/5">
            <div>
              <p className="end-text font-sans font-bold text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-8">
                Contact
              </p>
              <h2 className="text-6xl md:text-[8vw] font-display font-bold uppercase leading-[0.85] tracking-normal mb-12">
                <div className="overflow-hidden"><span className="block end-text">Let's</span></div>
                <div className="overflow-hidden"><span className="block end-text">Work</span></div>
                <div className="overflow-hidden"><span className="block end-text text-[var(--color-accent-gray)]">Together</span></div>
              </h2>
              <p className="end-text text-gray-400 font-sans text-lg md:text-xl max-w-md leading-relaxed font-light mb-16">
                Have a project in mind? Looking for a partner to help build your next big idea? I'm always open to discussing new opportunities and challenges.
              </p>
              
              <div className="end-text flex gap-4">
                <a href="https://github.com/Vedantt56" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-transparent">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/vedant-vaibhav-b9b48b35b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-transparent">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vedantvaibhav28@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all bg-transparent">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="p-12 md:p-24 flex flex-col justify-between">
             {/* Resume Card Block */}
             <div className="mb-12 pb-12 border-b border-white/5">
                <p className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4">
                  Curriculum Vitae
                </p>
                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide mb-4 text-[var(--color-accent-cream)]">
                  My Resume
                </h3>
                <p className="text-gray-400 font-sans text-sm md:text-base max-w-md leading-relaxed mb-8">
                  Computer Science undergrad specialized in full-stack engineering, blockchain (Solidity), and interactive UI development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/resume" 
                    className="inline-flex items-center gap-3 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-cream)] hover:text-[var(--color-bg-primary)] transition-all px-6 py-3 rounded-full font-mono text-xs tracking-widest font-black uppercase shadow-lg"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </Link>
                  <Link 
                    to="/resume?print=true" 
                    target="_blank"
                    className="inline-flex items-center gap-3 border border-white/20 hover:border-white hover:text-white text-gray-300 transition-all px-6 py-3 rounded-full font-mono text-xs tracking-widest font-black uppercase"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </Link>
                </div>
             </div>

             {/* Drop Me a Line Block */}
             <div className="flex flex-col justify-center">
               <p className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4">
                 Drop me a line
               </p>
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vedantvaibhav28@gmail.com" target="_blank" rel="noopener noreferrer" className="group text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-normal hover:text-[var(--color-accent-orange)] transition-colors mb-8 break-all leading-tight">
                  <span className="block">vedantvaibhav28</span>
                  <span className="block text-gray-500 group-hover:text-[var(--color-accent-orange)]/70 transition-colors">@gmail.com</span>
               </a>
               
               <button 
                 onClick={() => navigator.clipboard.writeText('vedantvaibhav28@gmail.com')}
                 className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest font-bold w-fit"
               >
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                 </svg>
                 Copy Address
               </button>
             </div>
          </div>
        </div>
      </section>
      <ProjectDetailOverlay 
        project={selectedProject} 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </main>
  );
}
