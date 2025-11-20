import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Network, Code, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "MuleSoft Integration",
      description: "Mule 4 Migration, B2B Integration, API-led Connectivity.",
      buttonText: "Explore MuleSoft",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Management",
      description: "Design, secure, and manage APIs with flexibility and scale.",
      buttonText: "Explore API Management",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Get a synchronized 360-degree view of your data.",
      buttonText: "Explore Data Management",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & AI",
      description: "AI-powered integrations and intelligent automation solutions.",
      buttonText: "Explore Automation",
    },
  ];

  return (
    <section className="relative w-full py-12 px-6 bg-white">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            MuleCraft Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Comprehensive integration and automation solutions to transform your business connectivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white border border-gray-200 rounded-lg p-4",
                "hover:shadow-md transition-shadow duration-300",
                "flex flex-col"
              )}
            >
              {/* Icon */}
              <div className="mb-3 text-[#204066] flex items-center justify-start">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>

              {/* Button */}
              <Button
                variant="outline"
                className={cn(
                  "w-fit rounded-full border-[#204066] text-[#204066]",
                  "hover:bg-[#204066] hover:text-white",
                  "transition-colors duration-300",
                  "px-4 py-1.5 text-xs font-medium"
                )}
              >
                {service.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

