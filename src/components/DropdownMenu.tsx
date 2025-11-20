import { useState, useEffect } from "react";
import csi1Image from "@/assets/csi1.png";
import csi2Image from "@/assets/csi2.png";
import csi3Image from "@/assets/csi3.png";
import csi4Image from "@/assets/csi4.png";
import csi6Image from "@/assets/csi6.png";
import csi7Image from "@/assets/csi7.png";
import csi8Image from "@/assets/csi8.png";
import csi9Image from "@/assets/csi9.png";
import muImage from "@/assets/mu-image.webp";
import mulesoftPartnerImage from "@/assets/mulesoft-partner.webp";
import trainingImage from "@/assets/training.png";
import blogImage from "@/assets/blog.jpg";
import blog1Image from "@/assets/blog1.png";
import blog2Image from "@/assets/blog2.png";
import blog3Image from "@/assets/blog3.png";
import si1Image from "@/assets/si1.png";
import si2Image from "@/assets/si2.png";
import si3Image from "@/assets/si3.png";
import si4Image from "@/assets/si4.png";
import si5Image from "@/assets/si5.png";
import si6Image from "@/assets/si6.png";
import cs1Image from "@/assets/cs1.jpg";
import cs2Image from "@/assets/cs2.jpg";
import cs3Image from "@/assets/cs3.jpg";
import cs4Image from "@/assets/cs4.jpg";

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
    if ((navItem === "Solutions" || navItem === "Products" || navItem === "Case Studies" || navItem === "Resources") && items.length > 0) {
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
        title: "MuleSoft Migration & Integration",
        description: "API-led connectivity & Mule 3 to Mule 4 migration",
        href: "https://docs.MuleSoft.com/mule-runtime/latest/migration-intro",
      },
      "SnapLogic": {
        image: si2Image,
        title: "SnapLogic Data Orchestration",
        description: "Data integration and automation platform",
        href: "https://www.snaplogic.com/glossary/orchestration",
      },
      "Salesforce": {
        image: si3Image,
        title: "Salesforce Integration Hub",
        description: "CRM integration with custom workflows & data sync",
        href: "https://www.salesforce.com/crm/",
      },
      "n8n": {
        image: si4Image,
        title: "n8n Workflow Automation",
        description: "Fair-code automation platform for technical teams",
        href: "https://n8n.io/?ps_partner_key=YzQ1MWQxYjZjNDgx&ps_xid=EfWcuhfPTQdyZC&gsxid=EfWcuhfPTQdyZC&gspk=YzQ1MWQxYjZjNDgx&gad_source=1&gad_campaignid=23207748368&gbraid=0AAAABB6E8Q-exN_bvdLbThczUc4o90juR&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g7Xw_SA94G7Y6eRaMUci_FnneMb7ZpWLrpEwldb1WTlubi8nf5ha9xoC5_EQAvD_BwE",
      },
      "Workato": {
        image: si5Image,
        title: "Workato Chatbot Automation",
        description: "Enterprise automation with intelligent chatbots",
        href: "https://www.workato.com/the-connector/chatbot-automation/",
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
                          ? "#e0f2f9"
                          : "transparent",
                      color:
                        selectedHeader === item.label ? "#059bd1" : "#1f1f1f",
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
                          e.currentTarget.style.color = "#059bd1";
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
                            objectFit: (selectedHeader === "n8n" || selectedHeader === "Digibee") ? "fill" : "cover",
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
        title: "Building a CI/CD Pipeline to Deploy Mule Applications",
        description: "Learn how to automate deployment of Mule applications in CloudHub 2.0 with custom notifications and CI/CD best practices.",
        href: "https://blogs.mulecraft.in/building-a-ci-cd-pipeline-to-deploy-mule-applications-in-cloudhub-2-0-with-custom-notifications/",
      },
      {
        image: blog2Image,
        title: "Integrating Google BigQuery with MuleSoft",
        description: "Discover how to seamlessly integrate Google BigQuery with MuleSoft for powerful data analytics and business intelligence.",
        href: "https://blogs.mulecraft.in/integrating-google-bigquery-with-mulesoft-for-seamless-data-analytics/",
      },
      {
        image: blog3Image,
        title: "Power of APIs with Anypoint",
        description: "Unlock the full potential of APIs using MuleSoft Anypoint Platform for modern integration solutions.",
        href: "https://blogs.mulecraft.in/unlocking-the-power-of-apis-with-anypoint-platform/",
      },
      {
        image: blogImage,
        title: "Understanding GraphQL Basics",
        description: "Explore GraphQL fundamentals and learn how this modern query language revolutionizes API development.",
        href: "https://blogs.mulecraft.in/understanding-the-basics-of-graphql/",
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
            width: "60%",
            maxWidth: "750px",
            height: "340px",
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
                          ? "#e0f2f9"
                          : "transparent",
                      color:
                        selectedHeader === item.label ? "#059bd1" : "#1f1f1f",
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
                  }}
                >
                  {blogCards.slice(0, 2).map((card, index) => (
                    <a
                      key={index}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        overflow: "hidden",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      {/* Image Container */}
                      <div
                        style={{
                          width: "100%",
                          height: "120px",
                          overflow: "hidden",
                          backgroundColor: "#ffffff",
                          position: "relative",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                          }}
                        />
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
                    padding: "1.25rem",
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
                        paddingRight: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      {/* Training Content Items - Only 3 items */}
                      <a
                        href="https://training.mulecraft.in/courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          textDecoration: "none",
                          color: "inherit",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#059bd1";
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
                          padding: "0.75rem",
                          borderRadius: "6px",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#059bd1";
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
                          padding: "0.75rem",
                          borderRadius: "6px",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#059bd1";
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
                          cursor: "pointer",
                          borderRadius: "8px",
                          border: "1px solid #d1d5db",
                          overflow: "hidden",
                          backgroundColor: "#ffffff",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                          if (img) {
                            img.style.transform = "scale(1.1)";
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
                        {/* Image Container */}
                        <div
                          style={{
                            width: "100%",
                            height: "120px",
                            overflow: "hidden",
                            backgroundColor: "#ffffff",
                            position: "relative",
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

  // Special layout for Products dropdown - modern grid without sidebar
  if (navItem === "Products") {
    const imageMap: { [key: string]: string } = {
      "csi1.png": csi1Image,
      "csi2.png": csi2Image,
      "csi3.png": csi3Image,
      "csi4.png": csi4Image,
      "csi6.png": csi6Image,
      "csi7.png": csi7Image,
      "csi8.png": csi8Image,
      "csi9.png": csi9Image,
      "mu-image.webp": muImage,
      "MuleSoft-partner.webp": mulesoftPartnerImage,
      "training.png": trainingImage,
    };

    // Collect all products from all categories
    const allProducts: MenuGridItem[] = [];
    items.forEach((category) => {
      if (category.menuItems) {
        allProducts.push(...category.menuItems);
      }
    });

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
            width: "56%",
            maxWidth: "720px",
            opacity: 1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
            marginTop: "12px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "1.25rem 1.5rem" }}>
            {/* Product Cards Grid - 3 columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.875rem",
                fontFamily: '"Noto Sans", sans-serif',
              }}
            >
              {allProducts.map((product, index) => (
                <a
                  key={index}
                  href={product.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#fff",
                    position: "relative",
                    height: "125px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.borderColor = "#059bd1";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      (img as HTMLElement).style.transform = "scale(1.15)";
                    }
                    const overlay = e.currentTarget.querySelector(".image-overlay");
                    if (overlay) {
                      (overlay as HTMLElement).style.opacity = "0.3";
                    }
                    const title = e.currentTarget.querySelector(`.card-title-${index}`);
                    if (title) {
                      (title as HTMLElement).style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      (img as HTMLElement).style.transform = "scale(1)";
                    }
                    const overlay = e.currentTarget.querySelector(".image-overlay");
                    if (overlay) {
                      (overlay as HTMLElement).style.opacity = "0";
                    }
                    const title = e.currentTarget.querySelector(`.card-title-${index}`);
                    if (title) {
                      (title as HTMLElement).style.opacity = "0";
                    }
                  }}
                >
                  {/* Product Image - Full Card */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      backgroundColor: "#f9fafb",
                    }}
                  >
                    <img
                      src={imageMap[product.image || "csi1.png"] || csi1Image}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="image-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#000",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Title overlay - appears on hover */}
                    <div
                      className={`card-title-${index}`}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 10,
                        padding: "0 0.75rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {product.title}
                    </div>
                  </div>
                </a>
              ))}
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
    const caseStudyImages: { [key: string]: { image: string; href?: string } } = {
      "HR Management": {
        image: cs1Image,
        href: "#",
      },
      "Healthcare Solutions": {
        image: cs2Image,
        href: "#",
      },
      "Digital Transformation": {
        image: cs3Image,
        href: "#",
      },
      "Automation & Platforms": {
        image: cs4Image,
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
                      color: selectedHeader === item.label ? "#059bd1" : "#1f1f1f",
                      backgroundColor:
                        selectedHeader === item.label ? "#e0f2f9" : "transparent",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "inherit",
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                    height: "100%",
                    padding: "1rem",
                  }}
                >
                  {/* Image Only - No Title/Description */}
                  <img
                    src={selectedImageCard.image}
                    alt="Case Study"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
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
                                e.currentTarget.style.color = "#059bd1";
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
                              e.currentTarget.style.color = "#059bd1";
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

