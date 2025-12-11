import { useState } from "react";
import VerticalLine from "./VerticalLine";
import blog1Image from "@/assets/blog-i.png";
import b6Image from "@/assets/b6.png";
import b1Image from "@/assets/b1.png";
import b2Image from "@/assets/b2.png";
import b3Image from "@/assets/b3.jpg";
import b4Image from "@/assets/b4.png";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
  url?: string;
}

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Seamless MuleSoft Upgrade",
      description: "Java 17, the latest Long-Term Support (LTS) release, introduces powerful advancements that can elevate your MuleSoft applications.",
      image: blog1Image,
      url: "https://blogs.mulecraft.in/seamless-mulesoft-upgrade-transitioning-from-java-8-to-java-17-for-rest-apis/",
    },
    {
      id: 2,
      title: "Mastering GitLab Operations via Command-Line with Mule",
      description: "Git serves as an essential DevOps tool for effectively managing source code. As a free and open-source version control system, Git efficiently handles projects ranging from small to extensive scales. Its primary function involves tracking modifications within source code, facilitating collaborative development among multiple contributors in a non-linear fashion.",
      image: b6Image,
      url: "https://blogs.mulecraft.in/mastering-gitlab-operations-via-command-line-with-mule/",
    },
    {
      id: 3,
      title: "Unlocking Efficiency with Salesforce Composite API",
      description: "If you're working with Salesforce, chances are you're dealing with a lot of records and performing multiple operations on them. Whether it's creating, updating, or deleting records, these tasks can become cumbersome when executed individually, especially when you need to handle multiple operations at once. This is where the Salesforce Composite API comes into play. In this blog post, we'll explore how the Composite API can streamline your operations, save API calls, and boost the efficiency of your Salesforce integrations.",
      image: b1Image,
      url: "https://blogs.mulecraft.in/unlocking-efficiency-with-salesforce-composite-api-2/",
    },
    {
      id: 4,
      title: "Expose External Data to Salesforce via OData in MuleSoft",
      description: "OData (Open Data Protocol) is a protocol that allows the creation and consumption of RESTful APIs. It is designed for querying and manipulating data through HTTP-based requests and simplifies this process with features like filtering, sorting, and paging.",
      image: b2Image,
      url: "https://blogs.mulecraft.in/expose-external-data-to-salesforce-via-odata-in-mulesoft/",
    },
    {
      id: 5,
      title: "X12 Write Operation – Generating EDI Files in MuleSoft",
      description: "In Part 1 of this blog series, we discussed what an EDI X12 file is and how to read it using the X12 Read Connector. Now, let us move to the next step—writing an X12 EDI file using MuleSoft.",
      image: b3Image,
      url: "https://blogs.mulecraft.in/untitled-3/",
    },
    {
      id: 6,
      title: "Implementing Kafka DLQ in Mule 4",
      description: "Kafka Dead Letter Queue (DLQ) is a specialized mechanism for handling messages that fail to process in a Kafka-based messaging system. With Mule 4's integration capabilities, implementing DLQ becomes seamless, enabling reliable message flows in distributed systems. This pattern ensures no data is lost, allowing reprocessing or detailed analysis of failed messages for continuous improvement. In this blog, we explore how Mule 4 enhances Kafka DLQ to build resilient, error-tolerant architectures.",
      image: b4Image,
      url: "https://blogs.mulecraft.in/implementing-kafka-dlq-in-mule-4/",
    },
  ];

  const slidesPerView = 3; // Always show 3 blogs at a time
  const maxIndex = Math.max(0, blogs.length - slidesPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="w-full pt-12 md:pt-16 pb-32 md:pb-40 bg-white mb-[5rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16 -mt-4 md:-mt-6">
          <VerticalLine />
          <h2
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '40px',
              color: 'rgb(31, 31, 31)',
              marginBottom: '2rem',
            }}
          >
            Latest Blog Posts & Insights
          </h2>
          <p
            style={{
              fontFamily: '"Noto Sans", sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: '1.5',
              color: 'rgb(31, 31, 31)',
              maxWidth: '42rem',
              margin: '2rem auto',
            }}
          >
            Stay updated with the latest insights, trends, and best practices in integration, automation, and digital transformation. Explore our curated blog posts to enhance your knowledge and stay ahead in the industry.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <style>{`
            .carousel-border {
              border: 1px solid #e5e5e5;
              background: #ffffff;
              overflow: hidden;
            }
            .blog-image {
              width: 100%;
              height: auto;
              object-fit: cover;
              display: block;
            }
            .embla__dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #d1d5db;
              border: none;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 4px;
            }
            .embla__dot.embla-dot-adjacent-current,
            .embla__dot.active {
              background: #4b4fe2;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>

          {/* Carousel Viewport */}
          <div className="embla__viewport px-1 py-4 lg:py-8 overflow-hidden">
            <div
              className="embla__container flex transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(-${currentIndex * (100 / slidesPerView)}%, 0px, 0px)`,
              }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="embla__slide carousel-border mx-2 flex flex-col rounded-[10px] overflow-hidden flex-shrink-0"
                  style={{
                    width: `calc(${100 / slidesPerView}% - 1rem)`,
                    minWidth: `calc(${100 / slidesPerView}% - 1rem)`,
                  }}
                >
                  {/* Blog Image */}
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
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: blog.id === 2 ? "cover" : "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  
                  {/* Blog Content */}
                  <div className="flex flex-col gap-3 p-6">
                    {blog.category && (
                      <span
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#4b4fe2',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {blog.category}
                      </span>
                    )}
                    <h3
                      className="line-clamp-2"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        lineHeight: '1.3',
                        color: 'rgb(31, 31, 31)',
                        margin: 0,
                      }}
                    >
                      {blog.title}
                    </h3>
                    <p
                      className="line-clamp-3"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        lineHeight: '1.5',
                        color: 'rgba(31, 31, 31, 0.7)',
                        margin: 0,
                      }}
                    >
                      {blog.description}
                    </p>
                    {blog.date && (
                      <p
                        style={{
                          fontFamily: '"Noto Sans", sans-serif',
                          fontSize: '0.875rem',
                          color: 'rgba(31, 31, 31, 0.6)',
                          margin: 0,
                        }}
                      >
                        {blog.date}
                      </p>
                    )}
                    <a
                      href={blog.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-button group flex items-center text-[#4b4fe2] hover:underline mt-2"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <span>Read more</span>
                      <svg
                        className="ml-2"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="embla__controls flex items-center justify-center mt-8 gap-4">
            <div className="embla__buttons">
              <button
                className="embla__button embla__button--prev"
                type="button"
                aria-label="Previous slide"
                onClick={handlePrev}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #e5e5e5',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.borderColor = '#4b4fe2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#e5e5e5';
                }}
              >
                <svg className="embla__button__svg" viewBox="0 0 532 532" width="20" height="20" fill="currentColor">
                  <path d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"></path>
                </svg>
              </button>
            </div>
            <div className="embla__dots flex items-center">
              {blogs.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`embla__dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <div className="embla__buttons">
              <button
                className="embla__button embla__button--next"
                type="button"
                aria-label="Next slide"
                onClick={handleNext}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #e5e5e5',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.borderColor = '#4b4fe2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#e5e5e5';
                }}
              >
                <svg className="embla__button__svg" viewBox="0 0 532 532" width="20" height="20" fill="currentColor">
                  <path d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
