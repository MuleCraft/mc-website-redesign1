import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogSection from "./BlogSection";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneCode: "+91",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      country: "INDIA",
      flag: "🇮🇳",
      phone: "+91 7708443455",
      email: "info@mulecraft.in",
      address: "1/17/14 Kannampalikadu, Thiruchengodu Road, Sankari, Salem, Tamil Nadu - 637301",
      mapLink: "#",
    },
    {
      country: "UNITED KINGDOM",
      flag: "🇬🇧",
      phone: "+91 7708443455",
      email: "info@mulecraft.in",
      address: "3rd Floor, 86-90 Paul Street, London, England, EC2A 4NE",
      mapLink: "#",
    },
  ];

  return (
    <div className="min-h-[120vh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {/* Contact Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h1
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: '56px',
                    color: 'rgb(31, 31, 31)',
                    margin: '0 0 1.5rem 0',
                  }}
                >
                  Get in Touch
                </h1>
                <p
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: 'rgb(112, 112, 112)',
                    maxWidth: '600px',
                    margin: '0 auto',
                  }}
                >
                  Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      padding: '2.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: 'rgb(31, 31, 31)',
                        marginBottom: '2rem',
                      }}
                    >
                      Send us a message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* First Name and Last Name Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            className="contact-input"
                            style={{
                              width: '100%',
                              padding: '0.875rem 1.25rem',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontFamily: '"Noto Sans", sans-serif',
                              color: 'rgb(31, 31, 31)',
                              backgroundColor: '#fff',
                              transition: 'all 0.2s ease',
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = '#11b981';
                              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e5e7eb';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            className="contact-input"
                            style={{
                              width: '100%',
                              padding: '0.875rem 1.25rem',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontFamily: '"Noto Sans", sans-serif',
                              color: 'rgb(31, 31, 31)',
                              backgroundColor: '#fff',
                              transition: 'all 0.2s ease',
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = '#11b981';
                              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e5e7eb';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                          className="contact-input"
                          style={{
                            width: '100%',
                            padding: '0.875rem 1.25rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontFamily: '"Noto Sans", sans-serif',
                            color: 'rgb(31, 31, 31)',
                            backgroundColor: '#fff',
                            transition: 'all 0.2s ease',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#11b981';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#e5e7eb';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company"
                          className="contact-input"
                          style={{
                            width: '100%',
                            padding: '0.875rem 1.25rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontFamily: '"Noto Sans", sans-serif',
                            color: 'rgb(31, 31, 31)',
                            backgroundColor: '#fff',
                            transition: 'all 0.2s ease',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#11b981';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#e5e7eb';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="flex gap-3">
                        <div style={{ flex: '0 0 auto' }}>
                          <select
                            name="phoneCode"
                            value={formData.phoneCode}
                            onChange={handleChange}
                            style={{
                              padding: '0.875rem 1.25rem',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontFamily: '"Noto Sans", sans-serif',
                              color: 'rgb(31, 31, 31)',
                              backgroundColor: '#fff',
                              cursor: 'pointer',
                              minWidth: '140px',
                              transition: 'all 0.2s ease',
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = '#11b981';
                              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e5e7eb';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+1">🇺🇸 +1</option>
                          </select>
                        </div>
                        <div style={{ flex: '1' }}>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="contact-input"
                            style={{
                              width: '100%',
                              padding: '0.875rem 1.25rem',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontFamily: '"Noto Sans", sans-serif',
                              color: 'rgb(31, 31, 31)',
                              backgroundColor: '#fff',
                              transition: 'all 0.2s ease',
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = '#11b981';
                              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e5e7eb';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message"
                          rows={5}
                          className="contact-input"
                          style={{
                            width: '100%',
                            padding: '0.875rem 1.25rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontFamily: '"Noto Sans", sans-serif',
                            color: 'rgb(31, 31, 31)',
                            backgroundColor: '#fff',
                            resize: 'vertical',
                            transition: 'all 0.2s ease',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#11b981';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(17, 185, 129, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#e5e7eb';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          padding: '0.875rem 2rem',
                          backgroundColor: '#11b981',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontFamily: '"Noto Sans", sans-serif',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 6px -1px rgba(17, 185, 129, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0ea571';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 12px -1px rgba(17, 185, 129, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#11b981';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(17, 185, 129, 0.3)';
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                {/* Contact Information Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        padding: '2.5rem',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 24px -1px rgba(0, 0, 0, 0.15), 0 4px 8px -1px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                      }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: '#f0fdf4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                          }}
                        >
                          {info.flag}
                        </div>
                        <h3
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '32px',
                            color: 'rgb(31, 31, 31)',
                            margin: 0,
                          }}
                        >
                          {info.country}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#11b981',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Phone size={20} />
                          </div>
                          <p
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: 'rgb(112, 112, 112)',
                              margin: 0,
                            }}
                          >
                            {info.phone}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#11b981',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Mail size={20} />
                          </div>
                          <p
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: 'rgb(112, 112, 112)',
                              margin: 0,
                            }}
                          >
                            {info.email}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#11b981',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <MapPin size={20} />
                          </div>
                          <p
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: 'rgb(112, 112, 112)',
                              margin: 0,
                            }}
                          >
                            {info.address}
                          </p>
                        </div>
                        <a
                          href={info.mapLink}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#11b981',
                            textDecoration: 'none',
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            marginTop: '1.5rem',
                            padding: '0.5rem 0',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.gap = '0.75rem';
                            e.currentTarget.style.color = '#0ea571';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.gap = '0.5rem';
                            e.currentTarget.style.color = '#11b981';
                          }}
                        >
                          Get Direction
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

