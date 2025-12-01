const SnapMapperPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 25%, #a855f7 50%, #c026d3 75%, #e60077 100%)",
        color: "#e2e8f0",
        fontFamily: '"Noto Sans", sans-serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle Effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "8px",
          height: "8px",
          background: "rgba(255, 255, 255, 0.6)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          width: "6px",
          height: "6px",
          background: "rgba(255, 255, 255, 0.5)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "25%",
          width: "5px",
          height: "5px",
          background: "rgba(255, 255, 255, 0.4)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(124, 58, 237, 0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563EB",
                fontWeight: "bold",
                fontSize: "11px",
              }}
            >
              S<span style={{ opacity: 0.7 }}>M</span>
            </div> */}
            <h1 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff", margin: 0 }}>
              SnapMapper
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#e9d5ff",
                textDecoration: "none",
              }}
            >
              Log In
            </a>
            <a
              href="#"
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "11px",
                fontWeight: "600",
                color: "#ffffff",
                backgroundColor: "#E60077",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "1rem 1rem",
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.15rem 0.5rem",
            marginBottom: "0.5rem",
            fontSize: "9px",
            fontWeight: "500",
            color: "#ffffff",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "9999px",
            alignSelf: "center",
          }}
        >
          🚀 Power up your data experience
        </span>

        <h1
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
            margin: "0 0 0.5rem 0",
          }}
        >
          Transform Data, Effortlessly.
        </h1>

        <p
          style={{
            maxWidth: "100%",
            margin: "0 auto 0.75rem auto",
            fontSize: "11px",
            color: "#e9d5ff",
            lineHeight: "1.4",
          }}
        >
          SnapMapper is an intuitive, web-based tool that simplifies complex data
          mapping and transformation.
        </p>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.4rem 0.75rem",
              fontWeight: "600",
              fontSize: "11px",
              color: "#2563EB",
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Start Free Trial →
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.4rem 0.75rem",
              fontWeight: "600",
              fontSize: "11px",
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Request a Demo
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default SnapMapperPreview;

