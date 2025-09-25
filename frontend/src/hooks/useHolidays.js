import { useState, useEffect } from "react";
import axios from "axios";
import { formatDateKey } from "../utils/dateHelpers";

export const useHolidays = (selectedCountry) => {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    if (!selectedCountry) return;

    const fetchHolidays = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/holidays/${selectedCountry}`
        );

        const holidaysMap = {};
        res.data.forEach((holiday) => {
          holidaysMap[holiday.date] = holiday.name;
        });

        setHolidays(holidaysMap);
      } catch (error) {
        console.error("Failed to fetch holidays:", error);
        setHolidays({});
      }
    };

    fetchHolidays();
  }, [selectedCountry]);

  const isHoliday = (date) => {
    const dateKey = formatDateKey(date);
    return !!holidays[dateKey];
  };

  const getHolidayName = (date) => {
    const dateKey = formatDateKey(date);
    return holidays[dateKey] || "";
  };

  return { isHoliday, getHolidayName };
};
