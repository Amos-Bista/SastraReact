// ReusableComponent.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';


interface ReusableComponentProps {
  text: string;
  desc: string;
  logo:  IconType;
}

const Expert: React.FC<ReusableComponentProps> = ({ text , desc, logo }) => {
  return (
    <div className='h-68 w-80 border-b-4 border-blue-600 py-10 px-8 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out'>
      <div className='h-30   '> {logo}</div>
      <div>

          <h1 className='text-2xl font-semibold text-gray-700 my-4'>{text}</h1>
          <p className='text-xs'>{desc}</p>
        
      </div>
    </div>
  );
};

export default Expert;
