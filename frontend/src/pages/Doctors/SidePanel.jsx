import React from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    return (
      <div className="Shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="mt-[30px]">
          <p className='text_para mt-0 font-semibold text-headingColor'>
            Available Time Slots:
          </p>
          <ul className='mt-2'>
            <li className='flex item-center justify-between mb-1'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                Sunday
              </p>
              <p className='text-[15px] text-textColor font-semibold'>
                4.00 pm - 9.30 pm
              </p>
            </li>
            <li className='flex item-center justify-between mb-1'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                Tuesday
              </p>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                4.00 pm - 9.30 pm
              </p>
            </li>
            <li className='flex item-center justify-between mb-1'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                Wednesday
              </p>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                4.00 pm - 9.30 pm
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link to={'/create'}>
          <button className='@apply bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-while font-[600]'>Book Appointment</button>
          </Link>
        </div>
      </div>
    );
  };
  
  
  
  

export default SidePanel;