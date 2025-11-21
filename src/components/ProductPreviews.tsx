// RAMLify Flow Agent Preview - Blue gradient theme (same as SnapMapper)
export const RAMLifyPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #0e7490 50%, #0891b2 75%, #06b6d4 100%)",
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
          backgroundColor: "rgba(30, 58, 138, 0.6)",
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <h1 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff", margin: 0 }}>
              RAMLify
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#93c5fd",
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
                color: "#2563EB",
                backgroundColor: "#ffffff",
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
          ✨ AI-Powered RAML Generator
        </span>

        <h1
          style={{
            fontSize: "21px",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
            margin: "0 0 0.5rem 0",
          }}
        >
          Design APIs, Effortlessly.
        </h1>

        <p
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            fontSize: "11px",
            color: "#93c5fd",
            lineHeight: "1.4",
          }}
        >
          Transform natural language into RAML specifications with AI assistance.
        </p>
      </div>
    </div>
  );
};

// MuleSoftLP Preview - Dark theme with purple accents
export const MuleSoftLPPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0f23 0%, #1e1e3f 50%, #2d1b3d 100%)",
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
            linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle Effects */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "20%",
          width: "6px",
          height: "6px",
          background: "rgba(167, 139, 250, 0.7)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "15%",
          width: "5px",
          height: "5px",
          background: "rgba(139, 92, 246, 0.6)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          right: "30%",
          width: "4px",
          height: "4px",
          background: "rgba(99, 102, 241, 0.5)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Header */}
      <div
        style={{
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* <div
              style={{
                width: "20px",
                height: "20px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              M
            </div> */}
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#ffffff" }}>MuleSoftLP</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.2rem 0.5rem",
              backgroundColor: "#6366f1",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "600",
            }}
          >
            Get Started
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 0.5rem 0",
            lineHeight: "1",
          }}
        >
          Mulesoft<span style={{ color: "#a78bfa" }}>LP</span>
        </h1>
        <p
          style={{
            fontSize: "10px",
            color: "#c7d2fe",
            lineHeight: "1.4",
            marginBottom: "0.75rem",
          }}
        >
          Transform your MuleSoft journey with AI-powered learning. Generate personalized challenges
          and master DataWeave faster than ever before.
        </p>
      </div>
    </div>
  );
};

// Goose Preview - Black theme with cyan accent
export const GoosePreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: '"Noto Sans", sans-serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                letterSpacing: "0.1em",
                color: "#ffffff",
              }}
            >
              GOOSE
            </span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.25rem 0.6rem",
              background: "linear-gradient(135deg, #a5f3fc 0%, #c084fc 100%)",
              color: "#000000",
              borderRadius: "4px",
              fontWeight: "700",
            }}
          >
            Schedule Demo
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            padding: "0.15rem 0.4rem",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#a5f3fc",
            borderRadius: "12px",
            fontWeight: "600",
            display: "inline-block",
            marginBottom: "0.5rem",
            width: "fit-content",
          }}
        >
          ● GOOSED
        </span>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 0.25rem 0",
            lineHeight: "1.1",
          }}
        >
          Deploy, Scale<br />
          <span style={{ color: "#a5f3fc" }}>Dominate</span>
        </h1>
        <p
          style={{
            fontSize: "10px",
            color: "#94a3b8",
            lineHeight: "1.3",
            margin: 0,
          }}
        >
          The ultimate DevOps platform. Zero complexity, maximum impact.
        </p>
      </div>
    </div>
  );
};

// AnypointLP Preview - Black theme with purple accents
export const AnypointLPPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: '"Noto Sans", sans-serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* <div
              style={{
                width: "20px",
                height: "20px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                borderRadius: "4px",
              }}
            /> */}
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#a78bfa" }}>Anypoint LP</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.25rem 0.6rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              fontWeight: "700",
            }}
          >
            Sign up for Free
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.15rem 0.5rem",
            backgroundColor: "#7c3aed",
            color: "#ffffff",
            borderRadius: "12px",
            fontSize: "8px",
            fontWeight: "600",
            marginBottom: "0.5rem",
            alignSelf: "center",
          }}
        >
          ✨ New AI-Powered Features
        </div>
        <h1
          style={{
            fontSize: "18px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 0.5rem 0",
            lineHeight: "1.2",
          }}
        >
          Transform Your MuleSoft Development with{" "}
          <span style={{ color: "#a78bfa" }}>AI-Powered Intelligence</span>
        </h1>
        <p
          style={{
            fontSize: "9px",
            color: "#94a3b8",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          Harness AI to streamline integration workflows .
        </p>
      </div>
    </div>
  );
};

// CloudHub Migration Preview - Light blue theme
export const CloudHubMigrationPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        color: "#0c4a6e",
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
            linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle Effects */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          right: "18%",
          width: "6px",
          height: "6px",
          background: "rgba(37, 99, 235, 0.5)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "12%",
          width: "5px",
          height: "5px",
          background: "rgba(14, 165, 233, 0.4)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "58%",
          right: "28%",
          width: "4px",
          height: "4px",
          background: "rgba(59, 130, 246, 0.35)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-35px",
          left: "-35px",
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Header */}
      <div
        style={{
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(14, 165, 233, 0.2)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#2563eb",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              📊
            </div>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#0c4a6e" }}>MuleMigration</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.25rem 0.6rem",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "600",
            }}
          >
            Get Started
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#0c4a6e",
            margin: "0 0 0.5rem 0",
            lineHeight: "1.2",
          }}
        >
          Migrate to <span style={{ color: "#2563eb" }}>CloudHub 2.0</span>
          <br />
          with Confidence
        </h1>
        <p
          style={{
            fontSize: "9px",
            color: "#475569",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          Streamline your migration with comprehensive assessment tools. Get compatibility reports,
          migration roadmaps, and expert guidance.
        </p>
      </div>
    </div>
  );
};

// DataWeave Task Generator Preview - Will use the image as it's complex
// (This one can use the existing image approach)

