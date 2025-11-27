import { useState, useEffect } from "react";
import {
  RAMLifyPreview,
  MuleSoftLPPreview,
  AnypointLPPreview,
  CloudHubMigrationPreview,
  GoosePreview,
  SnapMapperPreview,
} from "./ProductPreviews";
import csi1Image from "@/assets/csi1.png";
import csi2Image from "@/assets/csi2.png";
import csi3Image from "@/assets/csi3.png";
import csi4Image from "@/assets/csi4.png";
import csi6Image from "@/assets/csi6.png";
import csi7Image from "@/assets/csi7.png";
import trainingImage from "@/assets/training.png";
import blog1Image from "@/assets/blog-i.png";
import blog2Image from "@/assets/blog2.webp";
import si1Image from "@/assets/mulesoftfinal.png";
import si2Image from "@/assets/snaplogicimg.svg";
import si3Image from "@/assets/salesforce-360.webp";
import si4Image from "@/assets/n8n-i.png";
import si5Image from "@/assets/si5.webp";
import si6Image from "@/assets/Digibee1.png";
import cs1Image from "@/assets/blog-images05-1200x747.webp";
import cs2Image from "@/assets/healthcaretest3.png";
import cs3Image from "@/assets/digitaltransformationfinal.webp";
import cs4Image from "@/assets/automationsandplatformfinal3.png";

interface DropdownItem {
  label: string;
  isSelected?: boolean;
  content?: string[];
  menuItems?: MenuGridItem[];
}

interface MenuGridItem {
  icon?: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  menuItems?: MenuGridItem[];
  isOpen: boolean;
  onClose: () => void;
  navbarHeight?: number;
  contentType?: "grid" | "list";
  navItem?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownMenu = ({
  items,
  menuItems: _menuItems, // Keep for potential future use
  isOpen,
  onClose,
  navbarHeight = 80,
  navItem,
  onMouseEnter,
  onMouseLeave,
}: DropdownMenuProps) => {
  const [selectedHeader, setSelectedHeader] = useState<string | null>(null);

  // Initialize selected header for Solutions, Products, Case Studies, and Resources dropdown
  useEffect(() => {
    if (navItem === "Products") {
      // For Products dropdown, set Goose as default
      setSelectedHeader("Goose");
    } else if ((navItem === "Solutions" || navItem === "Case Studies" || navItem === "Resources") && items.length > 0) {
      const defaultSelected = items.find((item) => item.isSelected) || items[0];
      setSelectedHeader(defaultSelected.label);
    }
  }, [navItem, items]);

  if (!isOpen) return null;

  // Special layout for Solutions dropdown
  if (navItem === "Solutions") {
    const selectedItem =
      items.find((item) => item.label === selectedHeader) || items[0];
    const menuItems = selectedItem?.menuItems || [];

    // Display all menuItems in the second column only (third column is image card only)
    const leftColumnItems = menuItems;

    // Image mapping for each solution header - using specific tech stack/flow diagram images
    const solutionImages: { [key: string]: { image: string; title: string; description: string; href?: string } } = {
      "MuleSoft": {
        image: si1Image,
        title: "MuleSoft Integration",
        description: "API-led connectivity & Mule 3 to Mule 4 migration",
        href: "https://docs.MuleSoft.com/mule-runtime/latest/migration-intro",
      },
      "n8n": {
        image: si4Image,
        title: "n8n Workflow Automation",
        description: "Fair-code automation platform for technical teams",
        href: "https://n8n.io/?ps_partner_key=YzQ1MWQxYjZjNDgx&ps_xid=EfWcuhfPTQdyZC&gsxid=EfWcuhfPTQdyZC&gspk=YzQ1MWQxYjZjNDgx&gad_source=1&gad_campaignid=23207748368&gbraid=0AAAABB6E8Q-exN_bvdLbThczUc4o90juR&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g7Xw_SA94G7Y6eRaMUci_FnneMb7ZpWLrpEwldb1WTlubi8nf5ha9xoC5_EQAvD_BwE",
      },
      "SnapLogic": {
        image: si2Image,
        title: "SnapLogic Data Orchestration",
        description: "Data integration and automation platform with intelligent pipeline design",
        href: "https://www.snaplogic.com/glossary/orchestration",
      },
      "Workato": {
        image: si5Image,
        title: "Workato Chatbot Automation",
        description: "Enterprise automation with intelligent chatbots",
        href: "https://www.workato.com/the-connector/chatbot-automation/",
      },
      "Salesforce": {
        image: si3Image,
        title: "Salesforce Integration Hub",
        description: "CRM integration with custom workflows & data sync",
        href: "https://www.salesforce.com/crm/",
      },
      "Digibee": {
        image: si6Image,
        title: "Digibee Microservices Architecture",
        description: "Circuit breaker pattern & microservices orchestration",
        href: "https://docs.digibee.com/documentation/resources/use-cases/microservices-circuit-breaker",
      },
    };

    const selectedImageCard = solutionImages[selectedHeader || "MuleSoft"];

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          style={{ top: `${navbarHeight}px` }}
        />

        {/* Centered Dropdown Dialog */}
        <div
          data-dropdown-menu
          className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            top: `${navbarHeight}px`,
            width: "70%",
            maxWidth: "900px",
            opacity: 1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
            marginTop: "12px",
            overflow: "hidden",
          }}
        >
          <div className="flex w-full" style={{ minHeight: "auto" }}>
            {/* Left Column - Headers */}
            <div
              className="flex flex-col relative"
              style={{ width: "25%", minWidth: "180px" }}
            >
              <div
                className="flex-1 overflow-y-auto flex flex-col"
                style={{
                  padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {items.map((item) => (
                  <button
                    key={item.label}
                    onMouseEnter={() => setSelectedHeader(item.label)}
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      backgroundColor:
                        selectedHeader === item.label
                          ? "hsl(var(--primary) / 0.1)"
                          : "transparent",
                      color:
                        selectedHeader === item.label ? "hsl(var(--primary))" : "#1f1f1f",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "15px",
                      fontWeight: selectedHeader === item.label ? 600 : 500,
                      transition: "all 0.2s ease",
                      borderRadius: "6px",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {/* Separator at parent level for full height */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Right Two Columns - Content */}
            <div className="flex flex-1">
              {/* Middle Column */}
              <div className="flex-1 flex flex-col relative">
                {/* Separator at parent level for full height */}
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    backgroundColor: "#d1d5db",
                    zIndex: 10,
                  }}
                />
                <div
                  className="flex-1 overflow-y-auto flex flex-col"
                  style={{
                    padding: "1.25rem 1.25rem",
                    fontFamily: '"Noto Sans", sans-serif',
                  }}
                >
                  <div className="space-y-2.5">
                    {leftColumnItems.map((menuItem, index) => (
                      <a
                        key={index}
                        href={menuItem.href || "#"}
                        className="link-item block"
                        style={{
                          display: "block",
                          padding: "0.5rem 0.75rem",
                          color: "#1f1f1f",
                          transition: "color .3s ease 0s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "hsl(var(--primary))";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#1f1f1f";
                        }}
                      >
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "15px",
                            lineHeight: "1.6",
                            fontWeight: 500,
                            color: "inherit",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {menuItem.title}
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            lineHeight: "1.5",
                            color: "#6b7280",
                          }}
                        >
                          {menuItem.description}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Image Card Only */}
              <div className="flex-1 flex flex-col">
                <div
                  className="flex-1 overflow-y-auto flex flex-col"
                  style={{
                    padding: "1.25rem 1.25rem",
                    fontFamily: '"Noto Sans", sans-serif',
                  }}
                >
                  {/* Image Card - Centered for all headers */}
                  {selectedImageCard && (
                    <a
                      href={selectedImageCard.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        margin: "0",
                        width: "100%",
                        minHeight: "200px",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        boxShadow: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        if (selectedHeader !== "SnapLogic") {
                          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                        }
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1)";
                        }
                      }}
                    >
                      {/* Image or Video */}
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          overflow: "hidden",
                          position: "relative",
                          backgroundColor: selectedHeader === "MuleSoft"
                            ? "#032D60"
                            : selectedHeader === "SnapLogic"
                              ? "#023292"
                              : selectedHeader === "Digibee"
                                ? "#ffffff"
                                : "#f3f4f6",
                          background: selectedHeader === "MuleSoft"
                            ? "#032D60"
                            : selectedHeader === "SnapLogic"
                              ? "#023292"
                              : selectedHeader === "Digibee"
                                ? "#E7F5FF"
                                : "#f3f4f6",
                        }}
                      >
                        {/* White shadow effect for SnapLogic */}
                        {selectedHeader === "SnapLogic" && (
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "80%",
                              height: "80%",
                              borderRadius: "50%",
                              background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)",
                              boxShadow: "0 0 60px 30px rgba(255, 255, 255, 0.3)",
                              zIndex: 1,
                              pointerEvents: "none",
                            }}
                          />
                        )}
                        {selectedHeader === "MuleSoft" ? (
                          <video
                            autoPlay
                            playsInline
                            muted
                            loop
                            poster="https://wp.sfdcdigital.com/mulesoft/en-us/wp-content/uploads/sites/40/2024/11/blade-1-marquee-hero-desktop-v1.webp?w=1024"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                              position: "relative",
                              zIndex: 2,
                            }}
                          >
                            <source
                              src="https://www.mulesoft.com/misc/pbc/assets/media/motion-hero-alpha-1860x1240.webm"
                              type="video/webm"
                            />
                            <source
                              src="https://www.mulesoft.com/misc/pbc/assets/media/Hero Motion_RESIZE _1860x1240_Original Export.mov"
                              type="video/quicktime"
                            />
                          </video>
                        ) : (
                          <img
                            src={selectedImageCard.image}
                            alt={selectedImageCard.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: selectedHeader === "SnapLogic" ? "fill" : "cover",
                              transition: "transform 0.3s ease",
                              position: "relative",
                              zIndex: 2,
                            }}
                          />
                        )}
                      </div>
                      {/* Card Content */}
                      <div style={{
                        padding: "1rem"
                      }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#1f1f1f",
                            marginBottom: "0.5rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {selectedImageCard.title}
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          {selectedImageCard.description}
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Special layout for Resources dropdown
  if (navItem === "Resources") {
    // Blog cards data
    const blogCards = [
      {
        image: blog1Image,
        title: "Seamless MuleSoft Upgrade",
        description: "Java 17, the latest Long-Term Support (LTS) release, introduces powerful advancements that can elevate your MuleSoft applications.",
        href: "https://blogs.mulecraft.in/seamless-mulesoft-upgrade-transitioning-from-java-8-to-java-17-for-rest-apis/",
      },
      {
        image: blog2Image,
        title: "Two-Way SSL In Mule 4",
        description: "Two-Way SSL in Mule 4 enhances security by requiring both the client and server to authenticate each other.",
        href: "https://blogs.mulecraft.in/two-way-ssl-in-mule-4/",
      },
    ];

    // Training image
    const trainingItem = items.find((item) => item.label === "Training");
    const trainingMenuItem = trainingItem?.menuItems?.[0];

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          style={{ top: `${navbarHeight}px` }}
        />

        {/* Centered Dropdown Dialog */}
        <div
          data-dropdown-menu
          className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            top: `${navbarHeight}px`,
            width: "70%",
            maxWidth: "900px",
            height: "360px",
            opacity: 1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
            marginTop: "12px",
            overflow: "hidden",
          }}
        >
          <div className="flex w-full" style={{ height: "100%" }}>
            {/* Left Column - Headers */}
            <div
              className="flex flex-col relative"
              style={{ width: "25%", minWidth: "180px" }}
            >
              <div
                className="flex flex-col"
                style={{
                  padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  height: "100%",
                }}
              >
                {items.map((item) => (
                  <button
                    key={item.label}
                    onMouseEnter={() => setSelectedHeader(item.label)}
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      backgroundColor:
                        selectedHeader === item.label
                          ? "hsl(var(--primary) / 0.1)"
                          : "transparent",
                      color:
                        selectedHeader === item.label ? "hsl(var(--primary))" : "#1f1f1f",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "15px",
                      fontWeight: selectedHeader === item.label ? 600 : 500,
                      transition: "all 0.2s ease",
                      borderRadius: "6px",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {/* Separator line */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Right Column - Content based on selected header */}
            <div className="flex-1 flex flex-col" style={{ position: "relative" }}>
              {/* Blog Cards - 2 Cards with Image and Description */}
              {selectedHeader === "Blog" && (
                <div
                  style={{
                    display: "flex",
                    padding: "1.25rem",
                    fontFamily: '"Noto Sans", sans-serif',
                    alignItems: "stretch",
                    gap: "1rem",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {blogCards.slice(0, 2).map((card, index) => (
                    <a
                      key={index}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        flex: "1",
                        minWidth: 0,
                        textDecoration: "none",
                        color: "inherit",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        overflow: "hidden",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1)";
                        }
                      }}
                    >
                      {/* Image Container */}
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          overflow: "hidden",
                          backgroundColor: "#f3f4f6",
                          position: "relative",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Card Content */}
                      <div style={{ padding: "1rem" }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1f1f1f",
                            marginBottom: "0.5rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {card.title}
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          {card.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Training - Three Column Layout */}
              {selectedHeader === "Training" && trainingMenuItem && (
                <div
                  style={{
                    display: "flex",
                    padding: "0.75rem",
                    fontFamily: '"Noto Sans", sans-serif',
                    alignItems: "flex-start",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {/* Second Column - Content Items */}
                  <div
                    style={{
                      width: "45%",
                      paddingRight: "0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {/* Training Content Items - 4 items */}
                    <a
                      href="https://training.mulecraft.in/courses"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "inherit",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: 600,
                            marginBottom: "0.25rem",
                          }}
                        >
                          MuleSoft Training
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "12px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          Master MuleSoft integration platform with our comprehensive courses
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://training.mulecraft.in/certifications"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "inherit",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: 600,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Certification Programs
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "12px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          Get certified and validate your integration expertise
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://training.mulecraft.in/workshops"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "inherit",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: 600,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Hands-on Workshops
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "12px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          Practice with real-world scenarios in guided workshops
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://training.mulecraft.in/learning-paths"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "inherit",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "hsl(var(--primary))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: 600,
                            marginBottom: "0.25rem",
                          }}
                        >
                          Learning Paths
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "12px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          Follow structured paths to build your integration skills
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Vertical Separator */}
                  <div
                    style={{
                      position: "absolute",
                      left: "calc(45% + 0.25rem)",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: "#d1d5db",
                    }}
                  />

                  {/* Third Column - Training Image Card */}
                  <div
                    style={{
                      width: "55%",
                      paddingLeft: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href={trainingMenuItem.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        width: "90%",
                        textDecoration: "none",
                        color: "inherit",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        overflow: "hidden",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          (img as HTMLElement).style.transform = "scale(1)";
                        }
                      }}
                    >
                      {/* Image Container */}
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          overflow: "hidden",
                          backgroundColor: "#f3f4f6",
                          position: "relative",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={trainingImage}
                          alt={trainingMenuItem.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Card Content */}
                      <div style={{ padding: "1rem" }}>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1f1f1f",
                            marginBottom: "0.5rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {trainingMenuItem.title}
                        </div>
                        <div
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            color: "#6b7280",
                            lineHeight: "1.5",
                          }}
                        >
                          {trainingMenuItem.description}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Special layout for Products dropdown - three column layout like Solutions
  if (navItem === "Products") {
    // Product images mapping for third column
    const productImages: {
      [key: string]: { image: string; title: string; description: string; href: string };
    } = {
      "SnapMapper": {
        image: csi1Image,
        title: "SnapMapper Playground",
        description: "A safe three-panel interface for testing and validating SnapLogic integration scripts.",
        href: "https://snaplogic.playground.mulecraft.in/",
      },
      "AnypointLP": {
        image: csi6Image,
        title: "AnypointLP Platform",
        description: "AI-powered MuleSoft development platform with generators for flows, DataWeave, and RAML.",
        href: "https://anypointlp-secondary.lovable.app/",
      },
      "CloudHub 2.0 Migration": {
        image: csi7Image,
        title: "Mule Migration Nexus",
        description: "Automates MuleSoft on-prem to CloudHub 2.0 migration with dependency analysis.",
        href: "https://mule-migration-nexus.lovable.app/",
      },
      "Goose": {
        image: csi4Image,
        title: "Goose - Deploy, Scale, Dominate",
        description: "The ultimate DevOps platform that transforms how you build, deploy, and scale applications.",
        href: "https://goosed.in/",
      },
      "RAMLify": {
        image: csi2Image,
        title: "RAML Assistant",
        description: "AI-based assistant that converts natural language to RAML specifications.",
        href: "https://ramlify-flow-agent.lovable.app/",
      },
      "MuleSoftLP": {
        image: csi3Image,
        title: "MuleSoft Learning Platform",
        description: "Learning platform with AI-powered task generation and transformation playground.",
        href: "https://mulesoft.dev/",
      },
    };

    // Product headers data
    const productHeaders = [
      "Goose",
      "SnapMapper",
      "AnypointLP",
      "RAMLify",
      "CloudHub 2.0 Migration",
      "MuleSoftLP",
    ];

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          style={{ top: `${navbarHeight}px` }}
        />

        {/* Centered Dropdown Dialog - Same size as Solutions */}
        <div
          data-dropdown-menu
          className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            top: `${navbarHeight}px`,
            width: "70%",
            maxWidth: "900px",
            opacity: 1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
            marginTop: "12px",
            overflow: "hidden",
          }}
        >
          <div className="flex w-full" style={{ minHeight: "auto" }}>
            {/* First Column - Product Headers */}
            <div
              className="flex flex-col relative"
              style={{ width: "25%", minWidth: "180px" }}
            >
              <div
                className="flex-1 overflow-y-auto flex flex-col"
                style={{
                  padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {productHeaders.map((header) => (
                  <button
                    key={header}
                    onMouseEnter={() => setSelectedHeader(header)}
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      backgroundColor:
                        selectedHeader === header
                          ? "hsl(var(--primary) / 0.1)"
                          : "transparent",
                      color:
                        selectedHeader === header ? "hsl(var(--primary))" : "#1f1f1f",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "15px",
                      fontWeight: selectedHeader === header ? 600 : 500,
                      transition: "all 0.2s ease",
                      borderRadius: "6px",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {header}
                  </button>
                ))}
              </div>
              {/* Separator line */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Second & Third Columns Container */}
            <div
              className="flex-1 flex"
              style={{
                position: "relative",
              }}
            >
              {/* Second Column - Content Cards */}
              <div
                style={{
                  width: "50%",
                  padding: "1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                  overflowY: "auto",
                }}
              >
                {selectedHeader && (
                  <div className="space-y-2.5">
                    {selectedHeader === "SnapMapper" && (
                      <>
                        <a
                          href="https://snaplogic.playground.mulecraft.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Three-Panel Interface
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Safe testing environment for SnapLogic scripts
                          </div>
                        </a>
                        <a
                          href="https://snaplogic.playground.mulecraft.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Import/Export Features
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Easily manage and share integration scripts
                          </div>
                        </a>
                        <a
                          href="https://snaplogic.playground.mulecraft.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Real-time Error Handling
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Instant feedback with guided workflows
                          </div>
                        </a>
                        <a
                          href="https://snaplogic.playground.mulecraft.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Guided Workflows
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Step-by-step integration development assistance
                          </div>
                        </a>
                      </>
                    )}
                    {selectedHeader === "AnypointLP" && (
                      <>
                        <a
                          href="https://anypointlp-secondary.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Mule Flow Generator
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            AI-powered MuleSoft flow generation
                          </div>
                        </a>
                        <a
                          href="https://anypointlp-secondary.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            DataWeave & RAML Tools
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Generate DataWeave transformations and RAML specs
                          </div>
                        </a>
                        <a
                          href="https://anypointlp-secondary.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            GitHub Integration
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Seamless collaboration and version control
                          </div>
                        </a>
                        <a
                          href="https://anypointlp-secondary.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            MUnit Test Generator
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Automated test case generation for Mule apps
                          </div>
                        </a>
                      </>
                    )}
                    {selectedHeader === "CloudHub 2.0 Migration" && (
                      <>
                        <a
                          href="https://mule-migration-nexus.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Automated Migration
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            On-prem to CloudHub 2.0 migration automation
                          </div>
                        </a>
                        <a
                          href="https://mule-migration-nexus.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Dependency Analysis
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Track dependencies and technical debt
                          </div>
                        </a>
                        <a
                          href="https://mule-migration-nexus.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Progress Tracking
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Monitor migration status in real-time
                          </div>
                        </a>
                        <a
                          href="https://mule-migration-nexus.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Cloud Optimization
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Optimize applications for CloudHub 2.0 environment
                          </div>
                        </a>
                      </>
                    )}
                    {selectedHeader === "Goose" && (
                      <>
                        <a
                          href="https://goosed.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            One-Click Deploy
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Deploy applications instantly with zero configuration
                          </div>
                        </a>
                        <a
                          href="https://goosed.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Auto-Scale
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Automatic scaling based on demand and traffic
                          </div>
                        </a>
                        <a
                          href="https://goosed.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Enterprise Security
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Built-in security features for production applications
                          </div>
                        </a>
                        <a
                          href="https://goosed.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Real-time Monitoring
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Monitor performance and optimize deployments
                          </div>
                        </a>
                      </>
                    )}
                    {selectedHeader === "RAMLify" && (
                      <>
                        <a
                          href="https://ramlify-flow-agent.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Natural Language to RAML
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Convert descriptions to RAML specifications
                          </div>
                        </a>
                        <a
                          href="https://ramlify-flow-agent.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            API Design Optimization
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Faster API design with AI assistance
                          </div>
                        </a>
                        <a
                          href="https://ramlify-flow-agent.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "hsl(var(--primary))";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Anypoint Integration
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Seamless integration with Anypoint Platform
                          </div>
                        </a>
                        <a
                          href="https://ramlify-flow-agent.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#059bd1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            RAML Validation
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Real-time validation and syntax checking for RAML specs
                          </div>
                        </a>
                      </>
                    )}
                    {selectedHeader === "MuleSoftLP" && (
                      <>
                        <a
                          href="https://mulesoft.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#059bd1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            AI Task Generation
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Automated learning tasks for skill development
                          </div>
                        </a>
                        <a
                          href="https://mulesoft.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#059bd1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Transformation Playground
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Interactive environment for DataWeave practice
                          </div>
                        </a>
                        <a
                          href="https://mulesoft.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#059bd1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            Progress Tracking
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            Monitor learning progress with detailed analytics
                          </div>
                        </a>
                        <a
                          href="https://mulesoft.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                            transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#059bd1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                        >
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem" }}>
                            RAML Assistant
                          </div>
                          <div style={{ fontFamily: '"Noto Sans", sans-serif', fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
                            AI-powered RAML specification helper
                          </div>
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Vertical Separator */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                }}
              />

              {/* Third Column - Product Image Card */}
              <div
                style={{
                  width: "50%",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedHeader && productImages[selectedHeader] && (
                  <a
                    href={productImages[selectedHeader].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      width: "100%",
                      textDecoration: "none",
                      color: "inherit",
                      borderRadius: "8px",
                      overflow: "hidden",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      border: "1px solid #e5e7eb",
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                      if (img) {
                        img.style.transform = "scale(1.05)";
                      }
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                      if (img) {
                        img.style.transform = "scale(1)";
                      }
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        overflow: "hidden",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {selectedHeader === "SnapMapper" && <SnapMapperPreview />}
                      {selectedHeader === "AnypointLP" && <AnypointLPPreview />}
                      {selectedHeader === "CloudHub 2.0 Migration" && <CloudHubMigrationPreview />}
                      {selectedHeader === "Goose" && <GoosePreview />}
                      {selectedHeader === "RAMLify" && <RAMLifyPreview />}
                      {selectedHeader === "MuleSoftLP" && <MuleSoftLPPreview />}
                    </div>

                    {/* Title and Description */}
                    <div style={{ padding: "1rem" }}>
                      <div
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#1f1f1f",
                          marginBottom: "0.5rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {productImages[selectedHeader].title}
                      </div>
                      <div
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: "13px",
                          color: "#6b7280",
                          lineHeight: "1.5",
                        }}
                      >
                        {productImages[selectedHeader].description}
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Special layout for Case Studies dropdown with sidebar (similar to Solutions)
  if (navItem === "Case Studies") {
    const selectedItem =
      items.find((item) => item.label === selectedHeader) || items[0];
    const menuItems = selectedItem?.menuItems || [];

    // Image mapping for each case study category
    const caseStudyImages: { [key: string]: { image: string; title: string; description: string; href?: string } } = {
      "HR Management": {
        image: cs1Image,
        title: "HR Management Transformation",
        description: "Streamlined HR processes and improved employee experience with integrated automation.",
        href: "#",
      },
      "Healthcare Solutions": {
        image: cs2Image,
        title: "Healthcare Digital Innovation",
        description: "Enhanced patient care through seamless data integration and workflow automation.",
        href: "#",
      },
      "Digital Transformation": {
        image: cs3Image,
        title: "Enterprise Digital Transformation",
        description: "Modernized legacy systems and accelerated digital initiatives across the organization.",
        href: "#",
      },
      "Automation & Platforms": {
        image: cs4Image,
        title: "Platform Automation Excellence",
        description: "Achieved operational efficiency through intelligent automation and platform integration.",
        href: "#",
      },
    };

    const selectedImageCard = caseStudyImages[selectedHeader || "HR Management"];

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          style={{ top: `${navbarHeight}px` }}
        />

        {/* Centered Dropdown Dialog */}
        <div
          data-dropdown-menu
          className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            top: `${navbarHeight}px`,
            width: "70%",
            maxWidth: "900px",
            opacity: 1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
            marginTop: "12px",
            overflow: "hidden",
          }}
        >
          <div className="flex w-full" style={{ minHeight: "auto" }}>
            {/* Left Sidebar - Category Headers */}
            <div
              className="flex flex-col relative"
              style={{ width: "25%", minWidth: "180px" }}
            >
              <div
                className="flex-1 overflow-y-auto flex flex-col"
                style={{
                  padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {items.map((item, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setSelectedHeader(item.label)}
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "15px",
                      fontWeight: 500,
                      color: selectedHeader === item.label ? "hsl(var(--primary))" : "#1f1f1f",
                      backgroundColor:
                        selectedHeader === item.label ? "hsl(var(--primary) / 0.1)" : "transparent",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {/* Separator line */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Middle Column - Case Study Items */}
            <div
              className="flex flex-col relative"
              style={{
                width: "40%",
                padding: "1.25rem 1.25rem",
                fontFamily: '"Noto Sans", sans-serif',
                overflowY: "auto",
              }}
            >
              <div className="space-y-2.5">
                {menuItems.map((menuItem, index) => (
                  <a
                    key={index}
                    href={menuItem.href || "#"}
                    className="link-item block"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.75rem",
                      color: "#1f1f1f",
                      transition: "color .3s ease 0s",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "hsl(var(--primary))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#1f1f1f";
                    }}
                  >
                    {/* Content */}
                    <div className="item-content">
                      <div
                        className="item-title"
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: "15px",
                          lineHeight: "1.6",
                          fontWeight: 500,
                          color: "inherit",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {menuItem.title}
                      </div>
                      <div
                        className="item-description"
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: "13px",
                          lineHeight: "1.5",
                          color: "#6b7280",
                        }}
                      >
                        {menuItem.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              {/* Separator line */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#d1d5db",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Right Column - Image Card */}
            <div
              className="flex flex-col"
              style={{
                width: "35%",
                padding: "1.25rem 1.25rem",
                fontFamily: '"Noto Sans", sans-serif',
                overflowY: "auto",
              }}
            >
              {selectedImageCard && (
                <a
                  href={selectedImageCard.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    margin: "auto",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      (img as HTMLElement).style.transform = "scale(1.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      (img as HTMLElement).style.transform = "scale(1)";
                    }
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      overflow: "hidden",
                      backgroundColor: "#f3f4f6",
                    }}
                  >
                    <img
                      src={selectedImageCard.image}
                      alt={selectedImageCard.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit:
                          selectedHeader === "Digital Transformation"
                            ? "fill"
                            : selectedHeader === "Healthcare Solutions"
                              ? "cover"
                              : selectedHeader === "Automation & Platforms"
                                ? "cover"
                                : selectedHeader === "HR Management"
                                  ? "fill"
                                  : "scale-down",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  {/* Card Content */}
                  <div style={{ padding: "1rem" }}>
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#1f1f1f",
                        marginBottom: "0.5rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {selectedImageCard.title}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "13px",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      {selectedImageCard.description}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Get first 3 items for three columns (default layout for other dropdowns)
  const getColumns = () => {
    // Take first 3 items, or pad with empty items if less than 3
    const columnItems = items.slice(0, 3);
    while (columnItems.length < 3) {
      columnItems.push({ label: "", menuItems: [] });
    }
    return columnItems;
  };

  const columns = getColumns();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        style={{ top: `${navbarHeight}px` }}
      />

      {/* Centered Dropdown Dialog */}
      <div
        data-dropdown-menu
        className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          top: `${navbarHeight}px`,
          width: "70%",
          maxWidth: "900px",
          opacity: 1,
          transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
          marginTop: "12px",
          overflow: "hidden",
        }}
      >
        <div className="flex w-full" style={{ minHeight: "auto" }}>
          {/* Three Column Layout */}
          {columns.map((columnItem, columnIndex) => {
            const isOtherProducts =
              navItem === "Products" && columnItem.label === "OTHER PRODUCTS";

            return (
              <div
                key={columnIndex}
                className="flex-1 flex flex-col relative"
                style={{ overflow: "hidden" }}
              >
                {/* Grey Separator Line (except for last column) - Positioned at parent level */}
                {columnIndex < columns.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: "#d1d5db",
                      zIndex: 10,
                    }}
                  />
                )}
                {/* Column Content */}
                <div
                  className="flex-1 flex flex-col"
                  style={{
                    padding:
                      navItem === "Products"
                        ? "1.5rem 1.25rem"
                        : "1.25rem 1.25rem",
                    fontFamily: '"Noto Sans", sans-serif',
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
                  {/* Special layout for OTHER PRODUCTS in Products dropdown */}
                  {isOtherProducts ? (
                    <>
                      {/* Upper row - Image with description */}
                      <div
                        style={{
                          marginLeft: "0.75rem",
                          marginRight: "0.75rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src={csi4Image}
                            alt="GOOSE | Deploy, Scale, Dominate"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "8px",
                              objectFit: "cover",
                              marginBottom: "0.5rem",
                            }}
                          />
                          <div
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "14px",
                              lineHeight: "1.5",
                              color: "#1f1f1f",
                              fontWeight: 500,
                            }}
                          >
                            GOOSE | Deploy, Scale, Dominate
                          </div>
                          <div
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "12px",
                              lineHeight: "1.5",
                              color: "#707070",
                              marginTop: "0.25rem",
                            }}
                          >
                            The ultimate DevOps platform that transforms how you
                            build, deploy, and scale applications.
                          </div>
                        </a>
                      </div>

                      {/* Gray Separator Line - Full Width */}
                      <div
                        style={{
                          width: "calc(100% + 2.5rem)",
                          height: "1px",
                          backgroundColor: "#d1d5db",
                          marginBottom: "0.5rem",
                          marginLeft: "-1.25rem",
                          marginRight: "-1.25rem",
                        }}
                      />

                      {/* Second row - Mule Migration Nexus */}
                      {columnItem.menuItems &&
                        columnItem.menuItems.length > 0 && (
                          <>
                            <a
                              href={columnItem.menuItems[0].href || "#"}
                              className="link-item block"
                              style={{
                                display: "block",
                                padding: "0.5rem 0.75rem",
                                color: "#1f1f1f",
                                transition: "color .3s ease 0s",
                                textDecoration: "none",
                                textAlign: "center",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "hsl(var(--primary))";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#1f1f1f";
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                  fontSize: "14px",
                                  lineHeight: "1.6",
                                  fontWeight: 500,
                                  color: "inherit",
                                }}
                              >
                                {columnItem.menuItems[0].title}
                              </div>
                            </a>

                            {/* Gray Separator Line - Full Width */}
                            <div
                              style={{
                                width: "calc(100% + 2.5rem)",
                                height: "1px",
                                backgroundColor: "#d1d5db",
                                marginTop: "0.5rem",
                                marginBottom: "0.5rem",
                                marginLeft: "-1.25rem",
                                marginRight: "-1.25rem",
                              }}
                            />
                          </>
                        )}

                      {/* Third row - DataWeave Task Generator */}
                      {columnItem.menuItems &&
                        columnItem.menuItems.length > 1 && (
                          <a
                            href={columnItem.menuItems[1].href || "#"}
                            className="link-item block"
                            style={{
                              display: "block",
                              padding: "0.5rem 0.75rem",
                              color: "#1f1f1f",
                              transition: "color .3s ease 0s",
                              textDecoration: "none",
                              textAlign: "center",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "hsl(var(--primary))";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#1f1f1f";
                            }}
                          >
                            <div
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                fontSize: "14px",
                                lineHeight: "1.6",
                                fontWeight: 500,
                                color: "inherit",
                              }}
                            >
                              {columnItem.menuItems[1].title}
                            </div>
                          </a>
                        )}
                    </>
                  ) : (
                    <>
                      {/* Column Header */}
                      {columnItem.label && (
                        <div
                          className="mb-4"
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            paddingLeft:
                              navItem === "Products" ? "0.75rem" : "0.75rem",
                            marginBottom:
                              navItem === "Products" ? "1rem" : "1rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {columnItem.label}
                        </div>
                      )}

                      {/* Menu Items */}
                      <div
                        className="space-y-2.5"
                        style={{
                          paddingLeft: navItem === "Products" ? "0.75rem" : "0",
                        }}
                      >
                        {(columnItem.menuItems || []).map((menuItem, index) => (
                          <a
                            key={index}
                            href={menuItem.href || "#"}
                            className="link-item block"
                            style={{
                              display: "block",
                              padding:
                                navItem === "Products"
                                  ? "0.5rem 0"
                                  : "0.5rem 0.75rem",
                              color: "#1f1f1f",
                              transition: "color .3s ease 0s",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#059bd1";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#1f1f1f";
                            }}
                          >
                            {/* Content */}
                            <div className="item-content">
                              <div
                                className="item-title"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                  fontSize: "15px",
                                  lineHeight:
                                    navItem === "Products" ? "1.8" : "1.6",
                                  fontWeight: 500,
                                  color: "inherit",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {menuItem.title}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;

