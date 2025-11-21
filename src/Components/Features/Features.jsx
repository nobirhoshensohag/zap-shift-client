import React from "react";
import tracking from "../../assets/live-tracking.png";
import delivery from "../../assets/safe-delivery.png";


const Features = () => {
  const items = [
    {
      img: tracking,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real time with the location tracking feature, from pick-up to delivery monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
      img: delivery,
      title: "100% Safe Delivery",
      desc: "We ensure that every parcel is handled with utmost care and delivered safely to their destination. Our reliable process guarantees safe and secure shipment.",
    },
    {
      img: delivery,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any queries or concerns anytime you need.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6"
        >
          <img src={item.img} alt="" className="h-20 w-20" />

          <div>
            <h3 className="text-xl text-secondary font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed ">
              {item.desc}
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features ;

