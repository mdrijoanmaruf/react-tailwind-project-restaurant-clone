import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Food from './Food';
import ice from '../assets/Ice_Creams.jpeg';
import poori from '../assets/Poori.jpeg';
import paratha from '../assets/Paratha.jpeg';
import rolls from '../assets/Rolls.jpeg';
import salad from '../assets/Salad.jpeg';
import pure from '../assets/Pure_Veg.jpeg';
import kacchi from '../assets/Khichdi.jpeg';
import briiyani from '../assets/Biryani_2.jpeg';
import pasta from '../assets/Pasta.jpeg';

const Catagary = () => {
  const [slide, setSlide] = useState(0); 
  
  const itemsVisible = 8;

  const nextSlide = () => {
    // Ensure not to go beyond the last group of visible items
    if (slide < foodImages.length - itemsVisible) {
      setSlide((prev) => prev + 3); // Move by 3 items at a time
    }
  };

  const prevSlide = () => {
    // Ensure not to go below the first slide
    if (slide > 0) {
      setSlide((prev) => prev - 3);
    }
  };

  const foodImages = [ice, poori, paratha, rolls, salad, pure, kacchi, briiyani, pasta , ice, poori, paratha, rolls, salad, pure, kacchi, briiyani, pasta , ice, poori, paratha, rolls, salad, pure, kacchi, briiyani, pasta];

  return (
    <div className='max-w-[1200px] mx-auto my-10'>
      <div className='flex items-center justify-between mx-3 md:mx-0'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex gap-2'>
          <div onClick={prevSlide} className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer'>
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide} className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer'>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='flex overflow-hidden'>
        {foodImages.map((image, index) => (
          <div
            key={index}
            className='transition-transform duration-500 overflow-hidden'
            style={{ transform: `translateX(-${slide * 100}px)`, width: '150px', flexShrink: 0 }}
          >
            <Food src={image} />
          </div>
        ))}
      </div>
      <hr className='my-6 border-[1px]'/>
    </div>
  );
};

export default Catagary;
