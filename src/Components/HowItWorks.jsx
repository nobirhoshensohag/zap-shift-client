import React from 'react';
import { FiTruck, FiPackage, FiMapPin, FiUserCheck } from 'react-icons/fi';
import bookingIcon from '../assets/bookingIcon.png'

const Card = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
    <div className="w-12 h-12 rounded-full bg-lime-50 flex items-center justify-center text-lime-600 text-xl mb-4">
      {icon}
    </div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">How it Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Simple steps to ship & deliver — fast, safe and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
           icon={<img src={bookingIcon} alt='bookingIcon' className='w-6 h-6'/>}
            title="Booking Pick & Drop"
            desc="From your doorstep to business partners — on time every time."
          />
          <Card
            icon={<img src={bookingIcon} alt='bookingIcon' className='w-6 h-6'/>}
            title="Cash on Delivery"
            desc="Secure COD flow for sellers and buyers with easy reconciliation."
          />
          <Card
            icon={<img src={bookingIcon} alt='bookingIcon' className='w-6 h-6'/>}
            title="Delivery Hub"
            desc="Optimized hub routing for faster last-mile delivery."
          />
          <Card
            icon={<img src={bookingIcon} alt='bookingIcon' className='w-6 h-6'/>}
            title="Booking SME & Corporate"
            desc="Dedicated corporate pickup & account dashboard."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
