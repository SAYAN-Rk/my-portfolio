"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: "Story",
      icon: "📖",
      content: "I'm a passionate Full Stack Developer with 3+ years of experience creating digital solutions that matter. My journey started with curiosity and has evolved into a mission to build technology that makes a difference."
    },
    {
      title: "Mission",
      icon: "🎯",
      content: "To bridge the gap between innovative ideas and exceptional user experiences. I believe in creating not just functional applications, but digital experiences that inspire and engage users on a deeper level."
    },
    {
      title: "Values",
      icon: "⭐",
      content: "Quality over quantity, user-centric design, continuous learning, and collaborative growth. I'm committed to writing clean, maintainable code and staying at the forefront of technology trends."
    }
  ];

  const stats = [
    { number: "6+", label: "Projects Completed", color: "from-primary-400 to-primary-600" },
    { number: "2+", label: "Years Experience", color: "from-accent-400 to-accent-600" },
    { number: "100%", label: "Client Satisfaction", color: "from-neon-pink to-neon-purple" },
    { number: "24/7", label: "Availability", color: "from-neon-blue to-primary-400" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-black via-dark-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-full mb-8"
          >
            <span className="text-2xl">👨‍💻</span>
            <span className="text-primary-400 font-semibold">About Me</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
              Know Me Better
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
             
  
          {/* Left side - Interactive tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tab navigation */}
            <div className="flex gap-4 mb-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-black'
                      : 'bg-black/40 backdrop-blur-xl border border-primary-500/30 text-primary-400 hover:border-primary-400'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.title}
                </motion.button>
              ))}

            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-8"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </motion.div>

  

            {/* Skills visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6">Core Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React/Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-xl p-4 hover:border-primary-400 transition-all duration-300"
                  >
                    <span className="text-primary-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Stats with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                className="relative group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div className="bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-8 text-center relative overflow-hidden group-hover:border-primary-400 transition-all duration-300">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-4xl font-black text-primary-400 mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, #22c55e, transparent)`,
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 0.3, rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-black font-bold rounded-full relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">Let's Work Together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              🚀
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}