import Holiday from "../models/Holiday.js";

// Get holidays by country
export const getHolidays = async (req, res) => {
  const { countryCode } = req.params;
  const holidays = await Holiday.find({ countryCode });
  res.json(holidays);
};

// Add holiday (protected)
export const addHoliday = async (req, res) => {
  const { countryCode, date, name } = req.body;
  const holiday = await Holiday.create({ countryCode, date, name });
  res.status(201).json(holiday);
};
