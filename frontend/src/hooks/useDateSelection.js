import { useState, useMemo } from 'react';
import { getWeekDates, getWeekStart, formatDateKey } from '../utils/dateHelpers';

export const useDateSelection = () => {
  const [selectedDates, setSelectedDates] = useState(new Set());

  const getWeekSelectionStatus = (date) => {
    const weekDates = getWeekDates(date);
    const weekDateKeys = weekDates.map(formatDateKey);
    const selectedInWeek = weekDateKeys.filter(dateKey => selectedDates.has(dateKey));
    
    if (selectedInWeek.length === 0) return 'none';
    if (selectedInWeek.length === 1) return 'single';
    return 'multiple';
  };

  // Calculate vacation statistics
  const vacationStats = useMemo(() => {
    const totalDays = selectedDates.size;
    const weeksAffected = new Set();
    
    selectedDates.forEach(dateKey => {
      const date = new Date(dateKey);
      const weekStart = getWeekStart(date);
      weeksAffected.add(formatDateKey(weekStart));
    });
    
    return {
      totalDays,
      weeksAffected: weeksAffected.size
    };
  }, [selectedDates]);

  // Toggle date selection
  const handleDateClick = (date) => {
    const dateKey = formatDateKey(date);
    const newSelected = new Set(selectedDates);
    
    if (newSelected.has(dateKey)) {
      newSelected.delete(dateKey);
    } else {
      newSelected.add(dateKey);
    }
    
    setSelectedDates(newSelected);
  };

  const clearAllSelections = () => {
    setSelectedDates(new Set());
  };

  return {
    selectedDates,
    getWeekSelectionStatus,
    vacationStats,
    handleDateClick,
    clearAllSelections
  };
};