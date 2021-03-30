import moment from 'moment';

export const CalendarEvent = (event: any) => {
    const { start, end, desc } = event.event;
    return (
        <div>
            <h6>{event.title}</h6>
            <p>Descripción: {desc}</p>
            <label> Inicia: {moment(start).format('hh:mm A')} - Termina: {moment(end).format('hh:mm A')}</label>
        </div>
    )
}
