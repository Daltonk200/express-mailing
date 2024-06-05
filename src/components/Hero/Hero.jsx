import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative  xl:w-full container bg-black h-[15rem]">
      <Image 
        src="/planes/Plane_2.jpg" 
        layout="fill" 
        // objectFit="cover" 
        alt="Plane" 
        quality={100} 
        className=" object-cover "
      />
      <div className="
      absolute
       top-11 
       w-[12rem] 
       h-[12rem]
       left-[25%]
       md:left-[41%]  
       xl:left-[43%] 
       ">
        <h1 className='uppercase text-center text-white mb-[8.7rem] font-bold'>contact us</h1>
        <div className='text-white mx-auto  '>
            <Link href='/' className='underline mr-4'>Home </Link>
            <span> &rarr; </span>
            <Link href='/' className='text-wrap text-center text-[#ffa600c5] border-b-2 border-[#ffa600c5] p-2 '>contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
