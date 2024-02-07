// ReusableComponent.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';


interface ReusableComponentProps {
  text: string;
  desc: string;
  logo:  IconType;
}

const AboutExp: React.FC<ReusableComponentProps> = ({ text , desc, logo }) => {
  return (
    <div className='h-90 w-[40%] border-b-4 border-blue-600 py-10 px-16 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out'>
      <div className='h-30   '> {logo}</div>
      <div>

          <h1 className='text-4xl font-semibold text-gray-700 my-4'>{text}</h1>
          <p className='text-m'>{desc}</p>
        
      </div>
    </div>
  );
};

export default AboutExp;
