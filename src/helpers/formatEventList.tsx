import moment from "moment";

export const formatEventList = (event_list) => {
  const format_events = event_list.map((item) => ({
    title: item.title,
    start: moment(item.start_date).toDate(),
    end: moment(item.end_date).toDate(),
    bgcolor: "#fafafa",
  }));
  return format_events;
};
