import { waMsg } from "../data/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waMsg("Hi Phillip! I'm interested in building a website.")}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.6rem",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      💬
    </a>
  );
}
