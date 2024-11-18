/** @jsxImportSource react */

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { useEffect, useState } from "react";
import "../styles/calendar.css";

const Calendar = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const events = await fetch("/eventosmanga/api/event").then((res) => res.json());
        setEvents(events);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            headerToolbar={{
                left: "prev, next",
		center: "title",
                right: "dayGridMonth, timeGridWeek, listWeek"
            }}
            initialView="dayGridMonth"
            locale={esLocale}
            events={events}
	    eventDisplay="auto"
	    displayEventTime={ false }
	    displayEventEnd={ false }
        />
    );
};

export default Calendar;
