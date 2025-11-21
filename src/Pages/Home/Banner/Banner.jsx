import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../../assets/banner/banner1.png'
import bannerimg2 from '../../../assets/banner/banner2.png'
import bannerimg3 from '../../../assets/banner/banner3.png'
import { Link } from 'react-router';
import { MdOutlineArrowOutward } from 'react-icons/md';



const Banner = () => {
    return (
         
        <Carousel autoPlay= {true}
        infiniteLoop= {true}>
            <div className='relative'>
                <img src={bannerimg1} />
                <div className='flex gap-1 items-center font-bold absolute left-22 bottom-20'>
                    <Link to={"/"} className='btn rounded-full bg-primary'>Track Your Parcel</Link>
                    <span className='flex items-center justify-center rounded-full bg-[#1F1F1F] p-2 text-primary'> <MdOutlineArrowOutward /></span>
                    <Link to={"/"} className='btn rounded-full'>Be a Rider</Link>

                </div>
            </div>
            <div className='relative'>
                <img src={bannerimg2} />
                <div className='flex gap-1 items-center font-bold absolute left-22 bottom-20'>
                    <Link to={"/"} className='btn rounded-full bg-primary'>Track Your Parcel</Link>
                    <span className='flex items-center justify-center rounded-full bg-[#1F1F1F] p-2 text-primary'> <MdOutlineArrowOutward /></span>
                    <Link to={"/"} className='btn rounded-full'>Be a Rider</Link>

                </div>
            </div>
            <div className='relative'>
                <img src={bannerimg3} />
                <div className='flex gap-1 items-center font-bold absolute left-22 bottom-20'>
                    <Link to={"/"} className='btn rounded-full bg-primary'>Track Your Parcel</Link>
                    <span className='flex items-center justify-center rounded-full bg-[#1F1F1F] p-2 text-primary'> <MdOutlineArrowOutward /></span>
                    <Link to={"/"} className='btn rounded-full'>Be a Rider</Link>

                </div>
            </div>
        </Carousel>
    )
}
        

export default Banner;

