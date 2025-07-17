"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About", emoji: "👨‍💻" },
  { href: "#skills", label: "Skills", emoji: "⚡" },
  { href: "#projects", label: "Projects", emoji: "🚀" },
  { href: "#contact", label: "Contact", emoji: "📬" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav
      className="w-full bg-transparent z-50 transition-all duration-500 relative"
      style={{ boxShadow: "0 10px 40px 0 rgba(0,64,32,0.12)", background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="relative group"
          >
            <Link href="/" className="flex items-center gap-3 select-none">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-green-600 via-black to-emerald-500 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-green-700/40"
                whileHover={{ rotate: 16, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <Zap className="text-green-300 w-6 h-6 drop-shadow" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-400/10 to-emerald-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:text-green-200 transition-colors tracking-wide">
                  RK12
                </span>
                <span className="text-xs text-green-400/80 font-mono tracking-widest">v2.0.24</span>
              </div>
            </Link>
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-emerald-400/20 to-green-900/10 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-400"
              initial={false}
            />
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="relative px-5 py-2 rounded-xl text-green-200 hover:text-green-400 font-semibold text-lg transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">{item.emoji}</span>
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-bl from-green-900/60 via-emerald-700/20 to-black/60 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                    initial={false}
                  />
                  <motion.div
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
            {/* CTA BUTTON */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="ml-4 relative overflow-hidden group px-7 py-2 rounded-xl bg-gradient-to-r from-green-500 via-emerald-600 to-black text-white font-bold shadow-lg border border-green-700/40 hover:from-emerald-600 hover:to-green-700 hover:text-green-200 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-green-200/10 to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>Hire Me</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
              </span>
            </motion.a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleNav}
            className="md:hidden p-3 bg-gradient-to-br from-green-900/60 via-black/50 to-green-800/70 border border-green-600/20 rounded-xl shadow hover:shadow-green-700/40"
          >
            <AnimatePresence mode="wait">
              {navOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} className="text-green-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} className="text-green-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="pt-6 pb-8 space-y-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleNav}
                      className="flex items-center gap-3 px-6 py-4 text-green-100 hover:bg-gradient-to-r hover:from-green-900/80 hover:to-emerald-800/70 hover:text-green-400 glass-effect rounded-xl transition-all duration-300 group text-lg font-semibold"
                    >
                      <span className="text-xl group-hover:animate-bounce">{item.emoji}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-3"
                >
                  <a
                    href="#contact"
                    onClick={toggleNav}
                    className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 via-emerald-600 to-black text-white font-bold shadow hover:from-black hover:to-emerald-600 hover:text-green-200 border border-green-600/40 transition-all duration-300"
                  >
                    Hire Me 🚀
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Custom bounce effect for emoji and glass-effect */}
      <style jsx>{`
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 0.6s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          30% { transform: translateY(-9px);}
          50% { transform: translateY(2px);}
        }
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(15, 30, 20, 0.32);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;