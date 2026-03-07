import { useInView } from "../hooks/useInView";
import { WHY } from "../data/constants";

export default function WhyMe() {
  const [ref, inView] = useInView();

  return (
    <section
      style={{
        padding: "100px 5vw",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid #1a1d26",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={ref}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#c8853a",
          }}
        >
          Why Choose Me
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            marginTop: 12,
            color: "#e8e4dc",
            marginBottom: 48,
          }}
        >
          Built Different.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {WHY.map((w, i) => (
            <div
              key={w.num}
              style={{
                background: "#151821",
                border: "1px solid #242838",
                borderRadius: 16,
                padding: "26px 22px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s ${i * 0.1}s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,133,58,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#242838";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "rgba(200,133,58,0.18)",
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                {w.num}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "#e8e4dc", marginBottom: 8 }}>
                {w.title}
              </h3>
              <p style={{ fontSize: 12.5, color: "#7a7a8a", lineHeight: 1.7 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
