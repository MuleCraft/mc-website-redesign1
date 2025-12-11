import { useEffect, useRef, useState } from "react";
import VerticalLine from "./VerticalLine";
import {
  MuleSoftLPPreview,
  SnapMapperPreview,
  RAMLifyPreview,
  AnypointLPPreview,
  CloudHubMigrationPreview,
  GoosePreview,
} from "./ProductPreviews1";

const ProductSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const products = [
    {
      eyebrow: "MuleSoft",
      title: "MuleSoftLP",
      description: "AI-Powered Integration Learning platform that transforms how you learn and master MuleSoft integration.",
      buttonText: "Explore MuleSoftLP",
      href: "https://MuleSoft.dev/",
      preview: <MuleSoftLPPreview />,
    },
    {
      eyebrow: "SnapLogic",
      title: "SnapMapper",
      description: "Visual data mapping and transformation tool that simplifies complex data integration workflows.",
      buttonText: "Explore SnapMapper",
      href: "https://snaplogic.playground.mulecraft.in/",
      preview: <SnapMapperPreview />,
    },
    {
      eyebrow: "RAML",
      title: "RAMLify Flow Agent",
      description: "API design and flow automation agent that accelerates API development and integration.",
      buttonText: "Explore RAMLify",
      href: "https://ramlify-flow-agent.lovable.app/",
      preview: <RAMLifyPreview />,
    },
    {
      eyebrow: "MuleSoft",
      title: "AnypointLP",
      description: "Complete API lifecycle management platform for designing, deploying, and managing APIs.",
      buttonText: "Explore AnypointLP",
      href: "https://anypointlp-secondary.lovable.app/",
      preview: <AnypointLPPreview />,
    },
    {
      eyebrow: "Migration",
      title: "CloudHub 2.0 Migration",
      description: "Migrate to CloudHub 2.0 with confidence using automated migration tools and best practices.",
      buttonText: "Explore Migration",
      href: "https://mule-migration-nexus.lovable.app/",
      preview: <CloudHubMigrationPreview />,
    },
    {
      eyebrow: "DevOps",
      title: "Goose",
      description: "Deploy, Scale, Dominate. The ultimate DevOps platform that transforms how you build and deploy applications.",
      buttonText: "Explore Goose",
      href: "https://goosed.in/",
      preview: <GoosePreview />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which item should be active based on scroll position
      const itemHeight = sectionHeight / products.length;
      const scrollProgress = (scrollY - sectionTop + windowHeight * 0.5) / itemHeight;
      const newIndex = Math.max(0, Math.min(products.length - 1, Math.floor(scrollProgress)));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }

      // Update transform for each item
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const distance = Math.abs(index - activeIndex);
        const scale = distance === 0 ? 1 : 0.9;
        const translateY = distance === 0 ? 0 : 16;

        item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, products.length]);

  return (
    <section ref={sectionRef} className="lock-screen-section w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="lss-heading sec-heading text-center mb-12 md:mb-16 -mt-4 md:-mt-6">
          <VerticalLine />
          <h2
            className="h2 mb-4 md:mb-6"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '40px',
              color: 'rgb(31, 31, 31)',
            }}
          >
            How the Product works
          </h2>
          <div className="main-subheading max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: '"Noto Sans", sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgb(31, 31, 31)',
              }}
            >
              Explore our comprehensive suite of designing, data transformation, and automation products—built to streamline workflows, accelerate development, and transform how you build, deploy, and scale applications.
            </p>
          </div>
        </div>

        {/* Content Row */}
        <div className="lss-row row">
          <div 
            className="lss-content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              position: 'relative',
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="lss-content-item"
                data-target={`#locktab${index + 1}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1px solid #e5e5e5',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px #00000026',
                  position: 'sticky',
                  top: '120px',
                  background: '#fff',
                  transform: index === activeIndex ? 'scale(1)' : 'scale(0.9) translateY(16px)',
                  transition: 'transform 0.3s ease-out',
                  transformOrigin: 'center top',
                  imageRendering: 'auto' as const,
                  height: '421px',
                }}
              >
                {/* Content Section */}
                <div className="lss-content" style={{ gridColumn: 'span 2', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="lss-content-inner">
                    <span
                      className="eyebrow-text"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#11b981',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '1rem',
                      }}
                    >
                      {product.eyebrow}
                    </span>
                    <h2
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '36px',
                        lineHeight: '44px',
                        color: 'rgb(31, 31, 31)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {product.title}
                    </h2>
                    <div className="lss-desc mb-6">
                      <p
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(112, 112, 112)',
                          marginBottom: '2rem',
                        }}
                      >
                        {product.description}
                      </p>
                    </div>
                    <a
                      className="btn-link inline-flex items-center gap-2 w-fit group"
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#11b981',
                        textDecoration: 'none',
                        fontFamily: '"Noto Sans", sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {product.buttonText}
                      <svg
                        className="hover-arrow"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        style={{
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <path
                          className="hover-arrow-line"
                          d="M5 17H24.5863L25.5 16.0001L24.5863 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8947 4.73478 17 5 17Z"
                          fill="#11B981"
                        />
                        <path
                          className="hover-arrow-tip"
                          d="M18.7081 25.708L27.7081 16.708C27.8011 16.6151 27.8748 16.5048 27.9252 16.3834C27.9755 16.262 28.0014 16.1319 28.0014 16.0005C28.0014 15.8691 27.9755 15.739 27.9252 15.6176C27.8748 15.4962 27.8011 15.3859 27.7081 15.293L18.7081 6.29306C18.5205 6.10542 18.266 6 18.0006 6C17.7352 6 17.4807 6.10542 17.2931 6.29306C17.1055 6.4807 17 6.73519 17 7.00056C17 7.26592 17.1055 7.52042 17.2931 7.70806L24.5869 15.0005L25.5006 16.0006L24.5869 17.0005L17.2931 24.293C17.1055 24.4806 17 24.7351 17 25.0005C17 25.2659 17.1055 25.5205 17.2931 25.708C17.4807 25.8956 17.7352 26.0012 18.0006 26.0012C18.266 26.0012 18.5205 25.8956 18.7081 25.708Z"
                          fill="#11B981"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="lss-responsive" style={{ gridColumn: 'span 3', height: '100%', overflow: 'hidden', padding: '1.5rem' }}>
                  <div className="video-block" style={{ width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                    {product.preview}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover effect styles */}
      <style>{`
        .btn-link:hover .hover-arrow {
          transform: translateX(4px);
        }
        .btn-link:hover {
          opacity: 0.8;
        }
        @media (max-width: 991px) {
          .lock-screen-section .lss-content-item {
            display: flex !important;
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .lss-content {
            grid-column: span 1 !important;
          }
          .lss-responsive {
            grid-column: span 1 !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductSection;

