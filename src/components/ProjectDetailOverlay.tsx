import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Project } from "../data/projectsData";

interface ProjectDetailOverlayProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, isOpen, onClose }: ProjectDetailOverlayProps) {
  const [shootOn, setShootOn] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync scroll lock on body
  useEffect(() => {
    if (isOpen) {
      // Capture the current scroll position of the window
      const scrollY = window.scrollY;
      
      // Lock the background page exactly in place
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100vw";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Instantly scroll overlay container to absolute top on mount/open
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
        scrollRef.current.focus();
      }

      // Slightly delayed backup to ensure container is focused and scrolled to top
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = 0;
          scrollRef.current.focus();
        }
      }, 30);
      return () => clearTimeout(timer);
    } else {
      // Retrieve the saved scroll position
      const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));

      // Revert the background locks
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Restore the window scroll position to the exact scroll coordinate
      if (scrollY > 0) {
        window.scrollTo(0, scrollY);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      // Safety cleanup if the overlay component gets unmounted while open
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Keep a digital time stamp matching the style in the screenshot
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      // Format to: "MON 10:08 A.M"
      const formatted = now.toLocaleDateString("en-US", options);
      const parts = formatted.split(",");
      const day = parts[0]?.toUpperCase() || "MON";
      const timeStr = parts[1]?.trim().toUpperCase().replace(" AM", " A.M").replace(" PM", " P.M") || "10:08 A.M";
      setCurrentTime(`${day} ${timeStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="project-detail-portal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-[100] bg-black text-[var(--color-accent-cream)] overflow-y-auto overscroll-contain scroll-smooth font-sans outline-none"
        tabIndex={-1}
        ref={scrollRef}
        data-lenis-prevent="true"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] bg-[var(--color-accent-cream)] text-black hover:bg-[var(--color-accent-orange)] hover:text-[var(--color-bg-primary)] rounded-full p-3.5 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Close project"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Outer Container strictly respecting the visual layout in screenshot */}
        <div className="w-full min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-16 select-text">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start w-full mt-10 lg:mt-6 mb-16">
            
            {/* ---------------- LEFT SPECS COLUMN ---------------- */}
            <div className="lg:col-span-5 flex flex-col text-left">
              
              {/* Giant bold project title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4vw] xl:text-[4.5vw] font-display font-black leading-[0.85] tracking-normal text-white uppercase break-words pr-4">
                {project.title}
              </h1>



              {/* Technical Specifications Rows with Thin Horizontal Dividers */}
              <div className="mt-12 space-y-6">
                
                {/* Year Block */}
                <div className="border-t border-white/10 pt-4.5">
                  <p className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">YEAR</p>
                  <p className="text-lg md:text-xl font-bold font-display text-white mt-1.5">{project.year}</p>
                </div>

                {/* Role Block */}
                <div className="border-t border-white/10 pt-4.5">
                  <p className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">ROLE</p>
                  <p className="text-lg md:text-xl font-bold font-display text-white mt-1.5">{project.role}</p>
                </div>

                {/* Tech Stack Block */}
                <div className="border-t border-white/10 pt-4.5">
                  <p className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">TECH STACK</p>
                  <p className="text-sm md:text-base font-medium font-mono text-zinc-200 mt-1.5 leading-relaxed">
                    {project.techStack}
                  </p>
                </div>

                {/* Status Block */}
                <div className="border-t border-b border-white/10 py-4.5">
                  <p className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">STATUS</p>
                  <p className="text-lg md:text-xl font-bold font-display text-white mt-1.5">{project.status}</p>
                </div>

              </div>

              {/* Bottom Interactive Control Capsule Pills */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                
                {/* Clean View Source Link button */}
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-zinc-900 border border-white/20 hover:border-white px-7 py-2.5 rounded-full transition-all text-xs font-mono font-black tracking-widest uppercase text-white flex items-center justify-center hover:scale-102"
                  >
                    VIEW SOURCE CODE
                  </a>
                )}



              </div>

            </div>

            {/* ---------------- RIGHT DESCRIPTION COLUMN ---------------- */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Detail Mock Image */}
              {project.mockImage && (
                <div className="mb-12 w-full shadow-2xl relative overflow-hidden rounded-xl bg-[var(--color-bg-secondary)]">
                  <img 
                    src={project.mockImage} 
                    alt={`${project.title} mock display`} 
                    className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 hover:opacity-100" 
                  />
                </div>
              )}

              {/* Huge bold uppercase block description text */}
              <h2 className="text-3xl md:text-4xl lg:text-[3.2vw] xl:text-[3.4vw] font-display font-medium leading-[1.05] tracking-normal text-[var(--color-accent-cream)] uppercase break-normal">
                {project.description}
              </h2>

              {/* Horizontal rule right below description */}
              <div className="border-t border-white/10 mt-8 mb-12 w-full" />

              {/* Deep Case study Highlights detail blocks */}
              <div className="space-y-8 max-w-[90%]">
                <p className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                  PROJECT SPECIFICS &bull; HIGHLIGHTS
                </p>
                
                <ul className="space-y-6">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-4 items-start group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-orange)] mt-2.5 shrink-0 transition-transform group-hover:scale-130" />
                      <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed group-hover:text-[var(--color-accent-cream)] transition-colors duration-300">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* ---------------- BOTTOM FOOTER META BAR ---------------- */}
          <div className="w-full flex justify-between items-end border-t border-white/5 pt-6 text-[10px] md:text-xs font-mono text-zinc-500 select-none mt-12">
            <span className="uppercase tracking-[0.2em]">{project.title} &bull; CONSOLE LOG</span>
            <span className="text-[var(--color-accent-cream)] font-bold uppercase tracking-widest">
              {currentTime}
            </span>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
