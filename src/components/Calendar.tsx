import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { useEffect, useState } from "react";

const Calendar = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const events = await fetch("/eventosmanga/api/event").then((res) => res.json());
        console.log(events.data);
        setEvents(events);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
            headerToolbar={{
                left: "",
                center: "title",
            }}
            initialView="dayGridMonth"
            locale={esLocale}
            events={events}
            eventDisplay="block"
            eventTimeFormat={{
                hour: "2-digit",
                minute: "2-digit",
            }}
        />
    );
};

export default Calendar;
