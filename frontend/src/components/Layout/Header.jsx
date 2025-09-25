import React from 'react';
import { Calendar } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-3">
        <Calendar className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12 transform hover:rotate-12 transition-transform duration-500" />
        Vacation Calendar
      </h1>
      <p className="text-gray-600 text-lg sm:text-xl">
        Plan your vacations with intelligent week selection
      </p>
    </div>
  );
};

export default Header;
