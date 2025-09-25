import { useState } from 'react';

export const useCalendarLogic = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState('monthly');
  const [selectedCountry, setSelectedCountry] = useState('US');

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigateQuarter = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction * 3));
    setCurrentDate(newDate);
  };

  return {
    currentDate,
    viewType,
    selectedCountry,
    setViewType,
    setSelectedCountry,
    navigateMonth,
    navigateQuarter
};
};