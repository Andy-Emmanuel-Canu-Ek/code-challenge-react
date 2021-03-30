import "moment/locale/es";
import moment from "moment";
import {
  Calendar,
  momentLocalizer,
  Event,
  stringOrDate,
} from "react-big-calendar";
import { useEffect, useState } from "react";
import { CalendarModal } from "./CalendarModal";
import { CalendarEvent } from "./CalendarEvent";
import { NavbarScreen } from "../ui/NavbarScreen";
import { messages } from "../../helpers/calendar_config";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEventList } from "../../services/eventService";
import { handleMessageError } from "../../helpers/handleMessages";
import { formatEventList } from "../../helpers/formatEventList";

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [isOpen, setisOpen] = useState(false);

  const [eventList, setEventList] = useState([]);
  const [evtModal, setEvtModal] = useState({});

  useEffect(() => {
    getEventItems();
  }, []);

  const getEventItems = async () => {
    const data = await getEventList();
    if (data.ok) {
      setEventList(formatEventList(data.event_list));
    } else {
      handleMessageError(data);
    }
  };

  const handlePressEvent = (e) => {
    setEvtModal(e);
    setisOpen(true);
  };

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
    <>
      <NavbarScreen />

      <div className="card">
        <div className="card-body">
          <Calendar
            selectable={true}
            localizer={localizer}
            events={eventList}
            messages={messages}
            eventPropGetter={eventStyleGetter}
            components={{
              event: CalendarEvent,
            }}
            onSelectSlot={handlePressEvent}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>

      <CalendarModal
        isOpen={isOpen}
        setisOpen={setisOpen}
        evt={evtModal}
        setEventList={setEventList}
      />
    </>
  );
};
