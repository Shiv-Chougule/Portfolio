import React from 'react';
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import pic from '../assets/pic.jpg'; // or '../assets/pic.jpg'


const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 w-full sm:pt-0 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <motion.div 
              className="absolute inset-0 z-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <>
                {/* Desktop / Tablet Background */}
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Men's Fashion - Desktop"
                  className="hidden sm:block w-full h-full object-cover"
                />
      
                {/* Mobile Background - vertical fit */}
                <img
                  src="https://images.pexels.com/photos/5704791/pexels-photo-5704791.jpeg?auto=compress&cs=tinysrgb&w=720&h=1280&fit=crop"
                  alt="Men's Fashion - Mobile"
                  className="block sm:hidden w-full h-full object-cover object-center"
                />
              </>
      
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
      

      {/* Main layout */}
      <div className="flex flex-col-reverse md:flex-row w-full min-h-screen relative z-10 text-white max-w-7xl mx-auto overflow-x-hidden">
        {/* Left Column - Content (comes first in DOM for mobile, then switches to left on desktop) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="max-w-3xl mx-auto px-4 py-12 md:py-0 md:px-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I craft modern, responsive web applications with React.js, Node.js, and Next.js. Passionate about creating beautiful user experiences with clean, efficient code.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  View My Work
                  <ArrowDown size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" border-1 sm:border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-3 rounded-full font-small sm:font-semibold flex items-center gap-2"
                >
                  <Download size={16} className='sm:hidden' />
                  <Download size={20} className='hidden sm:inline-block' />
                  Download Resume
                </motion.button>
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start gap-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Right Column - Profile Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative">
        
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
          
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 rounded-full border-2 border-dashed border-blue-400/30"
            />

          
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 sm:-inset-3 md:-inset-4 lg:-inset-5 rounded-full border border-purple-500/20"
            />

            
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 sm:-inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-md"
            />

          
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1 shadow-2xl"
            >
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-600/50 blur-sm" />

            
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-full overflow-hidden w-full h-full bg-gray-900/80 backdrop-blur-sm relative z-10 border-4 border-gray-800/50"
              >
                
                <div className="w-full h-full place-center bg-gradient-to-br from-gray-700/80 to-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                <motion.img
                  src={pic}
                  alt="Profile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full object-cover"
                />
                </div>
              </motion.div>
            </motion.div>            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 500 }}
              className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 sm:border-3 md:border-4 border-gray-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
          {/* Name with animation */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
                whileHover={{ scale: 1.05 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                Shivaling Chougule
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-1 mt-2 bg-gradient-to-r from-blue-500/0 via-purple-500 to-emerald-500/0 rounded-full"
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
