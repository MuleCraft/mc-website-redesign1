import { useState, useEffect } from "react";
import {
  ChevronRight,
  Circle,
  Eye,
  DollarSign,
  Shield,
  Lightbulb,
  Box,
  RefreshCw,
  Network,
  Link2,
  Code,
  Monitor,
  Sparkles,
  Workflow,
  Layers,
  Package,
  Zap,
  BarChart,
  Users,
  Gauge,
  Lock,
  Book,
  ChartBar,
  BookOpen,
  MessageCircle,
  RefreshCcw,
  CheckCircle,
  Settings,
  GitBranch,
  Cloud,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";
import muImage from "@/assets/mu-image.webp";
import csi4Image from "@/assets/csi4.png";
import csi3Image from "@/assets/csi3.png";
import csi1Image from "@/assets/csi1.png";
import playIcon from "@/assets/play.svg";

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
}

interface DropdownMenuProps {
  items: DropdownItem[];
  menuItems?: MenuGridItem[];
  isOpen: boolean;
  onClose: () => void;
  navbarHeight?: number;
  contentType?: "grid" | "list";
  navItem?: string;
}

const DropdownMenu = ({
  items,
  menuItems,
  isOpen,
  onClose,
  navbarHeight = 80,
  navItem,
}: DropdownMenuProps) => {
  if (!isOpen) return null;

  // Find the initially selected item or default to first item
  const getInitialSelectedIndex = () => {
    const foundIndex = items.findIndex((item) => item.isSelected);
    return foundIndex >= 0 ? foundIndex : 0;
  };

  const [selectedIndex, setSelectedIndex] = useState(getInitialSelectedIndex);
  const selectedItem = items[selectedIndex];

  // Reset selected index when items change
  useEffect(() => {
    setSelectedIndex(getInitialSelectedIndex());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items.map((i) => i.label))]);

  // Get featured post data based on selected header
  const getFeaturedPostData = () => {
    if (navItem === "Products") {
      const label = selectedItem?.label?.toUpperCase() || "";
      
      if (label === "RECENTLY LAUNCHED") {
        return {
          image: csi4Image,
          title: "GOOSE | Deploy, Scale, Dominate",
          description: "The ultimate DevOps platform that transforms how you build, deploy, and scale applications. Zero complexity, maximum impact.",
          tag: "GOOSED"
        };
      } else if (label === "MULESOFT") {
        return {
          image: csi3Image,
          title: "MuleSoft Products",
          description: "A learning and integration platform offering AI-powered task generation, transformation playground, and RAML assistant modules with progress tracking.",
          tag: "MuleSoft"
        };
      } else if (label === "OTHER PRODUCTS") {
        return {
          image: csi1Image,
          title: "Other Products",
          description: "A SnapLogic playground providing a safe three-panel interface for testing and validating integration scripts with features like import/export, guided workflows, and real-time error handling.",
          tag: "Products"
        };
      }
      
      // Default for Products
      return {
        image: csi4Image,
        title: "GOOSE | Deploy, Scale, Dominate",
        description: "The ultimate DevOps platform that transforms how you build, deploy, and scale applications. Zero complexity, maximum impact.",
        tag: "GOOSED"
      };
    }
    
    if (navItem !== "Solutions") {
      return {
        image: muImage,
        title: "MuleSoft Anypoint Platform | Integration & API Management",
        description: "Connect applications, data, and devices with API-led connectivity and automation solutions.",
        tag: "Integration Solutions"
      };
    }

    const label = selectedItem?.label?.toLowerCase() || "";
    
    const featuredData: { [key: string]: { image: string; title: string; description: string; tag: string } } = {
      "mulesoft": {
        image: muImage,
        title: "MuleSoft Anypoint Platform | Integration & API Management",
        description: "Connect applications, data, and devices with API-led connectivity and automation solutions.",
        tag: "Integration Solutions"
      },
      "snaplogic": {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=467&fit=crop&q=80",
        title: "SnapLogic | AI-Powered Integration Platform",
        description: "Transform your business with intelligent, AI-driven integration and automation solutions.",
        tag: "AI Integration"
      },
      "salesforce": {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=467&fit=crop&q=80",
        title: "Salesforce Integration & Automation",
        description: "Seamlessly connect Salesforce with your entire tech stack for unified customer experiences.",
        tag: "CRM Integration"
      },
      "apigee": {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=467&fit=crop&q=80",
        title: "Apigee API Management Platform",
        description: "Design, secure, and manage APIs with enterprise-grade security and scalability.",
        tag: "API Management"
      },
      "workato": {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=467&fit=crop&q=80",
        title: "Workato | Enterprise Automation Platform",
        description: "Automate workflows and integrate applications with intelligent recipe-based automation.",
        tag: "Automation"
      },
      "digibee": {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=467&fit=crop&q=80",
        title: "Digibee | Microservices Integration Platform",
        description: "Build and orchestrate microservices with agile lifecycle management and cloud-native architecture.",
        tag: "Microservices"
      }
    };

    return featuredData[label] || {
      image: muImage,
      title: "MuleSoft Anypoint Platform | Integration & API Management",
      description: "Connect applications, data, and devices with API-led connectivity and automation solutions.",
      tag: "Integration Solutions"
    };
  };

  const featuredPostData = getFeaturedPostData();

  // Get menu items - use selectedItem's menuItems if available, otherwise use passed menuItems, otherwise default
  const displayMenuItems: MenuGridItem[] = selectedItem?.menuItems ||
    menuItems || [
      {
        title: "Boomi Enterprise Platform",
        description: "The one platform for AI-driven automation",
        icon: "platform",
      },
      {
        title: "Why Boomi",
        description: "See why 25,000+ customers choose Boomi",
        icon: "eye",
      },
      {
        title: "Pricing",
        description: "Flexible pricing for SMBs to enterprise",
        icon: "dollar",
      },
      {
        title: "Security & Compliance",
        description: "Ensure regulatory and industry standards",
        icon: "shield",
      },
      {
        title: "Innovation",
        description: "How we're reshaping the future of integration",
        icon: "lightbulb",
      },
      {
        title: "Boomi Embedded",
        description: "Integrate capabilities into your own solutions",
        icon: "box",
      },
    ];

  // Icon component renderer
  const renderIcon = (iconName?: string) => {
    const iconSize = 24;
    const iconClass = "flex-shrink-0";
    const iconColor = "#204066";

    switch (iconName) {
      case "platform":
        return (
          <Circle
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "eye":
        return (
          <Eye
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "dollar":
        return (
          <DollarSign
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "shield":
        return (
          <Shield
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "lightbulb":
        return (
          <Lightbulb
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "box":
        return (
          <Box
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "refresh":
        return (
          <RefreshCw
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "network":
        return (
          <Network
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "link":
        return (
          <Link2
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "code":
        return (
          <Code
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "monitor":
        return (
          <Monitor
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "sparkles":
        return (
          <Sparkles
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "workflow":
        return (
          <Workflow
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "layers":
        return (
          <Layers
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "sync":
        return (
          <RefreshCw
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "package":
        return (
          <Package
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "zap":
        return (
          <Zap
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "bar-chart":
        return (
          <BarChart
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "users":
        return (
          <Users
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "gauge":
        return (
          <Gauge
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "lock":
        return (
          <Lock
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "book":
        return (
          <Book
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "chart":
        return (
          <ChartBar
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "book-open":
        return (
          <BookOpen
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "message-circle":
        return (
          <MessageCircle
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "refresh-cw":
        return (
          <RefreshCcw
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "check-circle":
        return (
          <CheckCircle
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "settings":
        return (
          <Settings
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "git-branch":
        return (
          <GitBranch
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "cloud":
        return (
          <Cloud
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      case "headphones":
        return (
          <Headphones
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
      default:
        return (
          <Circle
            className={iconClass}
            size={iconSize}
            style={{ color: iconColor }}
          />
        );
    }
  };

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        style={{ top: `${navbarHeight}px` }}
      />

      {/* Full-width Dropdown Menu */}
      <div
        data-dropdown-menu
        className="fixed left-0 right-0 z-50 bg-white shadow-2xl"
        style={{
          top: `${navbarHeight}px`,
          height: "500px",
        }}
      >
        <div className="flex h-full w-full">
          {/* Left Sidebar - Dark Blue (27% width) */}
          <div
            className="text-white w-[26%] flex-shrink-0 flex flex-col"
            style={{ backgroundColor: "#072b55" }}
          >
            <div
              className="flex-1 overflow-y-auto"
              style={{
                padding: "1.5rem 1.5rem 1.5rem 13rem",
                fontFamily: '"Noto Sans", sans-serif',
              }}
            >
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(index)}
                    className={cn(
                      "relative flex items-center justify-between cursor-pointer transition-colors",
                      "hover:bg-[#204066]",
                      selectedIndex === index && "bg-[#204066]"
                    )}
                    style={{
                      padding: "0.5rem 0 0.5rem 1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {/* Selected indicator bar */}
                    {selectedIndex === index && (
                      <div 
                        className="absolute left-0 rounded-r" 
                        style={{
                          top: '0.5rem',
                          bottom: '0.5rem',
                          width: '3px',
                          backgroundColor: '#2d5a8a'
                        }}
                      />
                    )}

                    {/* Item label */}
                    <span
                      className="flex-1 font-medium"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#ffffff",
                        paddingLeft: selectedIndex === index ? "0.5rem" : "0",
                      }}
                    >
                      {item.label}
                    </span>

                    {/* Right arrow icon */}
                    <ChevronRight
                      className="w-4 h-4 flex-shrink-0 text-white"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content Area (73% width) */}
          <div className="w-[73%] flex flex-col">
            {/* Top White Section (80% height) */}
            <div className="flex-1 bg-white overflow-y-auto">
              <div
                className="h-full"
                style={{
                  padding: "1.5rem 3rem 1.5rem 1.5rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {/* Products view - Grid format with featured card */}
                {navItem === "Products" ? (
                  <div className="flex gap-6 h-full">
                    {/* Main Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                      {displayMenuItems.map((menuItem, index) => (
                        <a
                          key={index}
                          href={menuItem.href || "#"}
                          className="link-item hover:bg-gray-50"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            borderRadius: "6px",
                            height: "fit-content",
                            padding: "8px",
                            color: "#1f1f1f",
                            transition: "background-color .3s ease 0s, color .3s ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          {/* Icon */}
                          <div 
                            className="item-icon" 
                            style={{
                              border: "1px solid #cccccc",
                              width: "44px",
                              height: "44px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "6px",
                              flexShrink: 0,
                              background: "#fff",
                            }}
                          >
                            {menuItem.icon ? renderIcon(menuItem.icon) : renderIcon("box")}
                          </div>

                          {/* Content */}
                          <div className="item-content flex-1">
                            <div
                              className="item-title"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                display: "flex",
                                alignItems: "center",
                                fontSize: "16px",
                                lineHeight: "150%",
                                letterSpacing: "-.32px",
                                color: "#333",
                                marginBottom: "0.25rem",
                              }}
                            >
                              {menuItem.title}
                            </div>
                            <div
                              className="item-description"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                color: "#707070",
                                fontSize: "12px",
                                lineHeight: "1.5",
                              }}
                            >
                              {menuItem.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Sidebar - Featured Post */}
                    <div className="w-80 flex-shrink-0">
                      <div 
                        className="featured-post"
                        style={{ height: "100%" }}
                      >
                        <div 
                          className="rc-item"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                            overflow: "hidden",
                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <a href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                            <div className="rc-img" style={{ width: "100%", overflow: "hidden" }}>
                              <img
                                src={featuredPostData.image}
                                alt={featuredPostData.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="rc-content" style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                              <div className="rc-tag">
                                <span 
                                  className="post-type"
                                  style={{
                                    display: "inline-block",
                                    padding: "0.25rem 0.5rem",
                                    marginBottom: "0.5rem",
                                    borderRadius: "9999px",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    backgroundColor: "#e0e7ff",
                                    color: "#204066",
                                    fontFamily: '"Noto Sans", sans-serif',
                                  }}
                                >
                                  {featuredPostData.tag}
                                </span>
                              </div>
                              <div className="rc-desc">
                                <h2 
                                  className="rc-title"
                                  style={{
                                    fontFamily: '"Noto Sans", sans-serif',
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "0.5rem",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {featuredPostData.title}
                                </h2>
                                <p 
                                  className="rc-summary show-rc-description"
                                  style={{
                                    fontFamily: '"Noto Sans", sans-serif',
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                    color: "#707070",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {featuredPostData.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Grid view for other menus (Solutions) */
                  <div className="flex gap-6 h-full">
                    {/* Main Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                      {displayMenuItems.map((menuItem, index) => (
                        <a
                          key={index}
                          href={menuItem.href || "#"}
                          className="link-item hover:bg-gray-50"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            borderRadius: "6px",
                            height: "fit-content",
                            padding: "8px",
                            color: "#1f1f1f",
                            transition: "background-color .3s ease 0s, color .3s ease 0s",
                            textDecoration: "none",
                          }}
                        >
                          {/* Icon */}
                          <div 
                            className="item-icon" 
                            style={{
                              border: "1px solid #cccccc",
                              width: "44px",
                              height: "44px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "6px",
                              flexShrink: 0,
                              background: "#fff",
                            }}
                          >
                            {renderIcon(menuItem.icon)}
                          </div>

                          {/* Content */}
                          <div className="item-content flex-1">
                            <div
                              className="item-title"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                display: "flex",
                                alignItems: "center",
                                fontSize: "16px",
                                lineHeight: "150%",
                                letterSpacing: "-.32px",
                                color: "#333",
                                marginBottom: "0.25rem",
                              }}
                            >
                              {menuItem.title}
                            </div>
                            <div
                              className="item-description"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                color: "#707070",
                                fontSize: "12px",
                                lineHeight: "1.5",
                              }}
                            >
                              {menuItem.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Sidebar - Featured Post for Solutions */}
                    <div className="w-80 flex-shrink-0">
                      <div 
                        className="featured-post"
                        style={{ height: "100%" }}
                      >
                        <div 
                          className="rc-item"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                            overflow: "hidden",
                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <a href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                            <div className="rc-img" style={{ width: "100%", overflow: "hidden" }}>
                              <img
                                src={featuredPostData.image}
                                alt={featuredPostData.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="rc-content" style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                              <div className="rc-tag">
                                <span 
                                  className="post-type"
                                  style={{
                                    display: "inline-block",
                                    padding: "0.25rem 0.5rem",
                                    marginBottom: "0.5rem",
                                    borderRadius: "9999px",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    backgroundColor: "#e0e7ff",
                                    color: "#204066",
                                    fontFamily: '"Noto Sans", sans-serif',
                                  }}
                                >
                                  {featuredPostData.tag}
                                </span>
                              </div>
                              <div className="rc-desc">
                                <h2 
                                  className="rc-title"
                                  style={{
                                    fontFamily: '"Noto Sans", sans-serif',
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "0.5rem",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {featuredPostData.title}
                                </h2>
                                <p 
                                  className="rc-summary show-rc-description"
                                  style={{
                                    fontFamily: '"Noto Sans", sans-serif',
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                    color: "#707070",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {featuredPostData.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section - Dark Blue (20% height) */}
            <div
              className="h-[20%] bg-[#204066] flex items-center"
              style={{ padding: "1.5rem 3rem 1.5rem 1.5rem" }}
            >
              <a
                href="#"
                className="quick-link"
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  alignItems: "center",
                  color: "#fff",
                  display: "flex",
                  textDecoration: "none",
                  transition: "color .3s, background-color .3s",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <div 
                  className="link-icon"
                  style={{
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    display: "flex",
                    height: "44px",
                    justifyContent: "center",
                    width: "44px",
                    marginRight: "8px",
                    flexShrink: 0,
                  }}
                >
                  <img 
                    src={playIcon} 
                    alt="Request a demo" 
                    loading="lazy"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <span 
                  className="link-title"
                  style={{ 
                    fontSize: "14px", 
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Request a demo
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
