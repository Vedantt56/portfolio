import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-auto">
      <div className="flex justify-between items-center px-6 md:px-12 py-8 max-w-[1920px] mx-auto text-[var(--color-accent-cream)]">
        <Link to="/" className="text-xl md:text-2xl font-display uppercase tracking-widest font-semibold inline-block relative overflow-hidden group">
          <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">V. Vaibhav</span>
          <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 text-[var(--color-accent-orange)]">V. Vaibhav</span>
        </Link>
        <ul className="flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "relative text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-300",
                    isActive ? "text-[var(--color-accent-cream)]" : "text-[var(--color-accent-gray)] hover:text-[var(--color-accent-cream)]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--color-accent-cream)]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
