"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 85, color: "from-gray-500 to-gray-700" },
      { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
      { name: "MySQL", level: 80, color: "from-orange-400 to-orange-600" },
    ]
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90, color: "from-purple-400 to-purple-600" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 70, color: "from-yellow-400 to-yellow-600" },
      { name: "Figma", level: 85, color: "from-pink-400 to-pink-600" },
    ]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-black via-dark-900 to-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-primary-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full"></div>
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
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ⚡
            </motion.span>
            <span className="text-primary-400 font-semibold">Skills</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
              My Expertise
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-black'
                  : 'bg-black/40 backdrop-blur-xl border border-primary-500/30 text-primary-400 hover:border-primary-400'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-6 hover:border-primary-400 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-primary-400 font-bold">{skill.level}%</span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-dark-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ 
                        duration: 2, 
                        repeat: hoveredSkill === index ? Infinity : 0, 
                        ease: "linear" 
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-primary-400 mb-8">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Java", "PHP", "Vue.js", "GraphQL", "Redis", "Nginx", "Linux"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-full text-primary-300 hover:border-primary-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}