import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Globe } from 'lucide-react';

import  { Toaster } from 'react-hot-toast';
import myprofile from './assets/myprofile.jpg'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold gradient-text">Portfolio</span>
            <div className="flex gap-8">
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img
                src={myprofile}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text mt-2">Aparajita Mehrotra</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A passionate Full Stack Developer crafting beautiful digital experiences. 
              Specializing in modern web technologies and creative solutions.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <a href="https://github.com/AparajitaM05" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/aparajita-mehrotra-336550237/" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="mailto:sonivanshu012@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text inline-block">Featured Projects</h2>
            <p className="mt-4 text-gray-500 text-lg">Some of my recent work that showcases my skills and passion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Plan Platform",
                description: "A full-featured online Planner with React, Node.js, and Mongodb integration",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
                tech: ["React", "Node.js", "Mongodb"],
                icon: <Globe className="text-indigo-600" size={20} />
              },
          
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://plannit-3uca.vercel.app/"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text inline-block">Skills & Expertise</h2>
            <p className="mt-4 text-gray-500 text-lg">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', level: 'Intermidiate' },
              { name: 'React', level: 'Intermidiate' },
              { name: 'Node.js', level: 'Intermidiate' },
              { name: 'React Native', level: 'Intermidiate' },
              { name: 'AWS', level: 'Intermediate' },
              { name: 'Docker', level: 'Intermediate' }
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold gradient-text inline-block">Get in Touch</h2>
      <p className="mt-4 text-gray-500 text-lg">Interested in working together? Let's talk!</p>
    </div>

    <div className="max-w-xl mx-auto">
      {/* Form using FormSubmit */}
      <form 
        action="https://formsubmit.co/sonivanshu012@gmail.com" 
        method="POST" 
        className="space-y-6"
      >
        {/* Hidden fields for subject and disabling captcha */}
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-style"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-style"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="input-style"
            placeholder="Your message here..."
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg shadow-md text-sm font-medium text-white button-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold gradient-text inline-block">Aparajita Mehrotra</h3>
              <p className="mt-2 text-gray-400">Building digital experiences with passion and purpose</p>
            </div>
            <div className="flex justify-start md:justify-end gap-6">
              <a href="https://github.com/AparajitaM05" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aparajita-mehrotra-336550237/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Aparajita Mehrotra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;