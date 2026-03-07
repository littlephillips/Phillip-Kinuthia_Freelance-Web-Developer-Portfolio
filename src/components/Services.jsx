import { useInView } from "../hooks/useInView";
import { SERVICES } from "../data/constants";

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: "100px 5vw", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ marginBottom: 60 }}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#c8853a",
          }}
        >
          What I Do
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            marginTop: 12,
            color: "#e8e4dc",
          }}
        >
          Services
        </h2>
        <p style={{ color: "#9a9590", fontSize: 14, marginTop: 10, maxWidth: 480 }}>
          End-to-end digital solutions built from scratch. Every project is unique.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            style={{
              background: "#151821",
              border: "1px solid #242838",
              borderRadius: 16,
              padding: "28px 26px",
              transition: "all 0.35s ease",
              cursor: "default",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transitionDelay: `${i * 0.08}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,133,58,0.35)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(200,133,58,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#242838";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#e8e4dc",
                marginBottom: 10,
              }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: 13.5, color: "#9a9590", lineHeight: 1.75 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
