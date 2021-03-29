import "moment/locale/es";
import React, { useState } from "react";
import moment from "moment";
import { NavbarScreen } from "../ui/NavbarScreen";
import { messages } from "../../helpers/calendar_config";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Calendar,
  momentLocalizer,
  Event,
  stringOrDate,
} from "react-big-calendar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

moment.locale("es");
const localizer = momentLocalizer(moment);
const myEventsList: [any] = [
  {
    title: "Hola",
    start: moment().toDate(),
    end: moment().toDate(),
    bgcolor: "#fafafa",
  },
];

export const CalendarScreen = () => {
  const [isOpen, setisOpen] = useState(true);

  const onDoubleClick = (evt: Event) => {
    setisOpen(true);

    console.log(evt);
  };

  const handleSelecting = (evt: any) => {
    setisOpen(true);
  }

  const eventStyleGetter: any = (
    event: Event,
    start: stringOrDate,
    end: stringOrDate,
    isSelected: Boolean
  ) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div>
      <NavbarScreen />

      <div className="card">
        <div className="card-body">
          <Calendar
            localizer={localizer}
            events={myEventsList}
            messages={messages}
            eventPropGetter={eventStyleGetter}
            components={{
              event: CalendarEvent,
            }}
            onDoubleClickEvent={onDoubleClick}
            
            style={{ height: 500 }}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
      <CalendarModal isOpen={isOpen} setisOpen={setisOpen}/>
    </div>
  );
};
