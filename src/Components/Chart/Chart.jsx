import React, { useEffect, useRef } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
} from 'chart.js';
import { IoWalletOutline } from 'react-icons/io5';
import { PiWalletFill } from 'react-icons/pi';
import { SlGraduation } from 'react-icons/sl';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
);

const Chart = () => {
    const chartRef = useRef(null);

    const getGradient = (ctx, chartArea, colorStart, colorEnd) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        return gradient;
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [0, 7, 20, 5, 20, 10, 35],
                borderColor: 'rgba(166,24,120,1)',
                borderWidth: 3,
                backgroundColor: 'rgba(116,76,157,0.3)', 
                fill: true,
                tension: 0.3,
            },
            {
                data: [0, 14, 4, 12, 25, 0, 30],
                borderColor: 'rgba(190,103,20,1)',
                borderWidth: 3,
                backgroundColor: 'rgba(190,103,20,0.3)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const lineOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                    callback: function (value) {
                        if ([0, 5, 10, 15, 20, 30, 35]) {
                            return value;
                        }
                    },
                },
            },
        },
    };

    const doughnutData = {
        labels: ['Facebook', 'YouTube', 'Direct Search'],
        datasets: [
            {
                data: [55, 33, 12],
                backgroundColor: ['#FF0000', '#744c9d', '#3333FF'],
                hoverBackgroundColor: ['#FF3333', '#800080', '#0000FF'],
                borderWidth: 40, 
                borderColor: '#00000000', 
            },
        ],
    };

    const doughnutOptions = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                position: 'nearest',
            },
        },
        cutout: '75%',
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;

            if (chartArea) {
                lineData.datasets[0].backgroundColor = getGradient(ctx, chartArea, 'rgba(166,24,120,0.1)', 'rgba(101,38,145,0.1)');
                lineData.datasets[1].backgroundColor = getGradient(ctx, chartArea, 'rgba(190,103,20,0.1)', 'rgba(175,155,38,0.1)');
            }
        }
    }, [lineData]);

    return (
        <div className="lg:flex py-2 lg:py-6 px-4 lg:px-8 h-[75%]">
            <div className="flex flex-col lg:w-[70%] lg:mr-4">
                <div className="border-2 border-black p-4 text-center h-[80%] bg-gray-800 rounded-lg">
                    <div className="lg:flex md:flex gap-2">
                        <div className="lg:w-[30%] md:w-[50%] lg:text-start md:text-start p-4">
                            <div className="text-gray-300 mb-4 lg:mb-8">
                                <h1>Dashboard</h1>
                                <p>Overview of latest Month</p>
                            </div>
                            <div className="text-gray-300 mb-4 lg:mb-8">
                                <h1 className="text-3xl font-bold">$6468.96</h1>
                                <p>Current Month Earnings</p>
                            </div>
                            <div className="text-gray-300 mb-4 lg:mb-8">
                                <h1 className="text-3xl font-bold">82</h1>
                                <p>Current Month Sales</p>
                            </div>
                            <div className="py-3 text-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-gray-300">
                                <button>Last Month Summary</button>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <div className="lg:flex justify-between lg:p-4">
                                <div className="flex gap-2 lg:gap-4 lg:tracking-wide text-gray-400 text-base uppercase mb-3 lg:mb-0">
                                    <h1>Daily</h1>
                                    <h1>Weekly</h1>
                                    <h1 className='underline text-teal-600'>Monthly</h1>
                                    <h1>Yearly</h1>
                                </div>
                                <div className="flex gap-4 tracking-wide text-gray-400 text-base">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                        <h1>Online</h1>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                        <h1>Store</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[260px] lg:w-auto md:w-[300px]'>
                                <Line ref={chartRef} data={lineData} options={lineOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-black p-2 lg:p-4 text-center h-[20%] bg-gray-800 rounded-lg">
                    <div className='lg:flex md:grid md:grid-cols-2 justify-between px-4'>
                        <div className='flex gap-6 lg:justify-center items-center mb-3 lg:mb-0'>
                            <div className="bg-pink-500 p-2 rounded-full">
                                <IoWalletOutline className="text-white text-2xl" />
                            </div>
                            <div className='text-start'>
                                <h1 className='text-gray-400 mb-1'>Wallet Balance</h1>
                                <p className='text-white font-bold'>$3,567.80</p>
                            </div>
                        </div>
                        <div className='flex gap-6 lg:justify-center items-center mb-3 lg:mb-0'>
                            <div className="bg-purple-500 p-2 rounded-full">
                                <IoWalletOutline className="text-white text-2xl" />
                            </div>
                            <div className='text-start'>
                                <h1 className='text-gray-400 mb-1'>Referral Earning</h1>
                                <p className='text-white font-bold'>$1589.53</p>
                            </div>
                        </div>
                        <div className='flex gap-6 lg:justify-center items-center mb-3 lg:mb-0'>
                            <div className="bg-purple-600 p-2 rounded-full">
                                <PiWalletFill className="text-white text-2xl" />
                            </div>
                            <div className='text-start'>
                                <h1 className='text-gray-400 mb-1'>Estimate Sales</h1>
                                <p className='text-white font-bold'>$2651.50</p>
                            </div>
                        </div>
                        <div className='flex gap-6 lg:justify-center items-center mb-3 lg:mb-0'>
                            <div className="bg-blue-500 p-2 rounded-full">
                                <PiWalletFill className="text-white text-2xl" />
                            </div>
                            <div className='text-start'>
                                <h1 className='text-gray-400 mb-1'>Earning</h1>
                                <p className='text-white font-bold'>$53,567.54</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative border-2 border-black py-8 px-4 md:px-8 lg:px-3 text-center bg-gray-800 rounded-lg lg:w-[30%]">
        <h1 className="text-start text-gray-300 md:text-2xl">Traffic</h1>
        <div className="flex justify-center">
            <div className="relative">
                <Doughnut data={doughnutData} options={doughnutOptions} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-center w-28 h-28 bg-gray-600 rounded-full">
                        <SlGraduation className="text-white text-4xl" />
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex md:flex md:px-8 lg:px-1 justify-between text-start mt-4">
    <div className="flex items-center">
        <div className='mb-8 lg:mb-0'>
            <h1 className="text-gray-200 text-2xl font-bold mb-2">33%</h1>
            <div className='flex justify-center items-center'>
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <h2 className="text-gray-400 text-base">Facebook</h2>
            </div>
        </div>
    </div>
    <div className="flex items-center">
        <div className='mb-8 lg:mb-0'>
            <h1 className="text-gray-200 text-2xl font-bold mb-2">55%</h1>
            <div className='flex justify-center items-center'>
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <h2 className="text-gray-400 text-base">YouTube</h2>
            </div>
        </div>
    </div>
    <div className="flex items-center">
        <div className='mb-4 lg:mb-0'>
            <h1 className="text-gray-200 text-2xl font-bold mb-2">12%</h1>
            <div className='flex justify-center items-center'>
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <h2 className="text-gray-400 text-base">Direct Search</h2>
            </div>
        </div>
    </div>
</div>

    </div>
        </div>
    );
};

export default Chart;
