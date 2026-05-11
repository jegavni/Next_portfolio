const skills = [
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
  "CI/CD",
  "Agile Methodologies",
  "Unit Testing",
  "Performance Optimization",
  "Web Security",
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Docker",
  "kubernetes",
  "AWS",
];

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}