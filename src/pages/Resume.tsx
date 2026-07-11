import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Printer, Download, Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Resume() {
  const [searchParams] = useSearchParams();

  // Automatically trigger print dialog if query parameter `print=true` is passed
  useEffect(() => {
    if (searchParams.get("print") === "true") {
      const timer = setTimeout(() => {
        window.print();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-accent-cream)] py-12 px-6 md:py-24 md:px-12 print:bg-white print:text-black print:p-0">
      {/* Back & Action Buttons Header */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-accent-orange)] transition-colors text-sm uppercase tracking-wider font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-cream)] hover:text-[var(--color-bg-primary)] transition-all px-5 py-2.5 rounded-full font-mono text-xs tracking-widest font-black uppercase shadow-lg"
          >
            <Printer className="w-4 h-4" />
            Print Resume
          </button>
          <button 
            onClick={handlePrint}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white hover:text-white text-gray-300 transition-all px-5 py-2.5 rounded-full font-mono text-xs tracking-widest font-black uppercase"
          >
            <Download className="w-4 h-4" />
            Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-white/5 p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden print:border-0 print:bg-white print:p-0 print:rounded-none print:shadow-none">
        
        {/* Subtle Decorative elements for screen view only */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-orange)]/5 rounded-full blur-3xl pointer-events-none print:hidden" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream/5 rounded-full blur-3xl pointer-events-none print:hidden" />

        {/* Header Block */}
        <header className="border-b border-white/10 pb-8 mb-10 print:border-black/10 print:pb-6 print:mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-[var(--color-accent-cream)] mb-2 print:text-black print:text-4xl">
                Vedant Vaibhav
              </h1>
              <p className="font-sans text-lg text-[var(--color-accent-orange)] tracking-wide font-medium uppercase print:text-zinc-700 print:text-sm">
                Computer Science Undergraduate & Developer
              </p>
            </div>
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs text-gray-400 print:text-zinc-600 print:grid-cols-2">
              <a href="mailto:vedantvaibhav28@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors print:hover:text-black">
                <Mail className="w-3.5 h-3.5 text-[var(--color-accent-orange)] print:text-zinc-600" />
                vedantvaibhav28@gmail.com
              </a>
              <a href="tel:+916001350031" className="flex items-center gap-2 hover:text-white transition-colors print:hover:text-black">
                <Phone className="w-3.5 h-3.5 text-[var(--color-accent-orange)] print:text-zinc-600" />
                +91 6001350031
              </a>
              <a href="https://github.com/Vedantt56" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors print:hover:text-black">
                <Github className="w-3.5 h-3.5 text-[var(--color-accent-orange)] print:text-zinc-600" />
                github.com/Vedantt56
              </a>
              <a href="https://www.linkedin.com/in/vedant-vaibhav-b9b48b35b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors print:hover:text-black">
                <Linkedin className="w-3.5 h-3.5 text-[var(--color-accent-orange)] print:text-zinc-600" />
                linkedin.com/in/vedant-vaibhav-b9b48b35b/
              </a>
            </div>
          </div>
          
          {/* External Links Badges */}
          <div className="flex flex-wrap gap-3 mt-6 print:hidden">
            <a 
              href="https://leetcode.com/u/vedantvaibhav28/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>Leetcode</span>
              <ExternalLink className="w-3 h-3 text-[var(--color-accent-orange)]" />
            </a>
            <a 
              href="https://github.com/Vedantt56" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[var(--color-accent-orange)]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vedant-vaibhav-b9b48b35b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[var(--color-accent-orange)]" />
            </a>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-accent-orange)] mb-4 print:text-black print:font-bold print:border-b print:border-black/10 print:pb-1 print:mb-2">
            Profile Summary
          </h2>
          <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed print:text-zinc-800 print:text-xs">
            Computer Science undergraduate with a strong foundation in Data Structures & Algorithms
            and experience developing full-stack and blockchain applications using React, Next.js,
            Node.js, MongoDB, and Solidity.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-accent-orange)] mb-4 print:text-black print:font-bold print:border-b print:border-black/10 print:pb-1 print:mb-2">
            Education
          </h2>
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-[var(--color-accent-cream)] print:text-black print:text-xs">
                Bachelor of Technology (B.Tech) in Computer Science & Engineering
              </h3>
              <p className="text-gray-400 font-sans text-sm mt-1 print:text-zinc-600 print:text-[11px]">
                ABES Engineering College
              </p>
            </div>
            <div className="text-right font-mono text-xs text-gray-400 print:text-zinc-600 print:text-[11px]">
              <div className="text-[var(--color-accent-orange)] font-bold print:text-black">2024 – 2028</div>
              <div>CGPA: 7.6 / 10</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-accent-orange)] mb-4 print:text-black print:font-bold print:border-b print:border-black/10 print:pb-1 print:mb-2">
            Key Projects
          </h2>
          <div className="space-y-8 print:space-y-4">
            {/* CalTrack */}
            <div>
              <div className="flex justify-between items-baseline gap-4 mb-2 print:mb-1">
                <h3 className="font-display font-black text-lg text-[var(--color-accent-cream)] uppercase tracking-wide print:text-black print:text-xs">
                  CalTrack – Calorie Tracking Platform
                </h3>
                <a 
                  href="https://github.com/Vedantt56" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-[10px] text-[var(--color-accent-orange)] hover:underline flex items-center gap-1 print:text-black"
                >
                  GitHub <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-400 font-sans text-sm print:text-zinc-700 print:text-[11px] print:space-y-0.5">
                <li>Built a scalable full-stack calorie tracking application featuring AI-assisted food recognition and nutritional analysis.</li>
                <li>Designed JWT-based authentication, responsive dashboards, and CRUD-based meal management with Next.js, Node.js, MongoDB, and TypeScript.</li>
                <li>Optimized application architecture for maintainability, responsiveness, and seamless user interaction.</li>
              </ul>
            </div>

            {/* Zeneth */}
            <div>
              <div className="flex justify-between items-baseline gap-4 mb-2 print:mb-1">
                <h3 className="font-display font-black text-lg text-[var(--color-accent-cream)] uppercase tracking-wide print:text-black print:text-xs">
                  Zeneth – Ethereum-Based Decentralized Application
                </h3>
                <a 
                  href="https://github.com/Vedantt56" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-[10px] text-[var(--color-accent-orange)] hover:underline flex items-center gap-1 print:text-black"
                >
                  GitHub <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-400 font-sans text-sm print:text-zinc-700 print:text-[11px] print:space-y-0.5">
                <li>Engineered a decentralized application on the Ethereum blockchain using Solidity smart contracts for secure on-chain transactions.</li>
                <li>Integrated MetaMask wallet authentication and smart contract interactions using Ethers.js, enabling seamless blockchain connectivity.</li>
                <li>Developed a responsive React frontend with efficient contract communication and transaction handling.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-accent-orange)] mb-4 print:text-black print:font-bold print:border-b print:border-black/10 print:pb-1 print:mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 print:grid-cols-1 print:gap-y-2">
            <div className="space-y-2 print:space-y-1">
              <div className="font-mono text-xs text-gray-400 font-bold uppercase print:text-black print:text-[10px]">Languages & Frameworks</div>
              <p className="text-gray-300 font-sans text-sm print:text-zinc-700 print:text-[11px]">
                <strong className="text-[var(--color-accent-cream)] print:text-black">Languages:</strong> C++, JavaScript, TypeScript, Python
              </p>
              <p className="text-gray-300 font-sans text-sm print:text-zinc-700 print:text-[11px]">
                <strong className="text-[var(--color-accent-cream)] print:text-black">Frameworks:</strong> React, Next.js, Node.js, Express.js, Tailwind CSS
              </p>
            </div>
            <div className="space-y-2 print:space-y-1">
              <div className="font-mono text-xs text-gray-400 font-bold uppercase print:text-black print:text-[10px]">Databases & Tools</div>
              <p className="text-gray-300 font-sans text-sm print:text-zinc-700 print:text-[11px]">
                <strong className="text-[var(--color-accent-cream)] print:text-black">Databases:</strong> MongoDB, Firebase, SQL
              </p>
              <p className="text-gray-300 font-sans text-sm print:text-zinc-700 print:text-[11px]">
                <strong className="text-[var(--color-accent-cream)] print:text-black">Tools & Core:</strong> Git, GitHub, Docker, Postman, AWS, DSA, OOP, REST APIs
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="print:mb-4">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-accent-orange)] mb-4 print:text-black print:font-bold print:border-b print:border-black/10 print:pb-1 print:mb-2">
            Certifications
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-400 font-sans text-sm print:text-zinc-700 print:text-[11px] print:space-y-0.5">
            <li>AWS Academy Graduate – Cloud Architecting</li>
            <li>AWS Academy Graduate – Cloud Foundations</li>
            <li>Oracle Certified Foundations Associate (OCI 2025 AI Foundations Associate)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
