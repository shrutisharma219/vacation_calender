import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import CalendarControls from "./components/Calendar/CalendarControls.jsx";
import VacationCalendar from "./components/Calendar/VacationCalender.jsx";
import Legend from "./components/Summary/Legend.jsx";
import VacationSummary from "./components/Summary/VacationSummary.jsx";
import AdminLogin from "./components/AdminLogin.jsx";

import { useCalendarLogic } from "./hooks/useCalendarLogic.js";
import { useDateSelection } from "./hooks/useDateSelection.js";
import { useHolidays } from "./hooks/useHolidays.js";

const App = () => {
  const [role, setRole] = useState("guest");
  const [token, setToken] = useState(null);

  const calendarLogic = useCalendarLogic();
  const dateSelection = useDateSelection();
  const holidays = useHolidays(calendarLogic.selectedCountry);

  if (role === "guest") {
    return (
      <AdminLogin
        onLoginAsAdmin={(jwt) => {
          setToken(jwt);
          setRole("admin");
        }}
        onEnterAsUser={() => setRole("user")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        {role === "admin" && <CalendarControls {...calendarLogic} />}
        <VacationSummary vacationStats={dateSelection.vacationStats} />
        <Legend />
        <VacationCalendar
          {...calendarLogic}
          {...dateSelection}
          {...holidays}
          isAdmin={role === "admin"}
          token={token}
        />
      </div>
    </div>
  );
};

export default App;
