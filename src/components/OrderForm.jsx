import { useState } from "react";
import { PACKAGES, waMsg } from "../data/constants";

const inputStyle = {
  width: "100%",
  background: "#0c0e14",
  border: "1px solid #242838",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 14,
  color: "#e8e4dc",
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s",
};

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    package: "Bronze",
    details: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const sendToWA = () => {
    if (!form.name || !form.business) {
      alert("Please fill in your name and business name.");
      return;
    }
    const msg = `Hi Phillip! 👋\n\nI'd like to order a website.\n\n*Name:* ${form.name}\n*Business:* ${form.business}\n*Package:* ${form.package}\n*Details:* ${form.details || "Not specified"}\n\nLooking forward to hearing from you!`;
    window.open(waMsg(msg), "_blank");
  };

  return (
    <div
      style={{
        background: "#151821",
        border: "1px solid #242838",
        borderRadius: 20,
        padding: "32px 28px",
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#e8e4dc",
          marginBottom: 6,
        }}
      >
        Quick Order via WhatsApp
      </h3>
      <p style={{ fontSize: 12.5, color: "#8a8a98", marginBottom: 28, lineHeight: 1.6 }}>
        Fill in the basics — I'll send it straight to WhatsApp. No long forms, no wait.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Name */}
        <div>
          <label style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a98", display: "block", marginBottom: 6 }}>
            Your Name
          </label>
          <input
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Jane Mwangi"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,133,58,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "#242838")}
          />
        </div>

        {/* Business */}
        <div>
          <label style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a98", display: "block", marginBottom: 6 }}>
            Business Name
          </label>
          <input
            value={form.business}
            onChange={set("business")}
            placeholder="e.g. Mama's Kitchen"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,133,58,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "#242838")}
          />
        </div>

        {/* Package */}
        <div>
          <label style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a98", display: "block", marginBottom: 6 }}>
            Package
          </label>
          <select
            value={form.package}
            onChange={set("package")}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,133,58,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "#242838")}
          >
            {PACKAGES.map((p) => (
              <option key={p.tier} value={p.tier}>
                {p.tier} – Ksh {p.price}
              </option>
            ))}
          </select>
        </div>

        {/* Details */}
        <div>
          <label style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a98", display: "block", marginBottom: 6 }}>
            Tell me about your project
          </label>
          <textarea
            value={form.details}
            onChange={set("details")}
            rows={4}
            placeholder="Describe your business, what you need, and any specific features..."
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,133,58,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "#242838")}
          />
        </div>

        <button
          onClick={sendToWA}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: 15,
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            marginTop: 6,
            transition: "opacity 0.2s, transform 0.2s",
            boxShadow: "0 0 30px rgba(37,211,102,0.2)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          💬 Send via WhatsApp
        </button>
      </div>
    </div>
  );
}
