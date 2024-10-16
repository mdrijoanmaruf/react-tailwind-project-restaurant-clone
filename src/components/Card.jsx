import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";

const Card = (props) => {
  return (
    // <div className='md:w-[273px] mx-3 shrink-0 grow mt-6'>
    <div className={props.customClass}>
      <div className='group h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className='group-hover:scale-110 duration-200 object-cover w-full h-full' src={props.image} alt="Restaurant" />
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-3 font-bold justify-center text-[20px] text-white tracking-tighter'>
        {props.offer}
        </div>
      </div>

        <div className='mt-3 text-xl font-bold'>
            {props.title}
        </div>
        <div className='text-xl font-bold flex items-center gap-1'>
            <FaStarHalfStroke /> 
            {props.rating}
            <span className='ml-5 font-normal'>
                {props.minTime}-{props.minTime} mins
            </span>
        </div>
        <div>
            {props.name}
            <br />
            {props.place}
        </div>
    </div>
  );
};

export default Card;
