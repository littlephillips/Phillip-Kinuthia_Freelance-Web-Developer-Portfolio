import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PACKAGES, ADDONS, waMsg } from "../data/constants";
import CheckIcon from "./CheckIcon";

export default function Pricing() {
  const [ref, inView] = useInView();
  const [monthly, setMonthly] = useState(false);

  return (
    <section id="pricing" ref={ref} style={{ padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8853a",
            }}
          >
            Transparent Pricing
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
            Packages
          </h2>
        </div>

        {/* Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 50 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: !monthly ? "#e8e4dc" : "#7a7a8a" }}>
            One-time
          </span>
          <div
            onClick={() => setMonthly(!monthly)}
            style={{
              width: 48, height: 26,
              background: monthly ? "rgba(200,133,58,0.2)" : "#1e2230",
              borderRadius: 13,
              position: "relative",
              cursor: "pointer",
              border: "1px solid #2a2e38",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 3,
                left: monthly ? 23 : 3,
                width: 18, height: 18,
                borderRadius: "50%",
                background: "#c8853a",
                transition: "left 0.3s",
                boxShadow: "0 0 8px rgba(200,133,58,0.5)",
              }}
            />
          </div>
          <span style={{ fontSize: 13, fontWeight: 500, color: monthly ? "#e8e4dc" : "#7a7a8a" }}>
            Monthly Maintenance
          </span>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
            alignItems: "start",
          }}
        >
          {PACKAGES.map((p, i) => (
            <PricingCard key={p.tier} pkg={p} monthly={monthly} inView={inView} index={i} />
          ))}
        </div>

        {/* Addons */}
        <div style={{ marginTop: 70 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8853a",
              display: "block",
              marginBottom: 24,
            }}
          >
            Monthly Subscriptions
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {ADDONS.map((a) => (
              <div
                key={a.name}
                style={{
                  background: "#151821",
                  border: "1px solid #242838",
                  borderRadius: 14,
                  padding: "22px 20px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,133,58,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e2230";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 500, color: "#e8e4dc", marginBottom: 6 }}>
                  {a.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#c8853a",
                  }}
                >
                  {a.price}
                </p>
                <p style={{ fontSize: 12.5, color: "#9a9590", marginTop: 8, lineHeight: 1.6 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ pkg: p, monthly, inView, index }) {
  return (
    <div
      style={{
        background: p.featured ? "linear-gradient(160deg, #1c2236, #151821)" : "#151821",
        border: `1px solid ${p.border}`,
        borderRadius: 20,
        padding: "32px 26px",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? (p.featured ? "translateY(-8px)" : "translateY(0)") : "translateY(30px)",
        transition: `all 0.6s ${index * 0.1}s ease`,
        boxShadow: p.featured ? `0 0 60px ${p.glow}` : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 30px 80px ${p.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = p.featured ? "translateY(-8px)" : "translateY(0)";
        e.currentTarget.style.boxShadow = p.featured ? `0 0 60px ${p.glow}` : "none";
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: 90, height: 90,
          background: p.color,
          opacity: 0.06,
          borderRadius: "0 20px 0 90px",
        }}
      />

      {p.featured && (
        <div
          style={{
            position: "absolute",
            top: 16, right: 16,
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: p.color,
            color: "#0a0b0f",
            padding: "4px 10px",
            borderRadius: 20,
            fontWeight: 600,
          }}
        >
          ⭐ Popular
        </div>
      )}

      {/* Tier badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: `${p.color}15`,
          borderRadius: 20,
          padding: "4px 12px",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 6, height: 6,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: p.color,
          }}
        >
          {p.tier}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          color: "#e8e4dc",
          letterSpacing: "-0.02em",
        }}
      >
        {p.label}
      </h3>

      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 14 }}>
        <span style={{ fontSize: 13, color: "#7a7a8a", fontWeight: 500 }}>Ksh</span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.4rem",
            fontWeight: 900,
            color: "#e8e4dc",
            letterSpacing: "-0.03em",
          }}
        >
          {monthly ? p.monthly : p.price}
        </span>
        {monthly && <span style={{ fontSize: 13, color: "#7a7a8a" }}>/mo</span>}
      </div>
      <p style={{ fontSize: 12, color: "#7a7a8a", marginTop: 5, letterSpacing: "0.05em" }}>
        {p.pages} · {p.revisions}
      </p>

      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, #2a2e38, transparent)",
          margin: "22px 0",
        }}
      />

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
        {p.features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 13.5,
              color: "#b0aaa0",
              lineHeight: 1.55,
            }}
          >
            <CheckIcon color={p.color} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waMsg(
          `Hi Phillip! I'm interested in the ${p.tier} package (Ksh ${monthly ? p.monthly + "/mo" : p.price}). Let's talk!`
        )}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: 26,
          padding: "14px 20px",
          borderRadius: 12,
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          background: `linear-gradient(135deg, ${p.color}cc, ${p.color})`,
          color: p.tier === "Gold" ? "#0a0b0f" : "#fff",
          transition: "opacity 0.2s, transform 0.2s",
          boxShadow: `0 4px 20px ${p.color}30`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        Get Started →
      </a>

      <p
        style={{
          marginTop: 16,
          fontSize: 12.5,
          color: "#9a9590",
          lineHeight: 1.65,
          padding: "12px 14px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 8,
          borderLeft: `2px solid ${p.color}66`,
        }}
      >
        <strong style={{ color: "#c8c4bc" }}>Best for:</strong> {p.best}
      </p>
    </div>
  );
}
