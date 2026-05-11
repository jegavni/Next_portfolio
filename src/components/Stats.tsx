const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "1+",
    label: "Experience",
  },
  {
    value: "500+",
    label: "Commits",
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl font-bold mb-3 text-purple-500">
              {item.value}
            </h3>

            <p className="text-zinc-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}