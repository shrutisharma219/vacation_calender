import React from 'react';
import CalendarDay from './CalendarDay';
import { generateCalendarDays } from '../../utils/dateHelpers';

const CalendarMonth = ({
  monthDate,
  isQuarterView = false,
  selectedDates,
  getWeekSelectionStatus,
  isHoliday,
  getHolidayName,
  handleDateClick
}) => {
  const days = generateCalendarDays(monthDate);
  const monthName = monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className={`bg-white rounded-xl shadow-lg p-5 ${isQuarterView ? 'text-sm' : 'text-base'} transition-all duration-300`}>
      {/* Month title */}
      <h3 className={`font-bold text-center mb-4 text-gray-800 ${isQuarterView ? 'text-base' : 'text-xl'}`}>
        {monthName}
      </h3>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div
            key={day}
            className={`text-center font-semibold text-gray-600 bg-gray-100 rounded-md ${isQuarterView ? 'py-1 text-xs' : 'py-2'}`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            monthDate={monthDate}
            isQuarterView={isQuarterView}
            selectedDates={selectedDates}
            getWeekSelectionStatus={getWeekSelectionStatus}
            isHoliday={isHoliday}
            getHolidayName={getHolidayName}
            handleDateClick={handleDateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarMonth;
