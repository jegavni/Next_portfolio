"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import projects from "./Projects";

export default function Hero() {
  const techStack = [
    "React.js",
    "react native",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "JWT Auth",
    "REST APIs",
    "Git & GitHub",
    "Docker",
    "kubernetes",
    "AWS",
    "CI/CD",
    "Agile Methodologies",
    "Unit Testing",
    "Performance Optimization",
    "Web Security",
    "Responsive Design",
    "Cross-Browser Compatibility",
  ];

  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center px-6 py-12">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Jegatheesh C
            </h1>

            {/* Role */}
            <h2 className="text-cyan-400 text-2xl md:text-3xl font-semibold mb-5">
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-8 mb-8 max-w-2xl">
              Passionate MERN Stack Developer focused on building scalable,
              secure and production-ready web applications using React.js,
              Next.js, Node.js, Express.js and MongoDB.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {techStack.map((item, index) => (
                <span
                  key={index}
                  className="
                    px-4 py-2
                    rounded-full
                    border border-cyan-500/30
                    bg-cyan-500/5
                    text-cyan-300
                    text-sm
                    hover:bg-cyan-500/20
                    transition-all duration-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
  onClick={() => {
    document
      .getElementById("Projects")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    bg-cyan-500
    hover:bg-cyan-400
    text-black
    font-semibold
    px-6 py-3
    rounded-xl
    transition-all duration-300
    shadow-lg shadow-cyan-500/20
  "
>
  View Projects
</button>

              <a
                href="/revisedResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border border-cyan-500/40
                  hover:bg-cyan-500/10
                  text-cyan-300
                  font-semibold
                  px-6 py-3
                  rounded-xl
                  transition-all duration-300
                "
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
         {/* PROFILE IMAGE ONLY */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="flex justify-center lg:justify-end"
>
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: 2,
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 10,
    }}
    className="relative group"
  >
    
    {/* Glow Effect */}
    <div
      className="
        absolute inset-0
        rounded-full
        bg-cyan-500/20
        blur-3xl
        opacity-70
        group-hover:opacity-100
        transition-all duration-500
      "
    />

    {/* Animated Gradient Border */}
    <div
      className="
        absolute -inset-1
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-cyan-400
        animate-spin
      "
      style={{
        animationDuration: "6s",
      }}
    />

    {/* Profile Circle */}
    <div
      className="
        relative
        w-[320px]
        h-[320px]
        rounded-full
        overflow-hidden
        border-[6px]
        border-[#020617]
        bg-[#020617]
        shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    >
      <Image
        src="/jegProfess.jpeg"
        alt="Jegatheesh"
        fill
        priority
        className="
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />
    </div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
}