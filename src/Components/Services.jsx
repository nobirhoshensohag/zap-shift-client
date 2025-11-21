import React from "react";
import services1 from '../assets/service.png'

const services = [
  {
    title: "Express  & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const hoverColors = [
  "hover:bg-[#E8F4FF]", // light blue
  "hover:bg-[#E9FFE8]", // light green
  "hover:bg-[#FFF3E8]", // light orange
  "hover:bg-[#F4E8FF]", // light purple
  "hover:bg-[#FFE8F1]", // light pink
  "hover:bg-[#FFFEE8]", // light yellow
];

const Services = () => {
  return (
    <div className="bg-secondary p-15 m-5 rounded-3xl py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-2 text-[#DADADA]">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br />
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-xl shadow-lg border bg-white 
                transition-all duration-300 cursor-pointer 
                hover:shadow-2xl hover:-translate-y-1
                ${hoverColors[index]}
              `}
            >
              <img 
                src={services1}
                className="w-12 mb-4 mx-auto"
              />

              <h3 className="text-xl font-semibold text-secondary mb-2 text-center">
                {service.title}
              </h3>

              <p className="text-sm text-[#606060] text-center">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Services;

