import { useRef } from "react";
import { ExternalLink, Award, BookOpen, Clock, Calendar, CheckCircle } from "lucide-react";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  const credentials = [
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services (AWS) Academy",
      issuedOn: "05/23/2026",
      hours: "60 hours",
      badgeLink: "https://www.credly.com/go/SQjToKg4",
      badgeType: "aws-architecting",
      skills: ["Cloud Architecture", "AWS Services", "IAM", "VPC & Networking", "Auto Scaling", "High Availability"]
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS) Academy",
      issuedOn: "02/09/2026",
      hours: "20 hours",
      badgeLink: "https://www.credly.com/go/9l4JGOsi",
      badgeType: "aws-foundations",
      skills: ["Cloud Concepts", "Cloud Security", "AWS Core Services", "Cloud Billing & Support"]
    },
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      issuedOn: "10/31/2025",
      validUntil: "10/31/2027",
      credentialId: "103061359OCI25AICFA",
      badgeType: "oracle-ai",
      skills: ["Artificial Intelligence", "Machine Learning", "Generative AI", "OCI AI Services", "Deep Learning Foundations"]
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#080808] py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-[1920px] mx-auto w-full">
        
        {/* Credentials & Certifications Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4">
            VERIFIED CREDENTIALS
          </p>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black italic uppercase leading-[0.85] tracking-tighter text-[var(--color-accent-cream)] mb-6">
            BADGES & CERTIFICATIONS
          </h2>
          <p className="text-gray-400 font-sans text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Leading-edge cloud architecture, computer infrastructure validation, and artificial intelligence foundations.
          </p>
        </div>

        {/* Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {credentials.map((cred, index) => (
            <div 
              key={index} 
              className="group bg-[#0b0c0f] border border-white/5 hover:border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Badge Visual Section */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    {/* Badge Meta Tag */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 pb-1.5 rounded-full text-[10px] tracking-widest font-black uppercase bg-white/5 border border-white/10 text-gray-400 mb-4 font-mono">
                      {cred.badgeType.includes("aws") ? "AWS ACADEMY" : "ORACLE UNIVERSITY"}
                    </span>
                    <h3 className="text-lg md:text-xl font-sans font-bold text-white tracking-tight leading-tight uppercase group-hover:text-[var(--color-accent-orange)] transition-colors duration-300">
                      {cred.title}
                    </h3>
                    {"subtitle" in cred && (
                      <p className="text-xs text-gray-500 font-sans font-medium mt-1 uppercase tracking-wide">
                        {cred.subtitle}
                      </p>
                    )}
                  </div>

                  {/* High Quality Custom Vector SVG Badge */}
                  <div className="shrink-0 ml-4 group-hover:scale-105 transition-transform duration-500">
                    {cred.badgeType === "aws-architecting" && (
                      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
                        <path d="M10 20 L60 10 L110 20 L110 80 Q110 100 60 115 Q10 100 10 80 Z" fill="#1b263b" stroke="#38bdf8" strokeWidth="2.5" />
                        <path d="M15 24 L60 14 L105 24 L105 78 Q105 96 60 110 Q15 96 15 78 Z" fill="#ffffff" />
                        <text x="60" y="42" textAnchor="middle" fill="#232f3e" fontSize="13" fontWeight="bold" fontFamily="sans-serif">aws</text>
                        <path d="M48 46 Q60 52 72 46 Q60 55 48 46 Z" fill="#ff9900" />
                        <text x="60" y="60" textAnchor="middle" fill="#232f3e" fontSize="8" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">ACADEMY</text>
                        <line x1="30" y1="65" x2="90" y2="65" stroke="#232f3e" strokeWidth="1-px" />
                        <text x="60" y="74" textAnchor="middle" fill="#232f3e" fontSize="7" fontWeight="black" fontFamily="sans-serif">Cloud</text>
                        <text x="60" y="82" textAnchor="middle" fill="#232f3e" fontSize="6.5" fontWeight="black" fontFamily="sans-serif">Architecting</text>
                        <path d="M15 88 L105 88 L105 98 L60 106 L15 98 Z" fill="#38bdf8" />
                        <text x="60" y="96" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="black" letterSpacing="1.5" fontFamily="sans-serif">TRAINED</text>
                      </svg>
                    )}

                    {cred.badgeType === "aws-foundations" && (
                      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_4px_12px_rgba(30,41,59,0.4)]">
                        <path d="M10 20 L60 10 L110 20 L110 80 Q110 100 60 115 Q10 100 10 80 Z" fill="#1e293b" stroke="#1e293b" strokeWidth="2.5" />
                        <path d="M15 24 L60 14 L105 24 L105 78 Q105 96 60 110 Q15 96 15 78 Z" fill="#ffffff" />
                        <text x="60" y="42" textAnchor="middle" fill="#232f3e" fontSize="13" fontWeight="bold" fontFamily="sans-serif">aws</text>
                        <path d="M48 46 Q60 52 72 46 Q60 55 48 46 Z" fill="#ff9900" />
                        <text x="60" y="60" textAnchor="middle" fill="#232f3e" fontSize="8" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">ACADEMY</text>
                        <line x1="30" y1="65" x2="90" y2="65" stroke="#232f3e" strokeWidth="1-px" />
                        <text x="60" y="74" textAnchor="middle" fill="#232f3e" fontSize="7" fontWeight="black" fontFamily="sans-serif">Cloud</text>
                        <text x="60" y="82" textAnchor="middle" fill="#232f3e" fontSize="6.5" fontWeight="black" fontFamily="sans-serif">Foundations</text>
                        <path d="M15 88 L105 88 L105 98 L60 106 L15 98 Z" fill="#1e293b" />
                        <text x="60" y="96" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="black" letterSpacing="1.5" fontFamily="sans-serif">TRAINED</text>
                      </svg>
                    )}

                    {cred.badgeType === "oracle-ai" && (
                      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_4px_12px_rgba(239,68,68,0.2)]">
                        <circle cx="60" cy="60" r="50" fill="#2d1510" stroke="#f05138" strokeWidth="2" />
                        <circle cx="60" cy="60" r="44" fill="#ffffff" />
                        <circle cx="60" cy="60" r="38" fill="none" stroke="#f05138" strokeWidth="0.5" strokeDasharray="3 2" />
                        <path d="M40 32 L80 32 L78 44 L42 44 Z" fill="#ff0000" />
                        <text x="60" y="41" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="black" fontFamily="sans-serif" letterSpacing="0.5">ORACLE</text>
                        <text x="60" y="54" textAnchor="middle" fill="#2d1510" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">CERTIFIED</text>
                        <text x="60" y="64" textAnchor="middle" fill="#ff0000" fontSize="7.5" fontWeight="black" fontFamily="sans-serif">Foundations</text>
                        <text x="60" y="72" textAnchor="middle" fill="#2d1510" fontSize="6" fontWeight="bold" fontFamily="sans-serif">Associate</text>
                        <path d="M26 80 Q60 100 94 80 Q60 88 26 80 Z" fill="#f05138" />
                        <text x="60" y="88" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="black" fontFamily="sans-serif" letterSpacing="0.5">AI FOUNDATIONS</text>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 w-full my-6"></div>

                {/* Details list */}
                <div className="space-y-3 font-sans text-xs text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span>Issued by <strong className="text-gray-300 font-semibold">{cred.issuer}</strong></span>
                  </div>
                  {"hours" in cred && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Completed Coursework: <strong className="text-gray-300 font-semibold">{cred.hours}</strong></span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Issue Date: <strong className="text-gray-300 font-semibold">{cred.issuedOn}</strong></span>
                  </div>
                  {"validUntil" in cred && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                      <span>Valid Until: <strong className="text-gray-300 font-semibold">{cred.validUntil}</strong></span>
                    </div>
                  )}
                  {"credentialId" in cred && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>Credential ID: <strong className="text-gray-300 font-mono font-bold text-[10px] bg-white/5 px-1.5 py-0.5 rounded">{cred.credentialId}</strong></span>
                    </div>
                  )}
                </div>

                {/* Verified Skills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {cred.skills.map(skill => (
                    <span key={skill} className="bg-white/[0.02] border border-white/5 text-gray-400 font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {"badgeLink" in cred ? (
                <a 
                  href={cred.badgeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 bg-white/5 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 font-sans border border-white/5 hover:border-white"
                >
                  <span>Verify Digital Badge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="w-full py-3.5 bg-white/[0.02] text-gray-500 flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase rounded-xl font-sans border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500/80" />
                  <span>Oracle Authenticated</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
