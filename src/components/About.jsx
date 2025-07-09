import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Sparkles, User, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Months of Experience', value: '3+', icon: Code },
    { label: 'Projects Completed', value: '2', icon: Globe },
    { label: 'Technologies learning', value: '5+', icon: Sparkles },
    { label: 'Client Satisfaction', value: '100%', icon: Award },
  ];

  return (
    <section id="about" className="overflow-x-hidden py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer who loves turning ideas into beautiful, functional web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in web development began with a curiosity about how websites work. 
                Over the years, I've evolved from writing simple HTML pages to building complex, 
                scalable applications using modern JavaScript frameworks.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in the React.js ecosystem, creating responsive and interactive user interfaces. 
                My backend experience with Node.js and database management with MongoDB allows me to 
                build full-stack applications that deliver exceptional user experiences.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What I Value
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Code",
                description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
                icon: Code,
              },
              {
                title: "User Experience",
                description: "Creating intuitive interfaces that provide seamless interactions and delightful user journeys.",
                icon: Sparkles,
              },
              {
                title: "Continuous Learning",
                description: "Staying up-to-date with the latest technologies and best practices in web development.",
                icon: Globe,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <value.icon size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;