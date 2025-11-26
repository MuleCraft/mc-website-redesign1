import { useEffect, useRef } from "react";
import logoDark from "@/assets/logo_dark.png";
import dtImage from "@/assets/dt.png";
import csi2Image from "@/assets/csi2.png";
import mulesoftlpImage from "@/assets/mulesoftlp-image.png";
import newLogo from "@/assets/newlogo.png";

// RAMLify Preview - Dark theme with purple/blue/cyan gradients matching reference design
export const RAMLifyPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom right, #111827 0%, #000000 50%, #111827 100%)",
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
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Animated background elements */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "96px",
            height: "96px",
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "96px",
            height: "96px",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite 1.5s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 4s ease-in-out infinite 1s",
          }}
        />
      </div>

      {/* Floating particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "linear-gradient(135deg, rgba(147, 51, 234, 0.4) 0%, rgba(14, 165, 233, 0.4) 100%)",
              borderRadius: "50%",
              opacity: 0.2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(17, 24, 39, 0.6)",
          backdropFilter: "blur(10px)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                background: "linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #06b6d4 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(147, 51, 234, 0.25)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h1 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff", margin: 0 }}>
              RAMLify
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "9px",
                fontWeight: "600",
                color: "#ffffff",
                background: "linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #06b6d4 100%)",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(147, 51, 234, 0.25)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            margin: "0 0 0.5rem 0",
            lineHeight: "1.1",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Build APIs{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            10x Faster
          </span>
          <br />
          with AI Magic
        </h2>

        <p
          style={{
            fontSize: "9px",
            color: "#9ca3af",
            margin: "0 0 0.75rem 0",
            lineHeight: "1.4",
            textAlign: "center",
            maxWidth: "90%",
            alignSelf: "center",
          }}
        >
          Convert natural language to RAML with AI automation and seamless MuleSoft integration.
        </p>

        {/* Image Preview */}
        <div
          style={{
            marginTop: "0.5rem",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={csi2Image}
            alt="RAMLify Preview"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// MuleSoftLP Preview - Dark theme matching reference design exactly
export const MuleSoftLPPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000000",
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
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "80px",
            height: "80px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-40px",
            width: "80px",
            height: "80px",
            background: "rgba(147, 51, 234, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite 1.5s",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "1/3",
            width: "80px",
            height: "80px",
            background: "rgba(236, 72, 153, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "none",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src={newLogo}
              alt="Logo"
              style={{
                width: "32px",
                height: "32px",
                objectFit: "contain",
              }}
            />
            <h1 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
              MuleSoftLP
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "9px",
                fontWeight: "600",
                color: "#ffffff",
                background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(37, 99, 235, 0.25)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Large MulesoftLP Text */}
        <h4
          style={{
            fontSize: "clamp(20px, 6vw, 40px)",
            fontWeight: "600",
            letterSpacing: "-0.02em",
            color: "#ffffff",
            margin: "0 0 0.5rem 0",
            lineHeight: "0.9",
            userSelect: "none",
            display: "block",
          }}
        >
          MulesoftLP
        </h4>

        <p
          style={{
            fontSize: "9px",
            color: "#d1d5db",
            margin: "0 0 0.75rem 0",
            lineHeight: "1.4",
            maxWidth: "90%",
            alignSelf: "center",
          }}
        >
          Master MuleSoft with AI-powered learning. Generate personalized challenges and practice DataWeave.
        </p>

        {/* Image Preview */}
        <div
          style={{
            marginTop: "0.5rem",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(17, 24, 39, 0.5)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          <img
            src={mulesoftlpImage}
            alt="MuleSoftLP Preview"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>
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
              margin: 0,
              lineHeight: "1.1",
            }}
          >
            Deploy, Scale<br />
            <span style={{ color: "#a5f3fc" }}>Dominate</span>
          </h1>
        </div>

        {/* Right Column - Animated Bird with Feathers */}
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
          <style>{`
            @keyframes featherMove1 {
              0%, 100% { transform: rotate(12deg) translateY(0px) scale(1); opacity: 0.6; }
              25% { transform: rotate(15deg) translateY(-2px) scale(1.1); opacity: 0.8; }
              50% { transform: rotate(10deg) translateY(-1px) scale(0.9); opacity: 0.7; }
              75% { transform: rotate(14deg) translateY(-3px) scale(1.05); opacity: 0.9; }
            }
            @keyframes featherMove2 {
              0%, 100% { transform: rotate(-12deg) translateY(0px) scale(1); opacity: 0.5; }
              25% { transform: rotate(-15deg) translateY(-1px) scale(1.1); opacity: 0.7; }
              50% { transform: rotate(-10deg) translateY(-2px) scale(0.9); opacity: 0.6; }
              75% { transform: rotate(-14deg) translateY(-1px) scale(1.05); opacity: 0.8; }
            }
            @keyframes featherMove3 {
              0%, 100% { transform: rotate(45deg) translateY(0px) scale(1); opacity: 0.4; }
              25% { transform: rotate(48deg) translateY(-1px) scale(1.1); opacity: 0.6; }
              50% { transform: rotate(42deg) translateY(-2px) scale(0.9); opacity: 0.5; }
              75% { transform: rotate(47deg) translateY(-1px) scale(1.05); opacity: 0.7; }
            }
            @keyframes featherMove4 {
              0%, 100% { transform: rotate(-30deg) translateY(0px) scale(1); opacity: 0.5; }
              25% { transform: rotate(-33deg) translateY(-2px) scale(1.1); opacity: 0.7; }
              50% { transform: rotate(-28deg) translateY(-1px) scale(0.9); opacity: 0.6; }
              75% { transform: rotate(-32deg) translateY(-3px) scale(1.05); opacity: 0.8; }
            }
            @keyframes featherMove5 {
              0%, 100% { transform: rotate(60deg) translateY(0px) scale(1); opacity: 0.3; }
              25% { transform: rotate(63deg) translateY(-1px) scale(1.1); opacity: 0.5; }
              50% { transform: rotate(58deg) translateY(-2px) scale(0.9); opacity: 0.4; }
              75% { transform: rotate(62deg) translateY(-1px) scale(1.05); opacity: 0.6; }
            }
            @keyframes featherMove6 {
              0%, 100% { transform: rotate(-45deg) translateY(0px) scale(1); opacity: 0.4; }
              25% { transform: rotate(-48deg) translateY(-1px) scale(1.1); opacity: 0.6; }
              50% { transform: rotate(-42deg) translateY(-2px) scale(0.9); opacity: 0.5; }
              75% { transform: rotate(-47deg) translateY(-1px) scale(1.05); opacity: 0.7; }
            }
          `}</style>
          
          {/* Main logo container */}
          <div
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Logo image */}
              <img
                src={logoDark}
                alt="GooseD Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 10,
                  filter: "brightness(0.7) contrast(1.2)",
                }}
              />
              
              {/* Animated feather elements */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                }}
              >
                {/* Feather 1 - Top right */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "8px",
                    height: "32px",
                    backgroundColor: "rgba(156, 163, 175, 0.6)",
                    borderRadius: "9999px",
                    transform: "rotate(12deg)",
                    animation: "featherMove1 3s ease-in-out infinite",
                    animationDelay: "0s",
                  }}
                />
                
                {/* Feather 2 - Top left */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "4px",
                    width: "6px",
                    height: "24px",
                    backgroundColor: "rgba(156, 163, 175, 0.5)",
                    borderRadius: "9999px",
                    transform: "rotate(-12deg)",
                    animation: "featherMove2 3s ease-in-out infinite",
                    animationDelay: "0.5s",
                  }}
                />
                
                {/* Feather 3 - Bottom right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    width: "6px",
                    height: "28px",
                    backgroundColor: "rgba(156, 163, 175, 0.4)",
                    borderRadius: "9999px",
                    transform: "rotate(45deg)",
                    animation: "featherMove3 3s ease-in-out infinite",
                    animationDelay: "1s",
                  }}
                />
                
                {/* Feather 4 - Bottom left */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    width: "8px",
                    height: "24px",
                    backgroundColor: "rgba(156, 163, 175, 0.5)",
                    borderRadius: "9999px",
                    transform: "rotate(-30deg)",
                    animation: "featherMove4 3s ease-in-out infinite",
                    animationDelay: "1.5s",
                  }}
                />
                
                {/* Feather 5 - Middle right */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "4px",
                    width: "4px",
                    height: "20px",
                    backgroundColor: "rgba(156, 163, 175, 0.3)",
                    borderRadius: "9999px",
                    transform: "translateY(-50%) rotate(60deg)",
                    animation: "featherMove5 3s ease-in-out infinite",
                    animationDelay: "2s",
                  }}
                />
                
                {/* Feather 6 - Middle left */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    width: "6px",
                    height: "16px",
                    backgroundColor: "rgba(156, 163, 175, 0.4)",
                    borderRadius: "9999px",
                    transform: "translateY(-50%) rotate(-45deg)",
                    animation: "featherMove6 3s ease-in-out infinite",
                    animationDelay: "2.5s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Canvas-based Data Flow Animation Component
const DataFlowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateCanvasSize();

    // Animation variables
    let frame: number;
    const dataPackets: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      color: string;
      progress: number;
      path: number;
      label: string;
    }> = [];

    // Define path points (scaled for preview)
    const getPathPoints = () => [
      { x: canvas.width * 0.1, y: canvas.height * 0.5 },
      { x: canvas.width * 0.25, y: canvas.height * 0.3 },
      { x: canvas.width * 0.4, y: canvas.height * 0.7 },
      { x: canvas.width * 0.6, y: canvas.height * 0.4 },
      { x: canvas.width * 0.75, y: canvas.height * 0.6 },
      { x: canvas.width * 0.9, y: canvas.height * 0.5 },
    ];

    let pathPoints = getPathPoints();
    const packetLabels = ["API", "Data", "Flow", "Transform", "Sync"];

    // Calculate point on Bezier curve
    const calculateCurvePoint = (
      t: number,
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number }
    ) => {
      const cx = 3 * (p1.x - p0.x);
      const cy = 3 * (p1.y - p0.y);
      const bx = 3 * (p2.x - p1.x) - cx;
      const by = 3 * (p2.y - p1.y) - cy;
      const ax = p3.x - p0.x - cx - bx;
      const ay = p3.y - p0.y - cy - by;

      const cube = t * t * t;
      const square = t * t;

      return {
        x: ax * cube + bx * square + cx * t + p0.x,
        y: ay * cube + by * square + cy * t + p0.y,
      };
    };

    // Draw the path
    const drawPath = () => {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(167, 139, 250, 0.2)";
      ctx.lineWidth = 2;

      ctx.moveTo(pathPoints[0].x, pathPoints[0].y);

      for (let i = 0; i < pathPoints.length - 3; i += 3) {
        ctx.bezierCurveTo(
          pathPoints[i + 1].x,
          pathPoints[i + 1].y,
          pathPoints[i + 2].x,
          pathPoints[i + 2].y,
          pathPoints[i + 3].x,
          pathPoints[i + 3].y
        );
      }

      ctx.stroke();
    };

    // Create data packet
    const createDataPacket = () => {
      const colors = [
        "rgba(139, 92, 246, 0.8)",
        "rgba(14, 165, 233, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(245, 158, 11, 0.8)",
      ];

      const labelIndex = dataPackets.length % packetLabels.length;

      dataPackets.push({
        x: pathPoints[0].x,
        y: pathPoints[0].y,
        radius: 2 + Math.random() * 2,
        speed: 0.002 + Math.random() * 0.001,
        color: colors[Math.floor(Math.random() * colors.length)],
        progress: 0,
        path: 0,
        label: packetLabels[labelIndex],
      });
    };

    // Initialize with some packets
    for (let i = 0; i < 3; i++) {
      createDataPacket();
      dataPackets[i].progress = Math.random();
    }

    let lastPacketTime = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the path
      drawPath();

      // Create new packet every 1.5 seconds
      if (timestamp - lastPacketTime > 1500) {
        createDataPacket();
        lastPacketTime = timestamp;
      }

      // Draw connection nodes
      pathPoints.forEach((point, index) => {
        if (index % 3 === 0) {
          ctx.beginPath();
          ctx.fillStyle = "#9333ea";
          ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.strokeStyle = "rgba(147, 51, 234, 0.3)";
          ctx.arc(point.x, point.y, 7, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Update and draw packets
      dataPackets.forEach((packet, index) => {
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packet.path += 3;

          if (packet.path >= pathPoints.length - 3) {
            dataPackets.splice(index, 1);
            return;
          }

          packet.progress = 0;
        }

        const p0 = pathPoints[packet.path];
        const p1 = pathPoints[packet.path + 1];
        const p2 = pathPoints[packet.path + 2];
        const p3 = pathPoints[packet.path + 3];

        const pos = calculateCurvePoint(packet.progress, p0, p1, p2, p3);
        packet.x = pos.x;
        packet.y = pos.y;

        // Draw packet glow
        const gradient = ctx.createRadialGradient(
          packet.x,
          packet.y,
          0,
          packet.x,
          packet.y,
          packet.radius * 3
        );
        gradient.addColorStop(0, packet.color);
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(packet.x, packet.y, packet.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw packet
        ctx.beginPath();
        ctx.fillStyle = packet.color;
        ctx.arc(packet.x, packet.y, packet.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      updateCanvasSize();
      pathPoints = getPathPoints();
    };

    window.addEventListener("resize", handleResize);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: "80px",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

// AnypointLP Preview - Matching csi6.png style with canvas data flow animation
export const AnypointLPPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 30%, #0f172a 70%, #1e1b3d 100%)",
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
      {/* Star-like speckles background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, rgba(167, 139, 250, 0.3), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(139, 92, 246, 0.4), transparent),
            radial-gradient(1.5px 1.5px at 80% 70%, rgba(99, 102, 241, 0.3), transparent),
            radial-gradient(1px 1px at 30% 80%, rgba(167, 139, 250, 0.2), transparent)
          `,
          backgroundSize: "100% 100%",
          pointerEvents: "none",
        }}
      />
      
      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(15, 15, 35, 0.8)",
          backdropFilter: "blur(10px)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Logo - Stacked rectangles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <div style={{ width: "12px", height: "3px", background: "#a78bfa", borderRadius: "1px" }} />
              <div style={{ width: "12px", height: "3px", background: "#8b5cf6", borderRadius: "1px", marginLeft: "2px" }} />
              <div style={{ width: "12px", height: "3px", background: "#7c3aed", borderRadius: "1px", marginLeft: "4px" }} />
            </div>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#ffffff" }}>Anypoint LP</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a href="#" style={{ fontSize: "9px", color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>Login</a>
            <span
              style={{
                fontSize: "9px",
                padding: "0.2rem 0.5rem",
                background: "#ffffff",
                color: "#0f0f23",
                borderRadius: "4px",
                fontWeight: "600",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              Sign up for Free
            </span>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          position: "relative",
          zIndex: 1,
          paddingTop: "0.5rem",
        }}
      >
        {/* Left Column - Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "800",
              color: "#ffffff",
              margin: "0 0 0.6rem 0",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            AI-optimized acceleration<br />
            for MuleSoft<br />
            <span style={{ color: "#a78bfa" }}>development</span>
          </h1>
          
          {/* CTA Button */}
          <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "8px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
                color: "#ffffff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Start Building →
            </a>
          </div>
        </div>
        
        {/* Right Column - Canvas Animation */}
        <DataFlowCanvas />
      </div>
    </div>
  );
};

// CloudHub Migration Preview - Clean white to light blue gradient theme
export const CloudHubMigrationPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom right, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)",
        color: "#1f2937",
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
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Logo - Blue square with building icon */}
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Building icon representation */}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="2" height="4" fill="white" />
                <rect x="6" y="4" width="2" height="6" fill="white" />
                <rect x="9" y="6" width="2" height="4" fill="white" />
                <line x1="2" y1="10" x2="12" y2="10" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#111827" }}>MuleMigration</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "9px",
                padding: "0.2rem 0.5rem",
                background: "#ffffff",
                color: "#0f0f23",
                borderRadius: "4px",
                fontWeight: "600",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem 1rem",
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
            fontSize: "18px",
            fontWeight: "800",
            color: "#111827",
            margin: "0 0 0.75rem 0",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          Migrate to{" "}
          <span style={{ color: "#2563eb" }}>CloudHub 2.0</span>
          <br />
          with Confidence
        </h1>
        <p
          style={{
            fontSize: "8px",
            color: "#4b5563",
            lineHeight: "1.5",
            margin: "0 0 1rem 0",
            maxWidth: "95%",
            alignSelf: "center",
          }}
        >
          Streamline your CloudHub 1.0 to 2.0 migration with assessment tools, compatibility reports, and expert guidance.
        </p>
      </div>
    </div>
  );
};

// SnapMapper Preview - Modern light blue theme with integration animation
export const SnapMapperPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#1C4E8D",
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
      <style>{`
        @keyframes snapMapperFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-8px) scale(1.02); 
            opacity: 0.95;
          }
        }
        @keyframes snapMapperPulse {
          0%, 100% { 
            opacity: 0.6;
          }
          50% { 
            opacity: 1;
          }
        }
        @keyframes dataFlow {
          0% {
            transform: translateX(0);
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.4;
          }
        }
        @keyframes transformPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        @keyframes formatGlow {
          0%, 100% {
            opacity: 0.6;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3);
          }
        }
      `}</style>
      
      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(147, 197, 253, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 197, 253, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      
      {/* Glowing Accent Lines */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.4) 50%, transparent 100%)",
          pointerEvents: "none",
          animation: "snapMapperPulse 3s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.35) 50%, transparent 100%)",
          pointerEvents: "none",
          animation: "snapMapperPulse 3s ease-in-out infinite 1.5s",
        }}
      />
      
      {/* Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-35px",
          left: "-35px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Background Animation Elements */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Subtle background patterns */}
      </svg>

      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(30, 58, 138, 0.5)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(147, 197, 253, 0.3)",
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
              SnapMapper
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                padding: "0.3rem 0.7rem",
                fontSize: "10px",
                fontWeight: "600",
                color: "#ffffff",
                background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 30%, #60a5fa 60%, #93c5fd 100%)",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>

      {/* Content - Two Column Layout */}
      <div
        style={{
          padding: "1.5rem 1rem",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Side - Description */}
        <div
          style={{
            flex: 0.6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "0.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "800",
              lineHeight: "1.2",
              margin: 0,
              textAlign: "left",
              background: "linear-gradient(135deg, #ffffff 0%, #dbeafe 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Transform Data Formats Effortlessly
          </h2>
        </div>

        {/* Right Side - Image Preview (Full Width) */}
        <div
          style={{
            flex: 6,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "transparent",
            borderRadius: "8px",
            maxHeight: "100px",
            height: "100px",
          }}
        >
          <img
            src={dtImage}
            alt="SnapMapper Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// DataWeave Task Generator Preview - Will use the image as it's complex
// (This one can use the existing image approach)

