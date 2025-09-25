import React from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { COUNTRIES } from '../../utils/constants';

const CalendarControls = ({
  currentDate,
  viewType,
  selectedCountry,
  setViewType,
  setSelectedCountry,
  navigateMonth,
  navigateQuarter
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => viewType === 'monthly' ? navigateMonth(-1) : navigateQuarter(-1)}
            className="p-2 hover:bg-blue-100 rounded-lg transition-transform transform hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>

          <div className="px-5 py-2 bg-blue-50 rounded-lg font-semibold text-blue-800 shadow-inner">
            {viewType === 'monthly' 
              ? currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
              : `Q${Math.ceil((currentDate.getMonth() + 1) / 3)} ${currentDate.getFullYear()}`}
          </div>

          <button
            onClick={() => viewType === 'monthly' ? navigateMonth(1) : navigateQuarter(1)}
            className="p-2 hover:bg-blue-100 rounded-lg transition-transform transform hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setViewType('monthly')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              viewType === 'monthly' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setViewType('quarterly')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              viewType === 'quarterly' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Quarterly
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-500" />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all"
          >
            {COUNTRIES.map(country => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default CalendarControls;
