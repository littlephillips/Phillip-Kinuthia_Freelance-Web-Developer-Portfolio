import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/constants";

export default function Projects() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...new Set(PROJECTS.map((p) => p.tag))];
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "100px 5vw",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid #1a1d26",
        borderBottom: "1px solid #1a1d26",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8853a",
            }}
          >
            Portfolio
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
            Done Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              style={{
                background: filter === t ? "#c8853a" : "rgba(255,255,255,0.03)",
                color: filter === t ? "#0a0b0f" : "#8a8a98",
                border: `1px solid ${filter === t ? "#c8853a" : "#242838"}`,
                borderRadius: 20,
                padding: "7px 16px",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {shown.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: "#151821",
                border: "1px solid #242838",
                borderRadius: 16,
                padding: "30px 26px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `all 0.5s ${i * 0.08}s ease`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.color + "55";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 24px 60px ${p.color}14`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#242838";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: 80, height: 80,
                  background: p.color,
                  opacity: 0.06,
                  borderRadius: "0 16px 0 80px",
                }}
              />

              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: p.color,
                  fontWeight: 600,
                  background: `${p.color}18`,
                  padding: "4px 10px",
                  borderRadius: 20,
                }}
              >
                {p.tag}
              </span>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#e8e4dc",
                  margin: "14px 0 10px",
                }}
              >
                {p.title}
              </h3>

              <p style={{ fontSize: 13, color: "#9a9590", lineHeight: 1.75, marginBottom: 18 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11,
                      color: "#7a7a8a",
                      background: "#181c24",
                      border: "1px solid #242838",
                      borderRadius: 6,
                      padding: "3px 9px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
