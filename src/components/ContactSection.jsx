"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Instagram, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setIsSubmitted(false);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "rk12.sayan@gmail.com",
      description: "Send me an email anytime",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 94752 09338",
      description: "Call me for urgent matters",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Durgapur, India",
      description: "Available for remote work",
      color: "from-cyan-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "I'll get back to you quickly",
      color: "from-emerald-600 to-teal-700"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-emerald-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-teal-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-emerald-300" }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Dynamic mouse follower */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
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
        {/* Enhanced section header */}
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-black/50 backdrop-blur-xl border border-emerald-500/30 rounded-full mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-emerald-300 font-semibold text-lg">Contact</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl font-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Enhanced contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-black/50 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/20"
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-white mb-2">{method.title}</h4>
                    <p className="text-emerald-300 font-semibold mb-1">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-black/50 backdrop-blur-xl border border-emerald-500/30 rounded-xl flex items-center justify-center hover:border-emerald-400 transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-emerald-500/20`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-emerald-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-emerald-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-emerald-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ 
                    x: isSubmitting ? [-100, 200] : 0,
                    opacity: isSubmitting ? [0.5, 1, 0.5] : 0
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: isSubmitting ? Infinity : 0, 
                    ease: "linear" 
                  }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </span>
              </motion.button>

              {/* Success message */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ 
                  opacity: isSubmitted ? 1 : 0, 
                  y: isSubmitted ? 0 : 20,
                  scale: isSubmitted ? 1 : 0.9
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg"
              >
                <p className="text-emerald-400 font-semibold">✅ Message sent successfully!</p>
                <p className="text-emerald-300 text-sm mt-1">I'll get back to you soon.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-emerald-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-teal-400 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-cyan-400 rounded-full opacity-25 animate-ping" />
      </div>
    </section>
  );
}
