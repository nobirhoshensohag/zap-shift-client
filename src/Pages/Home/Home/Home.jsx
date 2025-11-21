import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks';
import Services from '../../../Components/Services';
import Brands from '../Brands/Brands';
import Features from '../../../Components/Features/Features';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <Features></Features>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            
        </div>
    );
};

export default Home;