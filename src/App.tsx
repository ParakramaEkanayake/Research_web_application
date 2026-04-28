import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Redirect to the static HTML website
    window.location.href = "/index.html";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #7c3aed 100%)",
        fontFamily: "Inter, sans-serif",
        color: "#fff",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          background: "#2563eb",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        ⚙
      </div>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700 }}>SLIIT CDAP Research Project</h1>
      <p style={{ opacity: 0.7 }}>Loading website…</p>
      <a
        href="/index.html"
        style={{
          marginTop: 8,
          padding: "12px 28px",
          background: "#fff",
          color: "#2563eb",
          borderRadius: 8,
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "0.95rem",
        }}
      >
        Open Website →
      </a>
    </div>
  );
}
