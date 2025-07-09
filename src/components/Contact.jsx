import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shivalingchougule0@gmail.com',
      href: 'mailto:shivalingchougule0@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8217373637',
      href: 'tel:+918217373637',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country',
      href: '#',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Shivaling Chougule',
      href: '#',
    },
    {
      icon: Github,
      title: 'Git Hub',
      value: 'Shiv-Chougule',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full relative pb-10 bg-gray-900 overflow-x-hidden"
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
                       src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                        alt="Men's Fashion - Desktop"
                        className="hidden sm:block w-full h-full object-cover"
                      />
            
                      {/* Mobile Background - vertical fit */}
                      <img
                       src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&h=1200&dpr=2"
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
      {/* Desktop Background Image */}
      {/* <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      /> */}
      {/* Mobile Background Image */}
      {/* <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&h=1200&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      /> */}
      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-8 bg-white/10 backdrop-blur-sm "
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow shadow-black">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            I'm always open to new opportunities and interesting projects. Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full gap-12 justify-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mx-2 max-w-2xl bg-gray-800/50 border border-gray-400/50 backdrop-blur-sm rounded-2xl py-8 px-2 sm:px-8 ">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Send size={24} className="hidden sm:inline-block" />
              <Send size={18} className="sm:hidden" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="max-w-2xl mx-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/50 py-8 px-2 sm:px-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <info.icon size={20} className="hidden sm:inline-block text-white" />
                      <info.icon size={16} className="sm:hidden text-white" />
                    </div>
                    <div className='overflow-x-hidden'>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl bg-gradient-to-r  bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">Let's build something amazing!</h3>
              <p className="text-gray-300">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to say hi, I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Contact;