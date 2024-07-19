import React from 'react';
import { MdOutlineWaves, MdRateReview } from 'react-icons/md';
import { Ri24HoursFill, Ri24HoursLine } from 'react-icons/ri';

const Analytics = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 py-2 px-4 lg:px-9 gap-5'>
            <div className='p-5 bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg flex justify-between'>
                <div className='grid grid-cols-2 gap-[88px] md:gap-[9px] lg:gap-9 w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-gray-300 text-base mb-7'>Revenue Status</span>
                        <MdOutlineWaves className='text-white text-7xl mt-2' />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-white text-4xl font-semibold'>$ 432</span>
                        <span className='text-gray-300 mb-2'>Jan 01 - Jan 10</span>
                    </div>
                </div>
            </div>
            <div className='relative px-5 py-12 lg:p-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg overflow-hidden'>
                <div className='flex flex-col items-start'>
                    <span className='text-gray-300 text-base mb-3 -mt-7 lg:-mt-0'>Page View</span>
                    <span className='text-white text-4xl font-semibold mb-7 lg:mb-0'>$ 432</span>
                </div>
                {/* Curved line */}
                <svg className='absolute bottom-0 left-0 w-full' viewBox='0 0 100 50' preserveAspectRatio='none'>
                    <path d='M0,50 
                 C50,20 50,10, 200,10 
                 C300,50 90,20 100,50 
                 V50 
                 H0 
                 Z' fill='#8B5CF6'></path>
                </svg>
            </div>
            <div className='p-5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex justify-between'>
                <div className='grid grid-cols-2 gap-[122px] md:gap-[42px] lg:gap-[70px] w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-white text-base mb-8'>Bounce Rate</span>
                        <span className='text-white text-4xl font-semibold mb-4'>$ 432</span>
                        <select name="text" id="text" className='w-[100%] rounded-lg'></select>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Ri24HoursLine className='text-white text-7xl mt-2'/>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex justify-between'>
                <div className='grid grid-cols-2 gap-[88px] md:gap-[9px] lg:gap-9 w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-gray-300 text-base mb-7'>Revenue Status</span>
                        <MdOutlineWaves className='text-white text-7xl mt-2' />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-white text-4xl font-semibold'>$ 432</span>
                        <span className='text-gray-300 mb-2'>Jan 01 - Jan 10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
