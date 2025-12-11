"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Clients from "./Clients";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Hero = ({
  eyebrow = "Enterprise Integration Experts",
  headline = "Seamless Integrations, Expertly Delivered",
  description = "We are the dedicated specialists who connect your systems and automate your workflows. ",
  ctaText = "Talk to an Expert",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Split headline for styling if needed, or just apply gradient to the second half
  // For "Build Smarter Integrations, Deliver Faster Results", we can highlight the second part.
  const headlineParts = headline.split(", ");
  const mainHeadline = headlineParts[0] + (headlineParts.length > 1 ? "," : "");
  const highlightHeadline =
    headlineParts.length > 1 ? headlineParts.slice(1).join(", ") : "";

  return (
    <div
      ref={heroContainerRef}
      className="w-full relative bg-white overflow-hidden"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Row container matching reference structure */}
      <div 
        className="row"
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100%",
          width: "100%",
          padding: "0rem 0 4rem 0",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Column 12 - Centered */}
        <div 
          className="col__12 text--center section-head__container_inner"
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {/* Text Header Container */}
          <div className="text_header">
            {/* Tagline/Eyebrow */}
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text_header__tagline"
                style={{ marginTop: "3rem", marginBottom: "1.5rem" }}
              >
                <span 
                  style={{ 
                    fontFamily: "'Articulat CF', Arial, sans-serif",
                    fontWeight: 300,
                    color: "#000000",
                    fontSize: "18px",
                    lineHeight: "18px"
                  }}
                >
                  {eyebrow}
                </span>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text_header__title"
              style={{
                fontFamily: "'Articulat CF', Arial, sans-serif",
                fontWeight: 600,
                marginBottom: "1.5rem"
              }}
            >
              <span 
                className="text-gradient--animated"
                style={{
                  fontSize: "69px",
                  lineHeight: "69px",
                  fontWeight: 600
                }}
              >
                {mainHeadline}
              </span>
              {highlightHeadline && (
                <>
                  <br />
                  <span 
                    style={{ 
                      color: "#0F011B",
                      fontSize: "69px",
                      lineHeight: "69px",
                      fontWeight: 600
                    }}
                  >
                    {highlightHeadline}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text_header__description"
              style={{ marginBottom: "2rem" }}
            >
              <p 
                style={{ 
                  fontFamily: "'Articulat CF', Arial, sans-serif",
                  fontWeight: 100,
                  color: "#0F011B",
                  fontSize: "24px",
                  lineHeight: "36px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "42rem",
                  margin: "0 auto"
                }}
              >
                {description}
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="section-head__buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.5rem"
            }}
          >
            <a
              href={ctaUrl}
              className="btn btn--large btn--primary"
              style={{ 
                backgroundColor: "#8353FD",
                color: "white",
                fontFamily: "'Articulat CF', sans-serif",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 0.3s",
                minWidth: "160px",
                border: "none"
              }}
            >
              <span className="btn--text">{ctaText}</span>
            </a>
          </motion.div>
        </div>

        {/* Clients Container */}
        <Clients />
      </div>
    </div>
  );
};

export default Hero;
