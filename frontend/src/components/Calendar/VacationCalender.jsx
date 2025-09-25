import React from 'react';
import CalendarMonth from './CalendarMonth';

const VacationCalendar = ({
  currentDate,
  viewType,
  selectedDates,
  getWeekSelectionStatus,
  isHoliday,
  getHolidayName,
  handleDateClick
}) => {

  const renderMonthlyView = () => (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md transition-all duration-300">
      <CalendarMonth
        monthDate={currentDate}
        selectedDates={selectedDates}
        getWeekSelectionStatus={getWeekSelectionStatus}
        isHoliday={isHoliday}
        getHolidayName={getHolidayName}
        handleDateClick={handleDateClick}
      />
    </div>
  );

  const renderQuarterlyView = () => {
    const months = [];
    const startMonth = new Date(currentDate);
    startMonth.setDate(1);

    for (let i = 0; i < 3; i++) {
      const monthDate = new Date(startMonth);
      monthDate.setMonth(startMonth.getMonth() + i);
      months.push(monthDate);
    }

    return (
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-xl shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {months.map((monthDate, index) => (
            <CalendarMonth
              key={index}
              monthDate={monthDate}
              isQuarterView={true}
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

  return (
    <div className="mb-6">
      {viewType === 'monthly' ? renderMonthlyView() : renderQuarterlyView()}
    </div>
  );
};

export default VacationCalendar;
