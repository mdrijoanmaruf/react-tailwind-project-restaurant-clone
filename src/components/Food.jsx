import React from 'react';

const Food = (props) => {
  return (
    <div className='flex w-[150px] shrink-0'>
      <img src={props.src} className='' alt='food' />
    </div>
  );
};

export default Food;
