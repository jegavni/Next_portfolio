"use client";

import { motion } from "framer-motion";
import { GitBranch , ExternalLink } from "lucide-react";

const projects = [
 
  {
    title: "E-Commerce Platform",
    desc: "Scalable shopping platform with authentication, cart, product management and responsive UI.",
    tech: ["MERN Stack", "Redux", "MongoDB"],
    live: "https://ecommerce-t7cc.onrender.com",
    github: "https://github.com/jegavni/ecommerce",
  },
   {
    title: "HRMS Platform",
    desc: "Live HRMS platform for managing employees, attendance, payroll and HR operations with role-based access.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    live: "https://stackup-hrms-students.vercel.app/login",
    github: "https://github.com/jegavni/hrms",
  },
 
  
  {
    title: "fintech based Website",
    desc: "A fintech website that provides financial services and solutions with a user-friendly interface.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://fintechwalletbass.onrender.com/",
    github: "https://github.com/jegavni/fintechWallet",
  },
  {
    title: "trust management Website",
    desc: "A trust management website that provides services and solutions with a user-friendly interface.",
    tech: ["React","microservices", "Tailwind CSS", "express"],
    live: "https://ktm-vg51.onrender.com",
    github: "https://github.com/jegavni/kTM",
  },
  {
    title: "SynDesk Chat App",
    desc: "Realtime messaging application using Socket.io with JWT authentication and protected routes.",
    tech: ["React", "Express", "Socket.io"],
    live: "https://syndesk-client.onrender.com",
    github: "https://github.com/jegavni/SynDesk",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="relative bg-[#020617] min-h-screen overflow-hidden py-20 px-6">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-lg">
            Real-world MERN stack applications and production-ready projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                borderColor: "#06b6d4",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="
                bg-[#071226]
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                shadow-xl
                backdrop-blur-lg
              "
            >
              {/* Project Title */}
              <h3 className="text-cyan-400 text-2xl font-semibold mb-4 tracking-wide">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-cyan-500/30
                      text-cyan-300
                      text-sm
                      bg-cyan-500/5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-black
                    font-semibold
                    px-5 py-3
                    rounded-xl
                    transition-all
                    duration-300
                    flex-1
                  "
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    border border-cyan-500/40
                    hover:bg-cyan-500/10
                    text-cyan-300
                    font-semibold
                    px-5 py-3
                    rounded-xl
                    transition-all
                    duration-300
                    flex-1
                  "
                >
                  <GitBranch size={18} />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}