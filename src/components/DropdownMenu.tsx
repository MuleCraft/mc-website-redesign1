import { useState, useEffect } from "react";
import csi4Image from "@/assets/csi4.png";
import blogImage from "@/assets/blog.jpg";
import trainingImage from "@/assets/training.png";

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

  // Initialize selected header for Solutions dropdown
  useEffect(() => {
    if (navItem === "Solutions" && items.length > 0) {
      const defaultSelected = items.find(item => item.isSelected) || items[0];
      setSelectedHeader(defaultSelected.label);
    }
  }, [navItem, items]);

  if (!isOpen) return null;

  // Special layout for Solutions dropdown
  if (navItem === "Solutions") {
    const selectedItem = items.find(item => item.label === selectedHeader) || items[0];
    const menuItems = selectedItem?.menuItems || [];
    
    // Split menuItems into two columns
    const midPoint = Math.ceil(menuItems.length / 2);
    const leftColumnItems = menuItems.slice(0, midPoint);
    const rightColumnItems = menuItems.slice(midPoint);

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
            <div className="flex flex-col relative" style={{ width: "25%", minWidth: "180px" }}>
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
                    onClick={() => setSelectedHeader(item.label)}
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      backgroundColor: selectedHeader === item.label ? "#f3f4f6" : "transparent",
                      color: selectedHeader === item.label ? "#2563eb" : "#1f1f1f",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "15px",
                      fontWeight: selectedHeader === item.label ? 600 : 500,
                      transition: "all 0.2s ease",
                      borderRadius: "6px",
                      marginBottom: "0.25rem",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedHeader !== item.label) {
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedHeader !== item.label) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
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
                          e.currentTarget.style.color = "#2563eb";
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

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div
                  className="flex-1 overflow-y-auto flex flex-col"
                  style={{
                    padding: "1.25rem 1.25rem",
                    fontFamily: '"Noto Sans", sans-serif',
                    maxHeight: "100%",
                  }}
                >
                  <div className="space-y-2.5">
                    {rightColumnItems.map((menuItem, index) => (
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
                          e.currentTarget.style.color = "#2563eb";
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
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
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
            </div>
          </div>
        </div>
      </>
    );
  }

  // Special layout for Resources dropdown
  if (navItem === "Resources") {
    const blogItem = items.find(item => item.label === "Blog");
    const trainingItem = items.find(item => item.label === "Training");
    const blogMenuItem = blogItem?.menuItems?.[0];
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
          opacity: 1,
          transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
          marginTop: "12px",
          overflow: "hidden",
        }}
      >
        <div className="flex w-full" style={{ minHeight: "auto" }}>
            {/* Blog Column */}
            <div className="flex-1 flex flex-col relative">
              {/* Separator */}
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
                {/* Column Header */}
                <div
                  className="mb-4"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    paddingLeft: "0.75rem",
                  }}
                >
                  BLOG
                </div>
                {blogMenuItem && (
                  <a
                    href={blogMenuItem.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={blogImage}
                      alt={blogMenuItem.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        objectFit: "cover",
                        marginBottom: "0.75rem",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "16px",
                        lineHeight: "1.5",
                        color: "#1f1f1f",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {blogMenuItem.title}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "13px",
                        lineHeight: "1.6",
                        color: "#6b7280",
                      }}
                    >
                      {blogMenuItem.description}
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Training Column */}
            <div className="flex-1 flex flex-col relative">
              <div
                className="flex-1 overflow-y-auto flex flex-col"
                style={{
                  padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                {/* Column Header */}
                <div
                  className="mb-4"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    paddingLeft: "0.75rem",
                  }}
                >
                  TRAINING
                </div>
                {trainingMenuItem && (
                  <a
                    href={trainingMenuItem.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={trainingImage}
                      alt={trainingMenuItem.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        objectFit: "cover",
                        marginBottom: "0.75rem",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "16px",
                        lineHeight: "1.5",
                        color: "#1f1f1f",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {trainingMenuItem.title}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: "13px",
                        lineHeight: "1.6",
                        color: "#6b7280",
                      }}
                    >
                      {trainingMenuItem.description}
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
            const isOtherProducts = navItem === "Products" && columnItem.label === "OTHER PRODUCTS";
            
            return (
              <div key={columnIndex} className="flex-1 flex flex-col relative" style={{ overflow: "hidden" }}>
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
                    padding: navItem === "Products" ? "1.5rem 1.25rem" : "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                  {/* Special layout for OTHER PRODUCTS in Products dropdown */}
                  {isOtherProducts ? (
                    <>
                      {/* Upper row - Image with description */}
                      <div style={{ marginLeft: "0.75rem", marginRight: "0.75rem", marginBottom: "0.75rem" }}>
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
                            The ultimate DevOps platform that transforms how you build, deploy, and scale applications.
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
                      {columnItem.menuItems && columnItem.menuItems.length > 0 && (
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
                              e.currentTarget.style.color = "#2563eb";
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
                      {columnItem.menuItems && columnItem.menuItems.length > 1 && (
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
                            e.currentTarget.style.color = "#2563eb";
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
                            paddingLeft: navItem === "Products" ? "0.75rem" : "0.75rem",
                            marginBottom: navItem === "Products" ? "1rem" : "1rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {columnItem.label}
                        </div>
                      )}

                      {/* Menu Items */}
                      <div className="space-y-2.5" style={{ paddingLeft: navItem === "Products" ? "0.75rem" : "0" }}>
                        {(columnItem.menuItems || []).map((menuItem, index) => (
                        <a
                          key={index}
                          href={menuItem.href || "#"}
                            className="link-item block"
                          style={{
                              display: "block",
                              padding: navItem === "Products" ? "0.5rem 0" : "0.5rem 0.75rem",
                            color: "#1f1f1f",
                              transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#2563eb";
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
                                  lineHeight: navItem === "Products" ? "1.8" : "1.6",
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
