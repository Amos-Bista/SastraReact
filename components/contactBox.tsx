// ReusableComponent.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';


interface ReusableComponentProps {
  text: string;
  desc: string;
  desc2: string;
  logo:  IconType;
}

const ContactBox: React.FC<ReusableComponentProps> = ({ text , desc, desc2, logo }) => {
  return (
    <div className='h-68 w-72 border-b-4 border-sky-600 py-10 pl-16 shadow-lg hover:shadow-2xl my-10 transition-all ease-in-out'>
      <div className='h-30   '> {logo}</div>
      <div>

          <h1 className='text-2xl font-semibold text-gray-700 my-4'>{text}</h1>
          <p className='text-xs'>{desc}</p>
          <p className='text-xs'>{desc2}</p>
        
      </div>
    </div>
  );
};

export default ContactBox;
