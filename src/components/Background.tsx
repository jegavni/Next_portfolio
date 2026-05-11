"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">
      {/* Purple Blob */}
      <div
        className="blob1 absolute top-[-10rem] left-[-10rem]"
        style={{
          width: "35rem",
          height: "35rem",
          background: "#9333ea",
          borderRadius: "9999px",
          filter: "blur(120px)",
          opacity: 0.3,
        }}
      />

      {/* Blue Blob */}
      <div
        className="blob2 absolute bottom-[-10rem] right-[-10rem]"
        style={{
          width: "35rem",
          height: "35rem",
          background: "#2563eb",
          borderRadius: "9999px",
          filter: "blur(120px)",
          opacity: 0.3,
        }}
      />

      {/* Pink Blob */}
      <div
        className="blob3 absolute top-[40%] left-[40%]"
        style={{
          width: "25rem",
          height: "25rem",
          background: "#ec4899",
          borderRadius: "9999px",
          filter: "blur(120px)",
          opacity: 0.2,
        }}
      />
    </div>
  );
}