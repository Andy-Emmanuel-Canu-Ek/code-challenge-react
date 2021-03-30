import "moment/locale/es";
import { useEffect, useState } from "react";
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
// import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { getEventList } from "../../services/eventService";
import { handleMessageError } from "../../helpers/handleMessages";

moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [isOpen, setisOpen] = useState(false);

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getEventItems();
  }, []);

  const getEventItems = async () => {
    const data = await getEventList();
    if (data.ok) {
      console.log(data.event_list)
      const format_events = data.event_list.map((item) => (
        {
          title: item.title,
          start: moment(item.start_date).toDate(),
          end: moment(item.end_date).toDate(),
          bgcolor: "#fafafa",
        }
      ))
      console.log(format_events);
      setEventList(format_events);
    }else{
      handleMessageError(data);
    }
  };

  const onDoubleClick = (evt: Event) => {
    setisOpen(true);

    console.log(evt);
  };


  const handlePressEvent = (evt: any) => {
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
          selectable={true}
            localizer={localizer}
            events={eventList}
            messages={messages}
            eventPropGetter={eventStyleGetter}
            // components={{
            //   event: CalendarEvent,
            // }}
            onDoubleClickEvent={onDoubleClick}
            onSelectSlot={handlePressEvent}
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
