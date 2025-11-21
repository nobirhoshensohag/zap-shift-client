// import React from 'react';
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import amazon from '../../../assets/brands/amazon.png'
// import amazon_vector from '../../../assets/brands/amazon_vector.png'
// import casio from '../../../assets/brands/casio.png'
// import moonstar from '../../../assets/brands/moonstar.png'
// import randstad from '../../../assets/brands/randstad.png'
// import star from '../../../assets/brands/star.png'
// import start_people from '../../../assets/brands/start_people.png'
// import { Autoplay } from 'swiper/modules';
// const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people]

// const Brands = () => {
    
//     return (
    
//         <Swiper
//             loop={true}
//             slidesPerView={3}
//             centeredSlides={true}
//             spaceBetween={30}
//             grabCursor={true}
//             modules={[Autoplay]}
//             autoplay={{
//                 delay: 500,
//                 disableOnInteraction: false,
//             }}

//         >

//             {
//                 brandLogos.map((logo, index) => <SwiperSlide key={index} >
//                     <img src={logo} alt="" />
//                 </SwiperSlide>)
//             }


//         </Swiper>
//     );
// };

// export default Brands;

import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';

const brandLogos = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
];

const Brands = () => {
    return (
        <div className='m-15 p-10'>

            {/* LEFT VERTICAL TEXT */}
            <div className="w-1/3 flex items-center justify-center mx-auto p-5 m-5">
                <h2
                    className=" font-extrabold text-secondary">
                    We’ve helped thousands of sales teams
                </h2>
            </div>

            {/* RIGHT SLIDER */}
            <div>
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    grabCursor={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                    }}
                >
                    {brandLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={logo}
                                alt=""
                                
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Brands;



