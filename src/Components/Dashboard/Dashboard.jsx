import React, { useState } from 'react';
import { AiFillHdd, AiFillHome, AiFillSignal, AiOutlineBars } from 'react-icons/ai';
import { FaRegChartBar, FaEdit, FaTable, FaRegWindowMaximize, FaBell, FaRegSmile, FaUser, FaExclamationTriangle, FaShoppingCart, FaEnvelope, FaCalendarAlt, FaImages, FaFileAlt } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { RiTodoFill } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';

const Dashboard = ({ toggleDashboard }) => {
    const [selected, setSelected] = useState('Overview');

    const menuItems = [
        { name: 'Overview', icon: <AiFillHome /> },
        { name: 'Widgets', icon: <MdWidgets /> },
        { name: 'Ui Elements', icon: <AiFillHdd /> },
        { name: 'Advanced Ui', icon: <AiFillSignal /> },
        { name: 'Form Elements', icon: <AiOutlineBars /> },
        { name: 'Editors', icon: <FaEdit /> },
        { name: 'Charts', icon: <FaRegChartBar /> },
        { name: 'Tables', icon: <FaTable /> },
        { name: 'Popups', icon: <FaRegWindowMaximize /> },
        { name: 'Notifications', icon: <FaBell /> },
        { name: 'Icons', icon: <FaRegSmile /> },
        { name: 'Maps', icon: <SiGooglemaps /> },
        { name: 'User Pages', icon: <FaUser /> },
        { name: 'Error Pages', icon: <FaExclamationTriangle /> },
        { name: 'E-Commerce', icon: <FaShoppingCart /> },
        { name: 'E-mail', icon: <FaEnvelope /> },
        { name: 'Calender', icon: <FaCalendarAlt /> },
        { name: 'Todo List', icon: <RiTodoFill /> },
        { name: 'Gallery', icon: <FaImages /> },
        { name: 'Documentations', icon: <FaFileAlt /> },
    ];

    return (
        <div className="h-full">
            <div className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 justify-center">
                <div className="flex-shrink-0 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    D
                </div>
                <h1 className="text-base text-white font-semibold">Dashboard</h1>
                <button onClick={toggleDashboard} className="md:hidden ml-auto text-white">X</button>
            </div>
            <ul className='text-base text-gray-300 py-11 px-6'>
                {menuItems.map(item => (
                    <li key={item.name} className="mb-6 flex items-center cursor-pointer" onClick={() => setSelected(item.name)}>
                        <span className={`mr-2 ${selected === item.name ? 'text-green-400' : ''}`}>{item.icon}</span>
                        <a href="#" className={`${selected === item.name ? 'text-green-400' : ''}`}>{item.name}</a>
                        {selected === item.name && <div className="absolute left-0 w-[2px] rounded bg-yellow-400 h-6"></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
