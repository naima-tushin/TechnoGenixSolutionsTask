import React from 'react';
import { AiOutlineComment, AiOutlineFileText } from 'react-icons/ai';
import { BiLocationPlus } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { MdAddAlarm, MdCheckCircle } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { PiInfoDuotone } from 'react-icons/pi';
import { useState } from 'react';

const ActivityStatus = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const rowsPerPage = 5;

    const [data, setData] = useState([
        { invoice: '12386', customer: 'Charley Dues', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12387', customer: 'Samson Green', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12388', customer: 'Ellen Reese', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12389', customer: 'Alex Brown', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12390', customer: 'Lisa Ray', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
        { invoice: '12391', customer: 'Tom Cruise', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12392', customer: 'Tony Stark', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12393', customer: 'Bruce Wayne', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12394', customer: 'Clark Kent', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12395', customer: 'Diana Prince', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
        { invoice: '12386', customer: 'Charley Dues', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12387', customer: 'Samson Green', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12388', customer: 'Ellen Reese', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12389', customer: 'Alex Brown', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12390', customer: 'Lisa Ray', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
        { invoice: '12391', customer: 'Tom Cruise', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12392', customer: 'Tony Stark', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12393', customer: 'Bruce Wayne', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12394', customer: 'Clark Kent', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12395', customer: 'Diana Prince', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
        { invoice: '12386', customer: 'Charley Dues', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12387', customer: 'Samson Green', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12388', customer: 'Ellen Reese', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12389', customer: 'Alex Brown', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12390', customer: 'Lisa Ray', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
        { invoice: '12391', customer: 'Tom Cruise', from: 'Russia', price: '$2652', status: 'Process', statusBg: 'bg-pink-400' },
        { invoice: '12392', customer: 'Tony Stark', from: 'USA', price: '$2950', status: 'Open', statusBg: 'bg-purple-400' },
        { invoice: '12393', customer: 'Bruce Wayne', from: 'Canada', price: '$3000', status: 'On Hold', statusBg: 'bg-blue-400' },
        { invoice: '12394', customer: 'Clark Kent', from: 'Germany', price: '$2150', status: 'Process', statusBg: 'bg-green-400' },
        { invoice: '12395', customer: 'Diana Prince', from: 'UK', price: '$3500', status: 'Open', statusBg: 'bg-yellow-500' },
    ]);

    const filteredData = data.filter(row =>
        row.invoice.includes(searchTerm) ||
        row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.price.includes(searchTerm) ||
        row.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const firstEntryIndex = (currentPage - 1) * rowsPerPage + 1;
    const lastEntryIndex = Math.min(currentPage * rowsPerPage, data.length);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleAddRow = () => {
        const newRow = {
            invoice: 'New',
            customer: 'New Customer',
            from: 'New Country',
            price: '$0',
            status: 'New',
            statusBg: 'bg-gray-500'
        };
        setData([...data, newRow]);
    };

    return (
        <div className="lg:flex gap-6 py-5 w-[95%] mx-auto">
            {/* Recent Activities */}
            <div className="lg:w-[35%] px-2 md:px-8 lg:px-4 py-6 bg-gray-800 rounded-lg">
                <h2 className="text-xl text-gray-300 font-bold mb-6">Recent Activities</h2>
                <div className="flex gap-5 md:gap-16 lg:gap-6">
                    <div className='text-gray-500 text-xs md:text-xl lg:text-lg grid justify-center items-center text-center font-medium'>
                        <p className='mb-6'>40 Mins Ago</p>
                        <p className='mb-6'>1 day ago</p>
                        <p className='mb-6'>40 Mins Ago</p>
                        <p className='mb-6'>1 day ago</p>
                        <p>1 day ago</p>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-6 lg:gap-6 py-2'>
                        <div className='relative flex items-center mb-6'>
                            <div className='relative flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full mr-4 md:mr-12 lg:mr-4'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-8 h-8 border-2 border-pink-300 rounded-full flex items-center justify-center'>
                                        <MdCheckCircle className='text-white lg:text-lg' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='md:text-2xl lg:text-xl font-semibold text-gray-300 mb-1'>Task Updated</h1>
                                <p className='text-gray-400 text-xs md:text-lg lg:text-base'>Nikolai Updated a Task</p>
                            </div>
                        </div>
                        <div className='relative flex items-center mb-6'>
                            <div className='relative flex items-center justify-center w-10 h-10 bg-purple-400 rounded-full mr-4 md:mr-12 lg:mr-4'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-8 h-8 flex items-center justify-center'>
                                        <FaHandshake className='text-white text-lg' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='md:text-2xl lg:text-xl font-semibold text-gray-300 mb-1'>Deal Added</h1>
                                <p className='text-gray-400 text-xs md:text-lg lg:text-base'>Panshi Added a Deal</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-6'>
                            <div className='flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full mr-4 md:mr-12 lg:mr-4'>
                                <AiOutlineFileText className='text-white text-lg' />
                            </div>
                            <div>
                                <h1 className='md:text-2xl lg:text-xl font-semibold text-gray-300 mb-1'>Published Article</h1>
                                <p className='text-gray-400 text-xs md:text-lg lg:text-base'>Sanshi Updated an Article</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-6'>
                            <div className='flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full mr-4 md:mr-12 lg:mr-4'>
                                <BiLocationPlus className='text-white text-lg' />
                            </div>
                            <div>
                                <h1 className='md:text-2xl lg:text-xl font-semibold text-gray-300 mb-1'>Dock Updated</h1>
                                <p className='text-gray-400 text-xs md:text-lg lg:text-base'>Manshi Updated a Dock</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center justify-center w-10 h-10 bg-green-400 rounded-full mr-4 md:mr-12 lg:mr-4'>
                                <AiOutlineComment className='text-white text-lg' />
                            </div>
                            <div>
                                <h1 className='md:text-2xl lg:text-xl font-semibold text-gray-300 mb-1'>Replied Comment</h1>
                                <p className='text-gray-400 text-xs md:text-lg lg:text-base'>Fanshi Added a Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Order Status*/}
            <div className="lg:w-[65%] px-4 py-6 bg-gray-800 rounded-lg mt-5 lg:mt-0">
                <h2 className="text-xl text-gray-300 font-bold mb-2">Order Status</h2>
                <p className="text-sm mb-4 text-gray-500">Overview of Latest Month</p>
                <div className="lg:flex md:flex justify-between mb-4">
                    <div className="flex gap-2">
                        <button onClick={handleAddRow} className="flex items-center gap-1 bg-red-500 text-white py-1 px-4 rounded-lg">
                            <MdAddAlarm className="text-lg" />
                            Add
                        </button>
                        <button className="flex items-center gap-1 bg-gray-500 text-white py-1 px-3 rounded-lg">
                            <MdDelete className="text-lg" />
                        </button>
                        <button className="flex items-center gap-1 bg-gray-500 text-white py-1 px-3 rounded-lg">
                            <PiInfoDuotone className="text-lg" />
                        </button>
                        <button className="flex items-center gap-1 bg-gray-500 text-white py-1 px-3 rounded-lg">
                            <IoIosDocument className="text-lg" />
                        </button>
                    </div>
                    <div className="flex gap-2 mt-5 md:mt-0 lg:mt-0">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-500 text-white py-2 px-3 rounded-lg placeholder-gray-300 focus:outline-none"
                        />
                        <button className="flex items-center gap-1 bg-gray-500 text-white py-1 px-3 rounded-lg">
                            <IoIosDocument className="text-lg" />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-gray-300 text-sm lg:text-base uppercase">
                                <th className="py-6 px-4">Invoice</th>
                                <th className="py-6 px-4">Customers</th>
                                <th className="py-6 px-4">From</th>
                                <th className="py-6 px-4">Price</th>
                                <th className="py-6 px-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr key={index} className="text-gray-300">
                                    <td className="py-4 px-4">{row.invoice}</td>
                                    <td className="py-4 lg:px-4 text-gray-500">{row.customer}</td>
                                    <td className="py-4 px-4 text-gray-500">{row.from}</td>
                                    <td className="py-4 px-4 text-gray-500">{row.price}</td>
                                    <td className={`py-4 text-center text-white ${row.statusBg} rounded-lg text-base w-22 h-9 mt-3 flex items-center justify-center`}>
                                        {row.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="lg:flex md:flex justify-between items-center mt-4">
                    <div className="text-gray-500">
                        Showing {firstEntryIndex} to {lastEntryIndex} of {data.length} entries
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-2 text-gray-500 rounded-lg"
                            style={{ fontSize: '32px' }}
                        >
                            ‹
                        </button>
                        {[...Array(totalPages)].map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => handlePageChange(pageIndex + 1)}
                                className={`px-2 flex items-center justify-center rounded-full ${currentPage === pageIndex + 1 ? 'bg-pink-500 text-white mt-4' : 'text-gray-500'}`}
                                style={{ width: currentPage === pageIndex + 1 ? '20px' : '', height: currentPage === pageIndex + 1 ? '20px' : '' }}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-2 text-gray-500 rounded-lg"
                            style={{ fontSize: '32px' }}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityStatus;
