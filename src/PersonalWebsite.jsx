import React, { useState, Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Rasenshuriken = () => {
    const { scene } = useGLTF(`${process.env.PUBLIC_URL}/rasenshuriken/scene.gltf`);
    return <primitive object={scene} scale={2} />;
};
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};

const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < description.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
};
  

const PersonalWebsite = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const experiences = [
    {
      title: "Past Experience",
      items: [
        {
          role: "Consulting Engineer Intern",
          company: "CDW",
          period: "Summer 2024",
          description: formatDescription("• Designed a full-stack application enabling fast storage and retrieval of network device data, cutting retrieval time by 90% through optimized database interactions (React, TCP, Flask, MongoDB, AWS).\n• Diagnosed and resolved Azure and Microsoft 365 technical issues, focusing on TCP networking configurations.\n• Automated daily tasks using Bash scripts, improving operational efficiency.")
        },
        {
          role: "Software Engineer Intern",
          company: "AbbVie",
          period: "Summer 2023",
          description: formatDescription("• Led Python-based integration of interactive visualizations into existing platforms, reducing data analysis time by 40% (PySpark, Django-Dash, NoSQL).\n• Validated Python models through rigorous unit testing (Pytest) to ensure performance and reliability.\n• Authored technical documentation on Docker, Linux, and Git workflows on Confluence to streamline onboarding.")
        },
        {
          role: "Software Developer",
          company: "Vanderbilt University Research",
          period: "Fall 2022",
          description: formatDescription("• Developed an ICU alarm recognition test using 4 alarm soundtracks for a study with over 60 participants (HTML, CSS, JavaScript).\n• Guided the research team through a web hosting process on a Virtual Private Server, optimizing server performance.\n• Integrated a website visitor counter to assign soundtracks to participants based on total visitor count stored in database using systematic random sampling, leading to more specific and representative results (PHP).")
        }
      ]
    },
    {
    title: "Personal Interests",
    items: [
        {
            activity: "Geography",
            description: "I play Geoguessr weekly and am building a Geoguessr Meta AI."
        },
        {
            activity: "Calisthenics",
            description: "I'm learning the basic holds and training for a 1-arm pullup."
        },
        {
            activity: "Hiking",
            description: "I like nature and have been to around half of the US National Parks."
        },
        {
            activity: "Anime",
            description: "I've watched over 100 anime and One Piece is my favorite."
        }
    ]
    }
];
  
  
  const projects = [
    {
      title: "LaxApply",
      description: "Extension that automates job applications in the background while you focus on any other task.",
      technologies: ["JavaScript"],
      link: "https://chromewebstore.google.com/detail/laxapply/mpdojlagekabcjidcdpbpbffbppdhafg",
      image: `${process.env.PUBLIC_URL}/project1.jpg` 
    },
    {
      title: "NLP Disaster Tweet Analysis",
      description: "Utilized Deep Learning, Logistic Regression, and Naive Bayes approaches to analyze locational inference on tweets made about natural disasters.",
      technologies: ["Python", "TensorFlow", "Matplotlib"],
      link: "https://https://github.com/Rsrirajan/NLP-DisasterTweets/tree/main",
      image: `${process.env.PUBLIC_URL}/project1.jpg`
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-lg p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#top" className="text-xl font-bold hover:text-cyan-400 transition-colors">
            Ramanan S
          </a>
          <div className="space-x-6">
            <a onClick={() => scrollToSection('top')} className="hover:text-cyan-400 transition-colors cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('rasenshuriken')} className="hover:text-cyan-400 transition-colors cursor-pointer">Animation</a>
            <a onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <img 
          src="mountains.jpg" 
          alt="Mountains" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-4 p-8 bg-black bg-opacity-50 rounded-lg backdrop-blur-md w-4/5 max-w-3xl">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Ramanan Srirajan.",
                  1000,
                ]}
                wrapper="h1"
                speed={50}
                className="text-5xl font-bold"
                repeat={0}
              />
              <hr className="w-1/2 mx-auto" />
              <p className="text-xl">
                I'm a Statistics and Computer Science Major at the University of Illinois at Urbana-Champaign. 
                I'm always trying to gain new skills; currently, I'm learning <strong>rock climbing</strong>. 
                Scroll to learn more.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Rsrirajan" target="_blank" rel="noopener noreferrer" 
                   className="text-4xl hover:text-cyan-400 transition-colors">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/ramanan-srirajan" target="_blank" rel="noopener noreferrer"
                   className="text-4xl hover:text-cyan-400 transition-colors">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id = "rasenshuriken" className="h-96 w-full">
        <Canvas camera={{ position: [0, 1.8, 1.8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Rasenshuriken />
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>
        <center><font size = "1" color = "grey"> Model by OPREXT on Sketchfab </font></center>
      </div>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Interests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((section, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="hover:bg-gray-800 p-4 rounded-lg transition-colors">
                      <h4 className="text-xl font-semibold text-cyan-400">
                        {item.role || item.activity}
                      </h4>
                      {item.company && (
                        <p className="text-gray-400">{item.company} - {item.period}</p>
                      )}
                      <p className="mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveProject(idx)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{project.title}</h3>
                <p className={`mb-4 transition-opacity duration-300 ${
                  activeProject === idx ? 'opacity-100' : 'opacity-70'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <form onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:ramanansrirajan@gmail.com?subject=${encodeURIComponent(document.getElementById('subject').value)}&body=${encodeURIComponent(document.getElementById('message').value)}`;
            }}
            className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Message"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#top" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
            <a href="https://github.com/Rsrirajan" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-cyan-400 transition-colors">
              <i className="fa fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/ramanan-srirajan" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-cyan-400 transition-colors">
              <i className="fa fa-linkedin-square text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ramanan Srirajan</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;