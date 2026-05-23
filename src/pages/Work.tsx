import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Home in a Hot Pot", category: "Conceptual", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600" },
  { id: 2, title: "Cloud CI/CD", category: "Infrastructure", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" },
  { id: 3, title: "Motion Portfolio", category: "Expressive", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600" },
  { id: 4, title: "Real-Time Chat App", category: "Full-Stack", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600" },
  { id: 5, title: "ML Prediction System", category: "Immersive", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1600" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial states for page reveal
      gsap.set(".work-top-section", { height: "100vh" }); 
      gsap.set(".project-card", { y: "40vh", opacity: 0, scale: 0.8 });
      gsap.set(".word-curated-container", { x: "15vw", scale: 1.3, transformOrigin: "right center" });
      gsap.set(".word-projects-container", { x: "-15vw", scale: 1.3, transformOrigin: "left center" });

      const tl = gsap.timeline();

      // 1. Initial text letters reveal from bottom up
      tl.from(".huge-text-char", {
        yPercent: 120,
        rotateX: -90,
        opacity: 0,
        stagger: 0.02,
        duration: 0.4,
        ease: "power3.out",
        delay: 0.1
      })
      // 2. Shrink text and split words apart
      .to([".word-curated-container", ".word-projects-container"], {
        x: 0,
        scale: 1,
        duration: 0.6,
        ease: "power4.inOut"
      }, "+=0.1")
      // 3. Slide the orange top background up by shrinking its height
      .to(".work-top-section", {
        height: "25vh",
        duration: 0.8,
        ease: "power4.inOut"
      }, "<")
      // 4. Stagger the cards up into view
      .to(".project-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "all"
      }, "-=0.4");
    });

    return () => {
       ctx.revert();
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cards = container.querySelectorAll('.project-card');
    let closestIdx = activeIndex;
    let minDist = Infinity;
    const center = window.innerWidth / 2;

    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }

    setIsScrolling(true);
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  const handlePrev = () => {
    const container = document.getElementById("scroll-container");
    if (container && activeIndex > 0) {
      const cards = container.querySelectorAll('.project-card');
      cards[activeIndex - 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleNext = () => {
    const container = document.getElementById("scroll-container");
    if (container && activeIndex < projects.length - 1) {
      const cards = container.querySelectorAll('.project-card');
      cards[activeIndex + 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const chars = gsap.utils.toArray('.huge-text-char') as HTMLElement[];
    const containerRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;

    chars.forEach((char) => {
      const charRect = char.getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2 - containerRect.left;
      const dist = Math.abs(mouseX - charCenterX);
      const maxDist = 250; // Trigger distance
      
      if (dist < maxDist) {
        const normalized = 1 - dist / maxDist;
        gsap.to(char, {
          rotateX: -normalized * 80, // fold backwards
          scaleY: 1 - (normalized * 0.3), // slightly compress
          y: normalized * -20, // lift slightly
          color: "#ffffff",
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        gsap.to(char, {
          rotateX: 0,
          scaleY: 1,
          y: 0,
          color: "inherit",
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to('.huge-text-char', {
      rotateX: 0,
      scaleY: 1,
      y: 0,
      color: "inherit",
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  return (
    <main ref={mainRef} className="w-full h-screen bg-[#c46b3c] relative flex flex-col overflow-hidden">
      
      {/* Top Section matching the screenshot */}
      <section className="work-top-section bg-[#c46b3c] flex-shrink-0 w-full px-6 md:px-12 pb-8 flex flex-col justify-end z-20 border-b border-[#0b0b0b]/10 origin-top">
         
         <div 
           className="w-full overflow-visible flex justify-between tracking-tighter py-4"
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           style={{ perspective: "1000px" }}
         >
            <div className="w-full flex justify-between uppercase font-display font-bold leading-[0.8] cursor-crosshair text-[9vw] md:text-[10vw]">
               <div className="word-curated-container flex">
                 {"CURATED".split('').map((char, i) => (
                   <span 
                     key={`c-${i}`} 
                     className="huge-text-char inline-block origin-bottom"
                     style={{ transformStyle: "preserve-3d" }}
                   >
                     {char}
                   </span>
                 ))}
               </div>
               <div className="word-projects-container flex">
                 {"PROJECTS".split('').map((char, i) => (
                   <span 
                     key={`p-${i}`} 
                     className="huge-text-char inline-block origin-bottom"
                     style={{ transformStyle: "preserve-3d" }}
                   >
                     {char}
                   </span>
                 ))}
               </div>
            </div>
         </div>
         
      </section>

      {/* Dark Horizontal Scroll Section */}
      <section ref={containerRef} className="work-bottom-section flex-1 w-full bg-[#0b0b0b] text-[#d9d2c3] flex flex-col relative z-10 overflow-hidden">
        
        {/* Fixed Title & Controls Overlay */}
        <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-center text-[var(--color-accent-cream)] pointer-events-none mix-blend-difference">
           <button onClick={handlePrev} className="font-sans font-bold tracking-widest uppercase text-sm pointer-events-auto hover:opacity-80 transition-opacity">Prev</button>
           <h2 className="font-display font-bold uppercase tracking-wider text-2xl md:text-5xl absolute left-1/2 -translate-x-1/2">
              {projects[activeIndex]?.title || "Project"}
           </h2>
           <button onClick={handleNext} className="font-sans font-bold tracking-widest uppercase text-sm pointer-events-auto hover:opacity-80 transition-opacity">Next</button>
        </div>

        <div 
          id="scroll-container"
          className="absolute inset-0 flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          onScroll={handleScroll}
        >
          <div ref={trackRef} className="flex items-center w-max h-full pt-16 pb-24">
            {/* Spacer to center the first card initially.
                Card width is 75vw (mobile) or 45vw (desktop).
                Card horizontal margin is mx-6 (1.5rem total, 0.75rem each side).
                We subtract half the card width + left margin from 50vw.
             */}
            <div className="w-[calc(50vw-37.5vw-0.75rem)] md:w-[calc(50vw-22.5vw-0.75rem)] flex-shrink-0"></div>
            
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={project.id} 
                  className={cn(
                    "project-card snap-center relative w-[75vw] md:w-[45vw] h-[55vh] flex-shrink-0 mx-3 cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    isActive ? "scale-100 opacity-100 z-10" : "scale-90 opacity-40 z-0 grayscale"
                  )}
                >
                  <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-white/5">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-1000",
                          isActive ? "scale-105" : "scale-100"
                        )}
                      />
                  </div>
                </div>
              );
            })}
            
            {/* Spacer to center the last card at the end */}
            <div className="w-[calc(50vw-37.5vw-0.75rem)] md:w-[calc(50vw-22.5vw-0.75rem)] flex-shrink-0"></div>
          </div>
        </div>

        {/* Fixed Footer Counter Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col justify-end text-[var(--color-accent-cream)] pointer-events-none">
           <div className="flex justify-center items-center gap-4 mb-4">
              {projects.map((p, i) => (
                <span 
                  key={p.id} 
                  className={cn(
                    "font-display font-bold text-2xl transition-colors duration-500",
                    i === activeIndex ? "text-[var(--color-accent-cream)] scale-125" : "text-[var(--color-accent-gray)] opacity-50"
                  )}
                >
                  {p.id}
                </span>
              ))}
           </div>
           <div className="flex justify-between items-end w-full">
               <span className="font-sans font-bold tracking-widest text-sm text-[var(--color-accent-gray)]">00:00:05</span>
               <div className="text-center absolute left-1/2 -translate-x-1/2">
                   <span className="font-sans font-bold tracking-widest text-sm text-[var(--color-accent-gray)]">
                      {activeIndex + 1}/{projects.length}
                   </span>
               </div>
               <span className="font-sans font-bold tracking-widest text-sm text-[var(--color-accent-orange)] flex items-center gap-2">
                 <span className={cn("w-2 h-2 rounded-full bg-[var(--color-accent-orange)]", isScrolling ? "opacity-50" : "animate-pulse")}></span>
                 {isScrolling ? "PAUSED" : "PLAYING"}
               </span>
           </div>
        </div>

      </section>
    </main>
  );
}
