import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md mb-4">
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
        <li><a href="#" className="text-gray-800 hover:text-gray-600">Profile</a></li>
        <li><a href="#" className="text-gray-800 hover:text-gray-600">Messages</a></li>
        <li><a href="#" className="text-gray-800 hover:text-gray-600">Notifications</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
