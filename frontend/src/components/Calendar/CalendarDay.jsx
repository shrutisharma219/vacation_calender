import React from 'react';
import { formatDateKey } from '../../utils/dateHelpers';

const CalendarDay = ({
  date,
  monthDate,
  isQuarterView,
  selectedDates,
  getWeekSelectionStatus,
  isHoliday,
  getHolidayName,
  handleDateClick
}) => {
  const dateKey = formatDateKey(date);
  const isCurrentMonth = date.getMonth() === monthDate.getMonth();
  const isSelected = selectedDates.has(dateKey);
  const weekStatus = getWeekSelectionStatus(date);
  const holiday = isHoliday(date);
  const holidayName = getHolidayName(date);

  let bgColor = '';
  if (weekStatus === 'single') bgColor = 'bg-green-200';
  else if (weekStatus === 'multiple') bgColor = 'bg-green-500';

  return (
    <div
      onClick={() => handleDateClick(date)}
      className={`
        ${isQuarterView ? 'h-8 text-xs' : 'h-12 text-sm'} 
        flex items-center justify-center cursor-pointer rounded-lg border
        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-1 shadow-md bg-blue-100' : ''}
        ${bgColor}
        ${holiday ? 'border-red-400' : 'border-gray-200'}
        hover:bg-blue-50 transition duration-200 ease-in-out transform hover:scale-105
        ${!isCurrentMonth ? 'opacity-50' : ''}
      `}
      title={holiday ? holidayName : ''}
    >
      {holiday && (
        <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-[0.55rem] font-bold">H</span>
        </div>
      )}
      <span className={`
        ${holiday ? 'font-bold text-red-600' : ''}
        ${isSelected ? 'font-semibold text-blue-700' : ''}
      `}>
        {date.getDate()}
      </span>
    </div>
  );
};

export default CalendarDay;
