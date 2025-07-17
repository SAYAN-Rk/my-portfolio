"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Bank Management System",
    description: "A secure and user-friendly web-based banking application that enables users to manage their accounts, perform transactions, and access mini statements digitally.",
    longDescription: "Built with Java and MySQL. Features include user authentication, account management, ministatement display, payment integration with Stripe, and real-time notifications.",
    tech: ["Java", "Tomcat", "MySQL", "Stripe", "Socket.io"],
    image: "https://static.vecteezy.com/system/resources/previews/010/518/840/original/digital-finance-and-banking-service-in-futuristic-background-bank-building-with-online-payment-transaction-secure-money-and-financial-innovation-technology-vector.jpg",
    link: "https://bank-web-app-livid.vercel.app/",
    github: "https://github.com/SAYAN-Rk/BankWebApp",
    category: "Full Stack",
    status: "Live"
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team collaboration features.",
    longDescription: "React-based application with drag-and-drop functionality, real-time collaboration, file sharing, and advanced project analytics. Integrated with third-party APIs for enhanced productivity.",
    tech: ["React", "Firebase", "Material-UI", "Chart.js"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    category: "Frontend",
    status: "Live"
  },
  {
    title: "AI Chat Application",
    description: "An intelligent chatbot with natural language processing and machine learning capabilities.",
    longDescription: "Advanced chat application powered by OpenAI API, featuring context-aware conversations, file uploads, voice messages, and custom AI training for specific use cases.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    category: "AI/ML",
    status: "Development"
  },
  {
    title: "Crypto Trading Dashboard",
    description: "Real-time cryptocurrency trading dashboard with advanced analytics and portfolio management.",
    longDescription: "Comprehensive trading platform with real-time market data, technical analysis tools, portfolio tracking, and automated trading strategies. Built for both beginners and professional traders.",
    tech: ["Vue.js", "Node.js", "WebSocket", "D3.js", "Redis"],
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    category: "Full Stack",
    status: "Live"
  },
  {
    title: "Social Media Analytics",
    description: "Advanced analytics platform for social media performance tracking and insights.",
    longDescription: "Comprehensive analytics dashboard that aggregates data from multiple social platforms, provides detailed insights, competitor analysis, and automated reporting features.",
    tech: ["React", "Python", "PostgreSQL", "Docker", "AWS"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    category: "Data",
    status: "Live"
  },
  {
    title: "IoT Home Automation",
    description: "Smart home automation system with mobile app control and voice commands.",
    longDescription: "Complete IoT solution for home automation including mobile app, web dashboard, voice control integration, and support for various smart devices and sensors.",
    tech: ["React Native", "Node.js", "MQTT", "Arduino", "AWS IoT"],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    category: "IoT",
    status: "Development"
  }
];

const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Data", "IoT"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-black via-dark-900 to-black text-white relative overflow-hidden"
    >
      {/* Gradient Blobs & Lines */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-400/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-2xl border border-primary-500/40 rounded-full mb-8 shadow-lg"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              🚀
            </motion.span>
            <span className="text-primary-400 font-semibold tracking-wider">Projects</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent drop-shadow-lg">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A showcase of projects that demonstrate my skills and passion for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none
                ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-black shadow-md border-2 border-primary-500 animate-border-glow'
                    : 'bg-black/30 backdrop-blur-xl border border-primary-500/30 text-primary-400 hover:border-primary-400'
                }
              `}
              tabIndex={0}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-black/30 backdrop-blur-2xl border border-primary-500/30 rounded-3xl overflow-hidden transition-shadow duration-300 hover:border-primary-400 shadow-lg hover:shadow-accent-500/30"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title + " screenshot"}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:grayscale-0 grayscale transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold drop-shadow-lg
                  ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }
                `}>
                  {project.status}
                </div>
                {/* Hover Overlay: Reveal long description only on image */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center p-8 text-center text-white font-medium text-base z-20 backdrop-blur-lg transition-opacity"
                      style={{ pointerEvents: "none" }}
                    >
                      <p>{project.longDescription}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full font-medium shadow">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-accent-500/30 text-accent-200 rounded-full font-semibold shadow"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-700/40 text-gray-300 rounded-full font-semibold">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-black font-semibold rounded-lg text-center text-sm hover:shadow-xl hover:ring-2 hover:ring-accent-400 transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 border border-primary-500/50 text-primary-400 font-semibold rounded-lg text-sm hover:bg-primary-500/20 hover:text-white transition-all duration-300"
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -5, boxShadow: "0 0 16px #7f5af0" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-500/70 text-primary-400 font-bold rounded-full backdrop-blur-lg hover:bg-primary-500/10 hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>Want to see more?</span>
            <motion.span
              animate={{ x: [0, 7, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      <style>{`
        .animate-border-glow {
          box-shadow: 0 0 0 0 #7f5af0, 0 0 12px 2px #ffd803;
          animation: borderGlow 1.5s infinite alternate;
        }
        @keyframes borderGlow {
          0% { box-shadow: 0 0 0 0 #7f5af0, 0 0 6px 2px #ffd803; }
          100% { box-shadow: 0 0 0 0 #ffd803, 0 0 24px 4px #7f5af0; }
        }
      `}</style>
    </section>
  );
}