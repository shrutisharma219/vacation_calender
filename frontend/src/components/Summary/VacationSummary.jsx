import React from 'react';

const VacationSummary = ({ vacationStats }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
          Vacation Summary
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        <div>
          <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
            {vacationStats.totalDays}
          </div>
          <div className="text-gray-500 uppercase tracking-wide text-sm sm:text-base font-medium">
            Total Days
          </div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
            {vacationStats.weeksAffected}
          </div>
          <div className="text-gray-500 uppercase tracking-wide text-sm sm:text-base font-medium">
            Weeks Affected
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationSummary;
