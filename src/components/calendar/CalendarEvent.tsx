import moment from 'moment';

export const CalendarEvent = (event: any) => {
    const { start, end } = event.event;
    return (
        <div>
            <h6>{event.title}</h6>
            <label> Inicia: {moment(start).format('hh:mm A')} - Termina: {moment(end).format('hh:mm A')}</label>
        </div>
    )
}
