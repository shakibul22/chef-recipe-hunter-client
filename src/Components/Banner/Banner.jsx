"use client";

import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";

import  { Suspense, lazy } from 'react';
const LazyImage = lazy(() => import('./Container'));

const Banner = () => {

    return (
       <div className=''>
     <Suspense fallback={<div>Loading...</div>}>
        <LazyImage />
      </Suspense>
      <Carousel
      showControls={true}
      leftControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineLeft size={20} weight="bold" color="white" />
        </span>
      }
      rightControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineRight size={20} weight="bold" color="white" />
        </span>
      }>
      <img
        src="https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg
        "
        alt="slider-1"
       
        className="w-full h-full"
      />
      <img
        src="https://th.bing.com/th/id/R.0e3e29b9e474eb9313e8c231bc1697da?rik=aGqdDCKB7VnbSg&pid=ImgRaw&r=0"
        alt="slider-2"
        className="w-full h-full"
      />
      <img
        src="https://th.bing.com/th/id/R.6e0ee678a8d2fef873a67ecfa6b023e6?rik=PT3kDM2c%2b1nx%2bA&pid=ImgRaw&r=0"
        alt="slider-3"
        className="w-full h-full"
      />
   
    </Carousel>


       </div>
 
    );
};
export default Banner;



