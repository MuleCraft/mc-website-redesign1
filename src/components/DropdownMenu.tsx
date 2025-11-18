import { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
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
    const iconSize = 32;
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
          {/* Left Sidebar - Dark Blue (25% width) */}
          <div
            className="text-white w-1/4 flex-shrink-0 flex flex-col"
            style={{ backgroundColor: "#072b55" }}
          >
            <div
              className="flex-1 overflow-y-auto"
              style={{
                padding: "1.5rem 1.5rem 1.5rem 1rem",
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
                      "hover:bg-blue-900/40",
                      selectedIndex === index && "bg-blue-900/30"
                    )}
                    style={{
                      padding: "0.75rem 0",
                    }}
                  >
                    {/* Selected indicator bar */}
                    {selectedIndex === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r" />
                    )}

                    {/* Item label */}
                    <span
                      className="flex-1 text-sm font-medium text-white"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "14px",
                        lineHeight: "20px",
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

          {/* Right Content Area (75% width) */}
          <div className="w-3/4 flex flex-col">
            {/* Top White Section (80% height) */}
            <div className="flex-1 bg-white overflow-y-auto">
              <div
                className="h-full"
                style={{
                  padding: "1.5rem 3rem 1.5rem 1.5rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {/* Products view - List format with featured card */}
                {navItem === "Products" ? (
                  <div className="flex gap-6 h-full">
                    {/* Main List */}
                    <div className="flex-1">
                      <ul
                        className="space-y-2"
                        style={{ listStyle: "none", padding: 0, margin: 0 }}
                      >
                        {displayMenuItems.map((menuItem, index) => (
                          <li key={index}>
                            <a
                              href={menuItem.href || "#"}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              style={{ fontFamily: '"Noto Sans", sans-serif' }}
                            >
                              <div
                                className="font-semibold text-gray-900 mb-1 group-hover:text-[#204066] transition-colors"
                                style={{
                                  fontSize: "15px",
                                  lineHeight: "22px",
                                }}
                              >
                                {menuItem.title}
                              </div>
                              <div
                                className="text-gray-600"
                                style={{
                                  fontSize: "13px",
                                  lineHeight: "18px",
                                }}
                              >
                                {menuItem.description}
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sidebar - Featured Post */}
                    <div className="w-80 flex-shrink-0">
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                        {/* Featured post image */}
                        <div className="w-full h-48 relative overflow-hidden">
                          <img
                            src="https://boomi.com/wp-content/uploads/TN-forrester-tei-study-25.jpg"
                            alt="Forrester TEI Study"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                          {/* Gradient overlay with ROI text */}
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%)",
                            }}
                          >
                            <div className="text-center text-white px-4">
                              <div
                                className="text-5xl font-bold mb-2"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                }}
                              >
                                347% ROI
                              </div>
                              <div
                                className="text-sm opacity-90"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                }}
                              >
                                Boomi delivered 347% ROI—because thriving in the
                                AI era starts with real returns.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div
                            className="inline-block px-2 py-1 mb-2 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: "#e0e7ff",
                              color: "#204066",
                              fontFamily: '"Noto Sans", sans-serif',
                            }}
                          >
                            Analyst Report
                          </div>
                          <h3
                            className="font-semibold text-gray-900 mb-2"
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "14px",
                              lineHeight: "20px",
                            }}
                          >
                            Forrester | The Total Economic Impact™ Of The Boomi
                            Enterprise Platform
                          </h3>
                          <p
                            className="text-gray-600 text-sm"
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "12px",
                              lineHeight: "18px",
                            }}
                          >
                            Find out how the Boomi Enterprise Platform helps
                            organizations simplify and save, reduce risk, and
                            thrive in the AI era.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Grid view for other menus */
                  <div className="flex gap-6 h-full">
                    {/* Main Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                      {displayMenuItems.map((menuItem, index) => (
                        <a
                          key={index}
                          href={menuItem.href || "#"}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          {/* Icon */}
                          {renderIcon(menuItem.icon)}

                          {/* Content */}
                          <div className="flex-1">
                            <div
                              className="font-semibold text-gray-900 mb-1 group-hover:text-[#204066] transition-colors"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                fontSize: "15px",
                                lineHeight: "22px",
                              }}
                            >
                              {menuItem.title}
                            </div>
                            <div
                              className="text-gray-600"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                fontSize: "13px",
                                lineHeight: "18px",
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
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                        {/* Featured post image */}
                        <div className="w-full h-48 relative overflow-hidden">
                          <img
                            src="https://boomi.com/wp-content/uploads/TN-forrester-tei-study-25.jpg"
                            alt="Forrester TEI Study"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                          {/* Gradient overlay with ROI text */}
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%)",
                            }}
                          >
                            <div className="text-center text-white px-4">
                              <div
                                className="text-5xl font-bold mb-2"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                }}
                              >
                                347% ROI
                              </div>
                              <div
                                className="text-sm opacity-90"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                }}
                              >
                                Boomi delivered 347% ROI—because thriving in the
                                AI era starts with real returns.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div
                            className="inline-block px-2 py-1 mb-2 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: "#e0e7ff",
                              color: "#204066",
                              fontFamily: '"Noto Sans", sans-serif',
                            }}
                          >
                            Analyst Report
                          </div>
                          <h3
                            className="font-semibold text-gray-900 mb-2"
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "14px",
                              lineHeight: "20px",
                            }}
                          >
                            Forrester | The Total Economic Impact™ Of The Boomi
                            Enterprise Platform
                          </h3>
                          <p
                            className="text-gray-600 text-sm"
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "12px",
                              lineHeight: "18px",
                            }}
                          >
                            Find out how the Boomi Enterprise Platform helps
                            organizations simplify and save, reduce risk, and
                            thrive in the AI era.
                          </p>
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
              style={{ padding: "1.5rem" }}
            >
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Play className="w-4 h-4" fill="white" color="white" />
                </div>
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
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
