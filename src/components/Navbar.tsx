export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        border-b
        border-white/10
        bg-black/40
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <h1
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-violet-400
            to-fuchsia-600
            bg-clip-text
            text-transparent
            cursor-pointer
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Jegatheesh
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-zinc-300 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative
                transition-all
                duration-300
                hover:text-white
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-violet-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">

          {/* Resume Button */}
          <a
            href="/revised_resume.pdf"
            target="_blank"
            className="
              px-5
              py-2
              rounded-full
              border
              border-violet-500/40
              text-violet-300
              font-medium
              transition-all
              duration-300
              hover:bg-violet-500
              hover:text-white
              hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
              hover:scale-105
            "
          >
            Resume
          </a>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="
              relative
              overflow-hidden
              px-6
              py-2
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-600
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(217,70,239,0.7)]
              before:absolute
              before:inset-0
              before:bg-white/20
              before:translate-x-[-100%]
              hover:before:translate-x-[100%]
              before:transition-transform
              before:duration-700
            "
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
}