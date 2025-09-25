import React from 'react';
import { MapPin } from 'lucide-react';

const Legend = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-3xl mx-auto">
      <h3 className="font-bold mb-4 flex items-center gap-3 text-gray-800 text-lg sm:text-xl">
        <MapPin className="w-5 h-5 text-blue-600" />
        Legend
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-green-200 rounded border border-green-300"></div>
          <span>Single day selected (week highlighted light green)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-green-500 rounded border border-green-600"></div>
          <span>Multiple days selected (week highlighted dark green)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-500 rounded bg-white"></div>
          <span>Selected date</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-red-100 border border-red-400 rounded flex items-center justify-center">
            <span className="text-red-600 font-bold text-xs">H</span>
          </div>
          <span className="text-red-600 font-medium">Holiday</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
