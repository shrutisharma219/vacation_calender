export const getWeekStart = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.setDate(diff));
};

export const getWeekDates = (date) => {
  const weekStart = getWeekStart(date);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    dates.push(d);
  }
  return dates;
};

export const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateCalendarDays = (startDate) => {
  const firstDay = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const startCalendar = new Date(firstDay);
  startCalendar.setDate(startCalendar.getDate() - firstDay.getDay());
  
  const days = [];
  const totalDays = 42;
  
  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startCalendar);
    date.setDate(startCalendar.getDate() + i);
    days.push(date);
  }
  
  return days;
};
