import React from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';
import { MdOutlineWaves } from 'react-icons/md';

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
            <div className='relative px-5 py-12 lg:p-5 bg-gradient-to-r from-violet-600 to-purple-900 rounded-lg overflow-hidden'>
                <div className='flex flex-col items-start'>
                    <span className='text-gray-300 text-base mb-3 -mt-7 lg:-mt-0'>Page View</span>
                    <span className='text-white text-4xl font-semibold mb-7 lg:mb-0'>$ 432</span>
                </div>
                <svg className='absolute -bottom-1 left-1 w-full' viewBox='0 0 100 50' preserveAspectRatio='none'>
                    <path d='M0,50 
            C10,40 20,30 30,30 
            C40,30 50,40 60,40 
            C70,40 80,30 90,30 
            C100,30 110,40 120,40 
            C130,40 140,30 150,30 
            C155,25 160,40 160,50'
                        fill='#7C3AED'
                        stroke='#ffffff'
                        strokeWidth='1'
                        strokeDasharray='2,2'></path>
                </svg>
            </div>
            <div className='p-5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex justify-between'>
                <div className='grid grid-cols-2 gap-[122px] md:gap-[42px] lg:gap-[70px] w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-white text-base mb-8'>Bounce Rate</span>
                        <span className='text-white text-4xl font-semibold mb-4'>$ 432</span>
                        <select name="bounce-rate" id="bounce-rate" className='w-full rounded-2xl text-gray-700 p-1'>
                            <option value="monthly">Monthly</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-28 h-28 text-white'
                            viewBox="0 0 100 100"
                        >
                            <rect x="10" y="40" width="3" height="20" fill="white" />
                            <rect x="20" y="30" width="3" height="40" fill="white" />
                            <rect x="30" y="20" width="3" height="60" fill="white" />
                            <rect x="40" y="25" width="3" height="50" fill="white" />
                            <rect x="50" y="35" width="3" height="35" fill="white" />
                            <rect x="60" y="25" width="3" height="50" fill="white" />
                            <rect x="70" y="38" width="3" height="30" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex justify-between'>
                <div className='grid grid-cols-2 gap-[88px] md:gap-[9px] lg:gap-9 w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-gray-300 text-base mb-7'>Revenue Status</span>
                        <IoStatsChartOutline className='text-white text-7xl mt-2' />
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
