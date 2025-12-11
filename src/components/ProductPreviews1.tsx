import React, { useEffect, useRef, useState } from "react";
import logoDark from "@/assets/logo_dark.png";
import gooseLogo from "@/assets/Goose.svg";
import csi2Image from "@/assets/csi2.png";
import mulesoftlpImage from "@/assets/mulesoftlp-image.png";
import newLogo from "@/assets/newlogo.png";
import cmImage from "@/assets/cm.png";
import csi1Image from "@/assets/csi1.png";
import csi6Image from "@/assets/csi6.png";
import academyIcon from "@/assets/Academy-icon.png";
import trainingBgImage from "@/assets/t-i.jpg";
import snapMapperIcon from "@/assets/s-m.svg";
import MuleCraftName from "./MuleCraftName";

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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes violetMove {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(15px) scale(1.08); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        .animate-violet-move {
          animation: violetMove 5s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Animated Gradient Background Shape */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "150px",
            background: "linear-gradient(to right, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.1) 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.6,
            animation: "pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            zIndex: 0,
          }}
        />
        {/* Violet animated background on the top right */}
        <div
          className="animate-violet-move"
          style={{
            position: "absolute",
            top: "0",
            right: "12px",
            width: "96px",
            height: "72px",
            background: "linear-gradient(to bottom right, rgba(139, 92, 246, 0.6) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.7,
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 50,
          borderBottom: "none",
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src={newLogo}
              alt="Logo"
              style={{
                width: "24px",
                height: "24px",
                objectFit: "contain",
              }}
            />
            <div>
              <h1 style={{ fontSize: "12px", fontWeight: "bold", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
                MuleSoftLP
              </h1>
              <p style={{ fontSize: "6px", color: "rgba(156, 163, 175, 1)", margin: 0, fontFamily: '"Noto Sans", sans-serif' }}>
                AI-Powered Integration Learning
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                padding: "0.2rem 0.5rem",
                fontSize: "8px",
                fontWeight: "600",
                color: "#ffffff",
                background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(37, 99, 235, 0.25)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: "100%", margin: "0 auto", position: "relative", zIndex: 10 }}>
          {/* Large MulesoftLP Text */}
          <h4
            style={{
              fontSize: "clamp(30px, 10vw, 70px)",
              fontWeight: "600",
              letterSpacing: "-0.02em",
              background: "linear-gradient(to bottom, rgba(229, 231, 235, 1) 0%, rgba(156, 163, 175, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "0 0 0.5rem 0",
              lineHeight: "0.9",
              userSelect: "none",
              display: "block",
              textAlign: "center",
            }}
          >
            MulesoftLP
          </h4>

          <p
            style={{
              fontSize: "8px",
              color: "rgba(209, 213, 219, 1)",
              margin: "0 0 0.75rem 0",
              lineHeight: "1.5",
              maxWidth: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: '"Noto Sans", sans-serif',
              fontWeight: 300,
            }}
          >
            Transform your MuleSoft journey with our revolutionary AI-powered learning platform. Generate personalized
            challenges, practice in real-time, and master DataWeave faster than ever before.
          </p>

          {/* Hero Image/GIF Placeholder */}
          <div
            style={{
              position: "relative",
              marginBottom: "0.75rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(236, 72, 153, 0.2) 100%)",
                borderRadius: "12px",
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "relative",
                background: "rgba(17, 24, 39, 0.5)",
                borderRadius: "12px",
                border: "1px solid rgba(156, 163, 175, 0.3)",
                overflow: "hidden",
                backdropFilter: "blur(4px)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={mulesoftlpImage}
                alt="MuleSoft Learning Platform Hero"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Enhanced Stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(to bottom right, rgba(30, 58, 138, 0.2) 0%, rgba(30, 64, 175, 0.1) 100%)",
                padding: "0.4rem 0.6rem",
                borderRadius: "12px",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(96, 165, 250, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#ffffff" }}>1.2K</div>
                <div style={{ fontSize: "6px", color: "rgba(156, 163, 175, 1)" }}>Active Learners</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(to bottom right, rgba(20, 83, 45, 0.2) 0%, rgba(22, 101, 52, 0.1) 100%)",
                padding: "0.4rem 0.6rem",
                borderRadius: "12px",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(74, 222, 128, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#ffffff" }}>98%</div>
                <div style={{ fontSize: "6px", color: "rgba(156, 163, 175, 1)" }}>Success Rate</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(to bottom right, rgba(88, 28, 135, 0.2) 0%, rgba(107, 33, 168, 0.1) 100%)",
                padding: "0.4rem 0.6rem",
                borderRadius: "12px",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(192, 132, 252, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#ffffff" }}>Free</div>
                <div style={{ fontSize: "6px", color: "rgba(156, 163, 175, 1)" }}>To Start</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25)",
                transition: "all 0.3s ease",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Start Learning Today
            </a>
            <p style={{ fontSize: "6px", color: "rgba(156, 163, 175, 1)", marginTop: "0.5rem", fontFamily: '"Noto Sans", sans-serif', fontWeight: 300 }}>
              No credit card required • Start learning in 30 seconds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Goose Preview - Black theme with cyan accent matching Hero design
export const GoosePreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: '"Lexend", "Inter", system-ui, sans-serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Navigation */}
      <div
        style={{
          position: "relative",
          zIndex: 50,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src={gooseLogo}
              alt="GooseD Platform"
              style={{
                height: "20px",
                width: "auto",
              }}
            />
          </div>
          
          {/* Desktop Navigation - All items on the right */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Navigation Links Container */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
              }}
            >
              {["Features", "Demo", "Contact"].map((item, index) => (
                <React.Fragment key={item}>
                  <button
                    style={{
                      position: "relative",
                      padding: "0.375rem 0.75rem",
                      fontSize: "8px",
                      fontWeight: "500",
                      color: "rgba(255, 255, 255, 0.7)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(167, 224, 217, 0.1) 0%, rgba(167, 136, 217, 0.1) 100%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 10 }}>{item}</span>
                  </button>
                  {index < 2 && (
                    <div style={{ width: "1px", height: "12px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* CTA Button */}
            <div style={{ marginLeft: "0.75rem" }}>
              <span
                style={{
                  fontSize: "9px",
                  padding: "0.25rem 0.5rem",
                  background: "linear-gradient(135deg, #A7E0D9 0%, #A788D9 100%)",
                  color: "#000000",
                  borderRadius: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Schedule Demo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left Section - Text Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {/* Brand Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.7rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, rgba(167, 224, 217, 0.1) 0%, rgba(167, 136, 217, 0.1) 100%)",
              border: "1px solid rgba(167, 224, 217, 0.2)",
              backdropFilter: "blur(4px)",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "#A7E0D9",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "9px",
                fontWeight: "600",
                color: "#A7E0D9",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              GooseD
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              <span style={{ color: "#ffffff", display: "block", marginBottom: "3px" }}>Deploy, Scale</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #A7E0D9 0%, #A788D9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dominate
              </span>
            </h1>
            <p
              style={{
                fontSize: "8px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.5",
                marginTop: "0.75rem",
                maxWidth: "90%",
              }}
            >
              The ultimate DevOps platform that transforms how you build, deploy, and scale applications.
            </p>
          </div>

          {/* Feature Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              paddingTop: "0.75rem",
            }}
          >
            {["One-Click Deploy", "Auto-Scale", "Enterprise Security"].map((feature, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(167, 224, 217, 0.2) 0%, rgba(167, 136, 217, 0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#A7E0D9",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "7px",
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Enhanced Visual */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {/* Main Background Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, rgba(167, 224, 217, 0.15) 0%, rgba(167, 136, 217, 0.05) 100%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Animated Bird Logo */}
          <div style={{ position: "relative", width: "128px", height: "128px", margin: "0 auto", zIndex: 10 }}>
            {/* Main logo container */}
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
                }}
              />

              {/* Animated feather elements */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
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

          {/* Floating Elements */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "20px",
              height: "20px",
              border: "2px solid rgba(167, 224, 217, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                border: "2px solid rgba(167, 224, 217, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "linear-gradient(135deg, #A7E0D9 0%, #A788D9 100%)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

          {/* Animated Grid Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              backgroundImage: `
                linear-gradient(rgba(167, 224, 217, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167, 224, 217, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-3px); }
          75% { transform: translateY(-8px) translateX(4px); }
        }
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
      {/* Main Content - Full Image */}
      <div
        style={{
          padding: "0",
          flex: 1,
          display: "flex",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <img
          src={csi6Image}
          alt="AnypointLP Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
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
            {/* Logo - CloudHub 2.0 Migration */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main cloud - version 1.0 (bottom layer) */}
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
                fill="#60a5fa"
                opacity="0.7"
              />
              {/* Upgraded cloud - version 2.0 (top layer, offset) */}
              <path
                d="M19.35 8.04C18.67 4.59 15.64 2 12 2C9.11 2 6.6 3.64 5.35 6.04C2.34 6.36 0 8.91 0 12C0 15.31 2.69 18 6 18H19C21.76 18 24 15.76 24 13C24 10.36 21.95 8.22 19.35 8.04Z"
                fill="#2563eb"
              />
              {/* Upgrade arrow pointing upward */}
              <path
                d="M12 14V18M12 14L10 16M12 14L14 16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Version indicators */}
              <circle cx="7" cy="16" r="1.5" fill="#93c5fd" />
              <circle cx="7" cy="16" r="0.6" fill="#ffffff" />
              <circle cx="17" cy="14" r="1.5" fill="#1d4ed8" />
              <circle cx="16.3" cy="13.5" r="0.6" fill="#ffffff" />
              <circle cx="17.7" cy="13.5" r="0.6" fill="#ffffff" />
            </svg>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#111827" }}>CloudHub 2.0</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "9px",
                padding: "0.2rem 0.5rem",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                borderRadius: "4px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Try now
            </a>
          </div>
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
            fontSize: "18px",
            fontWeight: "800",
            color: "#111827",
            margin: "0 0 0.5rem 0",
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
            margin: "0 0 0.75rem 0",
            maxWidth: "90%",
            alignSelf: "center",
          }}
        >
          Streamline your CloudHub 1.0 to 2.0 migration with assessment tools, compatibility reports, and expert guidance.
        </p>

        {/* Image Preview */}
        <div
          style={{
            marginTop: "0.5rem",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          <img
            src={cmImage}
            alt="CloudHub Migration Preview"
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

// SnapMapper Preview - Dark blue theme
export const SnapMapperPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0E1831",
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
            background: "rgba(168, 85, 247, 0.1)",
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
            background: "rgba(192, 132, 252, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(14, 24, 49, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: 0, marginLeft: "-0.5rem", marginRight: "-1rem" }}>
            {/* SnapMapper Logo */}
            <img
              src={snapMapperIcon}
              alt="SnapMapper"
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
              }}
            />
            <h1 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
              SnapMapper
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
                backgroundColor: "#E60077",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(230, 0, 119, 0.25)",
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
        {/* Large SnapMapper Text */}
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
          SnapMapper
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
          Transform data formats effortlessly with an intuitive, web-based tool for data mapping and transformation.
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
            src={csi1Image}
            alt="SnapMapper Preview"
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

// Training Preview - Enhanced Design with Blue Background
export const TrainingPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const courses = [
    { name: "Full Stack Development", icon: "💻" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Mulesoft Developer", icon: "⚙️" },
    { name: "Digital Marketing", icon: "📱" },
  ];

  const visibleCourses = courses.slice(currentIndex, currentIndex + 2);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= courses.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? courses.length - 2 : prev - 2));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${trainingBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
      {/* Overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14, 24, 49, 0.6)",
          zIndex: 1,
        }}
      />
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>


      {/* Hero Section with Navbar */}
      <div
        style={{
          padding: "0.5rem 0 1rem 0",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          zIndex: 10,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        {/* Navbar inside Hero */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            width: "100%",
            padding: "0 0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: 0 }}>
            <img
              src={academyIcon}
              alt="Academy"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              <MuleCraftName /> Academy
            </span>
          </div>
          <a
            href="https://training.mulecraft.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.35rem 0.7rem",
              fontSize: "9px",
              fontWeight: "600",
              color: "#0E1831",
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              textDecoration: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fbbf24";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            Explore →
          </a>
        </div>

        {/* Hero Content - Proper Alignment */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#fbbf24",
              margin: "0 0 0.25rem 0",
              lineHeight: "1.2",
            }}
          >
            Learn Today,
          </h1>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ffffff",
              margin: 0,
              lineHeight: "1.2",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Lead Tomorrow!
          </h1>
        </div>
      </div>

      {/* Content Section - Course Cards */}
      <div
        style={{
          padding: "0.5rem 1rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        {/* Course Cards Container with Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            position: "relative",
          }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Course Cards */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {visibleCourses.map((course, index) => (
              <div
                key={`${course.name}-${currentIndex + index}`}
                style={{
                  minWidth: "90px",
                  width: "90px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.95)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.4rem 0.5rem",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: "24px",
                    marginBottom: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {course.icon}
                </div>
                {/* Course Name */}
                <h3
                  style={{
                    fontSize: "7px",
                    fontWeight: "700",
                    color: "#111827",
                    margin: 0,
                    lineHeight: "1.2",
                    textAlign: "center",
                  }}
                >
                  {course.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

