import { useInView } from "../hooks/useInView";
import { EMAIL, SOCIALS, waMsg } from "../data/constants";
import OrderForm from "./OrderForm";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 5vw 60px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60,
        }}
      >
        {/* Left — info */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8853a",
            }}
          >
            Let's Work Together
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginTop: 12,
              color: "#e8e4dc",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Ready to Build<br />Something?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#7a7a8a",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 420,
            }}
          >
            Whether you need a simple website or a full business operations system — I'm here. The
            fastest way to get started is via WhatsApp. Describe your idea and I'll get back to you
            within a few hours.
          </p>

          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href={waMsg("Hi Phillip! I want to discuss a web project.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(37,211,102,0.07)",
                border: "1px solid rgba(37,211,102,0.2)",
                borderRadius: 14,
                padding: "16px 20px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.13)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.07)")}
            >
              <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#25D366" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#25D366",
                    fontWeight: 500,
                  }}
                >
                  WhatsApp (Fastest)
                </div>
                <div style={{ fontSize: 14, color: "#b8b4ac", marginTop: 2 }}>
                  +254 797 321 068
                </div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(200,133,58,0.06)",
                border: "1px solid rgba(200,133,58,0.18)",
                borderRadius: 14,
                padding: "16px 20px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,133,58,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(200,133,58,0.06)")}
            >
              <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#c8853a" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              </span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#c8853a",
                    fontWeight: 500,
                  }}
                >
                  Email
                </div>
                <div style={{ fontSize: 14, color: "#b8b4ac", marginTop: 2 }}>{EMAIL}</div>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                style={{
                  width: 44, height: 44,
                  borderRadius: 10,
                  background: "#1c2030",
                  border: "1px solid #242838",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7a7a8a",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color + "80";
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.background = s.color + "18";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#242838";
                  e.currentTarget.style.color = "#7a7a8a";
                  e.currentTarget.style.background = "#1c2030";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ width: 18, height: 18, display: "flex" }} dangerouslySetInnerHTML={{ __html: s.svg }} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s 0.2s ease",
          }}
        >
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
