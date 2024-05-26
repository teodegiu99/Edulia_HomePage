import React from 'react';
import Image from 'next/image';

const WhyItem = ({ imgUrl, text }: { imgUrl: string, text: string }) => {
  return (
    <div className='w-full flex flex-row justify-start items-start gap-x-6'>
      <div className='flex-shrink-0'>
        <Image src={imgUrl} width={40} height={40} alt="icon" />
      </div>
      <p className='lg:text-[16px] text-[14px] font-semibold text-start'>{text}</p>
    </div>
  );
};

export default WhyItem;
