import React from "react";
import { Calendar, Messages, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { NavbarScreen } from "../ui/NavbarScreen";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from "../../helpers/calendar_config";

const localizer = momentLocalizer(moment);
const myEventsList: [any] = [
    {
        title: "Hola", 
        start: moment().toDate(), 
        end: moment().toDate(), 
        bgcolor: "#fafafa" 
    }
];

export const CalendarScreen = () => {
  return (
    <div>
      <NavbarScreen />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
      />
    </div>
  );
};
