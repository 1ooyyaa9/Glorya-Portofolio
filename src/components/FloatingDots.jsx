const DOTS = [
  {
    size: 12,
    color: "#4DD8E8",
    top: "8%",
    left: "5%",
    delay: "0s",
    duration: "4s",
  },
  {
    size: 7,
    color: "#7C6BFF",
    top: "18%",
    left: "88%",
    delay: "0.5s",
    duration: "5s",
  },
  {
    size: 14,
    color: "#4DD8E8",
    top: "72%",
    left: "4%",
    delay: "1s",
    duration: "3.5s",
  },
  {
    size: 6,
    color: "#7C6BFF",
    top: "65%",
    left: "92%",
    delay: "1.5s",
    duration: "4.5s",
  },
  {
    size: 10,
    color: "#4DD8E8",
    top: "42%",
    left: "1%",
    delay: "2s",
    duration: "5s",
  },
  {
    size: 8,
    color: "#7C6BFF",
    top: "88%",
    left: "82%",
    delay: "0.8s",
    duration: "3.8s",
  },
  {
    size: 5,
    color: "#4DD8E8",
    top: "12%",
    left: "55%",
    delay: "2.5s",
    duration: "4.2s",
  },
  {
    size: 9,
    color: "#7C6BFF",
    top: "55%",
    left: "96%",
    delay: "1.2s",
    duration: "4s",
  },
  {
    size: 6,
    color: "#4DD8E8",
    top: "30%",
    left: "92%",
    delay: "3s",
    duration: "4.8s",
  },
  {
    size: 8,
    color: "#7C6BFF",
    top: "80%",
    left: "15%",
    delay: "1.8s",
    duration: "3.6s",
  },
];

export default function FloatingDots() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
        {DOTS.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: dot.color,
              top: dot.top,
              left: dot.left,
              opacity: 0.45,
              boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
              animation: `floatDot ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </>
  );
}
