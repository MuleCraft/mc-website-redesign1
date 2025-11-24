const Services = () => {

  return (
    <section className="relative w-full bg-white min-h-[600px] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1280px] mx-auto">
        {/* Header Section */}
        {/* <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            MuleCraft Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Comprehensive integration and automation solutions to transform your business connectivity.
          </p>
        </div> */}

        {/* Services Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
          {/* {services.map((service, index) => ( */}
             {/* <div
              key={index}
              className={cn(
                "bg-white border border-gray-200 rounded-lg p-4",
                "hover:shadow-md transition-shadow duration-300",
                "flex flex-col"
              )}
            > */}
              {/* Icon */}
              {/* <div className="mb-3 text-[#204066] flex items-center justify-start">
                {service.icon}
              </div> */}

              {/* Title */}
              {/* <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3> */}

              {/* Description */}
              {/* <p className="text-sm text-gray-600 mb-4 flex-grow">
                {service.description}
              </p> */}

              {/* Button */}
              {/* <Button
                variant="outline"
                className={cn(
                  "w-fit rounded-full border-[#204066] text-[#204066]",
                  "hover:bg-[#204066] hover:text-white",
                  "transition-colors duration-300",
                  "px-4 py-1.5 text-xs font-medium"
                )}
              >
                {service.buttonText}
              </Button> */}
            {/* </div> */}
          {/* ))} */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;

