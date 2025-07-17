"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Consulting", href: "#" },
        { name: "Maintenance", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/SAYAN-Rk", icon: <FaGithub size={22} /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/sayan-roy-338904335", icon: <FaLinkedin size={22} /> },
        { name: "Twitter", href: "#", icon: <FaTwitter size={22} /> },
        { name: "Email", href: "mailto:rk12.sayan@gmail.com", icon: <FaEnvelope size={22} /> }
      ]
    }
  ];

  return (
    <footer
      className="py-24 px-4 md:px-10 bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden"
    >
      {/* Stylish animated background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Orbs */}
        <motion.div 
          className="absolute top-1/3 left-[-6rem] w-[32rem] h-[32rem] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-[-4rem] w-[26rem] h-[26rem] bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top: Brand and Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-700/35 border border-emerald-500/20">
                <span className="text-black/90 font-extrabold text-3xl tracking-wider font-mono drop-shadow-md">
                  S
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-wide drop-shadow">
                  Sayan Roy
                </h3>
                <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-7 font-light">
              Crafting digital experiences that inspire and engage.<br />
              <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold animate-gradient-fade">
                Let's build something extraordinary together.
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-400 mt-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-emerald-400/60 shadow-sm"></div>
              <span>Available for new projects</span>
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.11 }}
              viewport={{ once: true }}
              className="min-w-[170px]"
            >
              <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-7 tracking-widest uppercase drop-shadow-md">
                {section.title}
              </h4>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.href?.startsWith("http") || link.href?.startsWith("mailto:") ? "_blank" : undefined}
                      rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 8, scale: 1.06 }}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 font-medium group"
                    >
                      {link.icon && (
                        <span className="text-emerald-400 group-hover:scale-125 transition-transform duration-200 drop-shadow">
                          {link.icon}
                        </span>
                      )}
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          viewport={{ once: true }}
          className="bg-black/60 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-10 mb-14 shadow-xl shadow-emerald-800/10"
        >
          <div className="text-center mb-7">
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 tracking-widest uppercase">Stay Updated</h4>
            <p className="text-gray-300 text-lg">Get notified about my latest projects and tech insights.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-black/40 border border-emerald-400/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-300 font-medium"
            />
            <motion.button
              whileHover={{ scale: 1.09, boxShadow: "0 2px 20px 0 rgba(16,185,129,0.16)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold rounded-lg hover:shadow-2xl shadow-emerald-400/30 transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.33 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-emerald-500/15"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} <span className="font-bold text-emerald-400">Sayan Roy</span>. All rights reserved. Made with <span className="inline-block text-red-400 animate-heartbeat">❤️</span> and lots of <span className="inline-block animate-bounce">☕</span>
          </p>
          <div className="flex items-center gap-7 text-sm text-gray-400">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Custom keyframes for animations */}
      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(1.33); }
          50% { transform: scale(0.95); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.1s infinite;
        }
      `}</style>
    </footer>
  );
}