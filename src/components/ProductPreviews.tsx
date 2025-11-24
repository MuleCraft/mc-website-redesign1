import logoDark from "@/assets/logo_dark.png";

// RAMLify Flow Agent Preview - Purple/Indigo theme with diagonal line pattern
export const RAMLifyPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #2d2a5e 0%, #3d3a7a 30%, #4a4688 60%, #5a5696 100%)",
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
      {/* Diagonal Line Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(139, 92, 246, 0.04) 20px,
              rgba(139, 92, 246, 0.04) 40px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(99, 102, 241, 0.03) 20px,
              rgba(99, 102, 241, 0.03) 40px
            )
          `,
          pointerEvents: "none",
        }}
      />
      
      {/* Circuit-like Lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern id="circuitLines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 0 30 L 30 30 M 30 0 L 30 30 L 30 60 M 30 30 L 60 30"
              stroke="rgba(167, 139, 250, 0.2)"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitLines)" />
      </svg>
      
      {/* Glowing Accent Lines */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(167, 139, 250, 0.25) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-25px",
          left: "-25px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header - Left Aligned */}
      <div
        style={{
          backgroundColor: "rgba(45, 42, 94, 0.3)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(167, 139, 250, 0.15)",
          padding: "0.6rem 1rem",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <h1 style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", margin: 0, letterSpacing: "0.5px" }}>
              RAMLify
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "10px",
                fontWeight: "500",
                color: "#c4b5fd",
                textDecoration: "none",
                padding: "0.2rem 0.4rem",
              }}
            >
              Log In
            </a>
            <a
              href="#"
              style={{
                padding: "0.3rem 0.7rem",
                fontSize: "10px",
                fontWeight: "600",
                color: "#1e1b4b",
                background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 2px 6px rgba(167, 139, 250, 0.3)",
              }}
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>

      {/* Content - Left Aligned Layout */}
      <div
        style={{
          padding: "1.25rem 1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.25rem 0.6rem",
            marginBottom: "0.75rem",
            fontSize: "8px",
            fontWeight: "600",
            color: "#ffffff",
            background: "linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
            border: "1px solid rgba(167, 139, 250, 0.3)",
            borderRadius: "12px",
            width: "fit-content",
          }}
        >
          <span style={{ marginRight: "0.3rem" }}>✨</span>
          AI-Powered RAML Generator
        </div>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
            margin: "0 0 0.75rem 0",
            textAlign: "left",
          }}
        >
          Design APIs,
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Effortlessly.
          </span>
        </h1>

        <p
          style={{
            fontSize: "10px",
            color: "#c4b5fd",
            lineHeight: "1.6",
            margin: 0,
            maxWidth: "95%",
            textAlign: "left",
          }}
        >
          Transform natural language into RAML specifications with AI assistance. Build better APIs faster.
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

      {/* Content - Two Column Layout */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {/* Left Column - Text Content */}
        <div
          style={{
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

        {/* Right Column - Animated Bird */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "100%",
          }}
        >
          {/* Glow Effect */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              background: "radial-gradient(circle, rgba(165, 243, 252, 0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          
          {/* Animated Bird Image */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              animation: "gooseFloat 3s ease-in-out infinite",
            }}
          >
            <style>{`
              @keyframes gooseFloat {
                0%, 100% { 
                  transform: translateY(0px) translateX(0px) rotate(0deg); 
                }
                50% { 
                  transform: translateY(-10px) translateX(3px) rotate(1deg); 
                }
              }
            `}</style>
            <img
              src={logoDark}
              alt="Goose Logo"
              style={{
                width: "70px",
                height: "70px",
                filter: "drop-shadow(0 0 8px rgba(165, 243, 252, 0.3))",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// AnypointLP Preview - Enhanced dark theme with purple accents
export const AnypointLPPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f172a 70%, #1e1b3d 100%)",
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
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle Effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "7px",
          height: "7px",
          background: "rgba(167, 139, 250, 0.8)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "12%",
          width: "6px",
          height: "6px",
          background: "rgba(139, 92, 246, 0.7)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          right: "25%",
          width: "5px",
          height: "5px",
          background: "rgba(99, 102, 241, 0.6)",
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
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-45px",
          left: "-45px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(30, 27, 61, 0.5)",
          backdropFilter: "blur(10px)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(139, 92, 246, 0.25)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#a78bfa" }}>Anypoint LP</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.25rem 0.6rem",
              background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
              color: "#1a1a2e",
              borderRadius: "4px",
              fontWeight: "700",
              boxShadow: "0 2px 4px rgba(139, 92, 246, 0.2)",
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
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.2rem 0.6rem",
            background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
            color: "#ffffff",
            borderRadius: "12px",
            fontSize: "8px",
            fontWeight: "600",
            marginBottom: "0.75rem",
            alignSelf: "center",
            boxShadow: "0 2px 8px rgba(124, 58, 237, 0.4)",
          }}
        >
          ✨ New AI-Powered Features
        </div>
        <h1
          style={{
            fontSize: "16px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 0.75rem 0",
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}
        >
          Transform MuleSoft with{" "}
          <span style={{ 
            color: "#a78bfa",
            background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>AI Intelligence</span>
        </h1>
        <p
          style={{
            fontSize: "10px",
            color: "#cbd5e1",
            lineHeight: "1.5",
            margin: 0,
            maxWidth: "90%",
            alignSelf: "center",
          }}
        >
          Harness AI to streamline integration workflows and accelerate your development process.
        </p>
      </div>
    </div>
  );
};

// CloudHub Migration Preview - Dark blue theme (matching footer)
export const CloudHubMigrationPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgb(7, 43, 85) 0%, rgb(9, 51, 102) 50%, rgb(7, 43, 85) 100%)",
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
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
          pointerEvents: "none",
        }}
      />
      
      {/* Sparkle Effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "7px",
          height: "7px",
          background: "rgba(96, 165, 250, 0.8)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "12%",
          width: "6px",
          height: "6px",
          background: "rgba(59, 130, 246, 0.7)",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          right: "25%",
          width: "5px",
          height: "5px",
          background: "rgba(37, 99, 235, 0.6)",
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
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-45px",
          left: "-45px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(7, 43, 85, 0.6)",
          backdropFilter: "blur(10px)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(59, 130, 246, 0.25)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff" }}>MuleMigration</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.25rem 0.6rem",
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "600",
              boxShadow: "0 2px 4px rgba(37, 99, 235, 0.3)",
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
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#ffffff",
            margin: "0 0 0.75rem 0",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          Migrate to <span style={{ 
            color: "#60a5fa",
            background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>CloudHub 2.0</span>
          <br />
          with Confidence
        </h1>
        <p
          style={{
            fontSize: "10px",
            color: "#cbd5e1",
            lineHeight: "1.5",
            margin: 0,
            maxWidth: "90%",
            alignSelf: "center",
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

