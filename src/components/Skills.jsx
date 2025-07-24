import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 60 },
        { name: 'Next.js', level: 70 },
        { name: 'JavaScript', level: 80  },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 40 },
        { name: 'Express.js', level: 40 },
        { name: 'MongoDB', level: 60 },
        { name: 'RESTful APIs', level: 40 },
        { name: 'Authentication', level: 10},
        { name: 'Database Design', level: 40 },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 40 },
        { name: 'Linux', level: 30 },
        { name: 'Vite', level: 30 },
        { name: 'NPM', level: 30 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 30 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 overflow-x-hidden relative min-h-screen">
      {/* Background Image with Parallax Effect */}
            <motion.div 
              className="absolute inset-0 z-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <>
                {/* Desktop / Tablet Background */}
                <img
                 src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                  alt="Men's Fashion - Desktop"
                  className="hidden sm:block w-full h-full object-cover"
                />
      
                {/* Mobile Background - vertical fit */}
                <img
                 src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                  alt="Men's Fashion - Mobile"
                  className="block sm:hidden w-full h-full object-cover object-center"
                />
              </>
      
              {/* <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              /> */}
            </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: [0, 1, 0] }}
                          transition={{ 
                            duration: 0.8, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                          }}
                          viewport={{ once: true }}
                          className="absolute inset-0 bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Technologies I Love Working With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
              { name: 'Node.js', color: 'from-green-400 to-green-600' },
              { name: 'MongoDB', color: 'from-green-500 to-green-700' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600' },
              { name: 'Express.js', color: 'from-gray-500 to-gray-700' },
              { name: 'Git', color: 'from-orange-400 to-orange-600' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`bg-gradient-to-r ${tech.color} backdrop-blur-sm text-sm sm:text-lg rounded-md sm:rounded-xl px-2 py-1 sm:px-6 sm:py-3 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer`}
              >
                <span className="text-white font-small sm:font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;